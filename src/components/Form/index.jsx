import "./index.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, FormProvider } from "react-hook-form";

import PersonalInformationForm from "../PersonalInformationForm";
import ContactInformationForm from "../ContactInformationForm";
import EducationalInformationForm from "../EducationalInformationForm";
import EmploymentHistoryForm from "../EmploymentHistoryForm";
import BankDetailsForm from "../BankDetailsForm";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  stepper: {
    "& .MuiStepIcon-active": { color: "red" },
    "& .MuiStepIcon-completed": { color: "green" },
    "& .Mui-disabled .MuiStepIcon-root": { color: "#224957" },
  },
}));

// const config = {
//   headers: {
//     Authorization: "Bearer " + localStorage.getItem("token"),
//   },
// };

function getSteps() {
  return [
    "Personal Information",
    "Educational Information",
    "Contact Information",
    "Bank Details",
    "Employment History",
    "Final Step"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInformationForm />;
    case 1:
      return <EducationalInformationForm />;
    case 2:
      return <ContactInformationForm />;
    case 3:
      return <BankDetailsForm />;
    case 4:
      return <EmploymentHistoryForm />;

    default:
      return "";
  }
}

const Form = () => {
  const { state } = useLocation();
  let navigate = useNavigate();
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: state.data.firstName,
      lastName: state.data.lastName,
      dob: state.data.dob,
      bloodGroup: state.data.bloodGroup,
      gender: state.data.gender,
      citizenship: state.data.citizenship,

      college: state.data.college,
      university: state.data.university,
      cpi: state.data.cpi,
      highestEducationDegree: state.data.highestEducationDegree,
      yearOfPassing: state.data.yearOfPassing,

      houseNo: state.data.houseNo,
      area: state.data.area,
      city: state.data.city,
      state: state.data.state,
      pinCode: state.data.pinCode,
      country: state.data.country,
      contactNo: state.data.contactNo,

      bankName: state.data.bankName,
      accountNo: state.data.accountNo,
      ifcs: state.data.ifcs,

      previousCompany: state.data.previousCompany,
      totalYearsOfExperience: state.data.totalYearsOfExperience,
      joiningDate: state.data.joiningDate,
      exitDate: state.data.exitDate,
      uan: state.data.uan,
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };
  const isStepFalied = () => {
    return Boolean(Object.keys(methods.formState.errors).length);
  };
  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const personal_details = {
    firstName: "",
    lastName: "",
    bloodGroup: "",
    dob: "",
    gender: "",
    citizenship: "",
    user_id: "",
  };

  const education_details = {
    highestEducationDegree: "",
    college: "",
    university: "",
    cpi: "",
    yearOfPassing: "",
  };

  const contact_detais = {
    houseNo: "",
    area: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    contactNo: "",
  };

  const bank_details = {
    bankName: "",
    accountNo: "",
    ifcs: "",
  };

  const employment_history = {
    previousCompany: "",
    totalYearsOfExperience: "",
    joiningDate: "",
    exitDate: "",
    uan: "",
  };

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const { id } = useParams();

  const api_prsnl = `http://localhost:8080/api/user/${id}/editDetails`;
  const api_edu = `http://localhost:8080/api/user/${id}/editEducation`;
  const api_cntc = `http://localhost:8080/api/user/${id}/editAddress`;
  const api_bnk = `http://localhost:8080/api/user/bank/${id}/update`;
  const api_emp = `http://localhost:8080/api/user/${id}/editEmployement`;

  const api_get_prsnl = `http://localhost:8080/api/user/${id}/personalDetails`;
  const api_get_edu = `http://localhost:8080/api/user/${id}/education`;
  const api_get_cntc = `http://localhost:8080/api/user/${id}/addressDetails`;
  const api_get_bnk = `http://localhost:8080/api/user/${id}/bankDetails`;
  const api_get_emp = `http://localhost:8080/api/user/${id}/employement`;

  async function helper(api_put, json, api_get) {
    await axios.put(api_put, json, config);
    updateState(api_get);
  }

  async function updateState(api) {
    const response = await axios.get(api, config);
    delete response.data.id;
    delete response.data.userId;
    for (const key in response.data) {
      state.data[key] = response.data[key];
    }
  }

  // navigate("/employ/dashboard", { state: state });

  const handleNext = (data) => {
    if (activeStep === steps.length -1) {
      setActiveStep(activeStep + 1);
      navigate("/employ/dashboard", { state: state });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
    if (activeStep === 0) {
      for (const key in personal_details) {
        personal_details[key] = data[key];
      }
      helper(api_prsnl, personal_details, api_get_prsnl);
    }

    if (activeStep === 1) {
      for (const key in education_details) {
        education_details[key] = data[key];
      }
      helper(api_edu, education_details, api_get_edu);
    }

    if (activeStep === 2) {
      console.log("posted contact details :");
      for (const key in contact_detais) {
        contact_detais[key] = data[key];
      }
      helper(api_cntc, contact_detais, api_get_cntc);
    }

    if (activeStep === 3) {
      for (const key in bank_details) {
        bank_details[key] = data[key];
      }
      helper(api_bnk, bank_details, api_get_bnk);
    }

    if(activeStep === 4){
      for (const key in employment_history) {
        employment_history[key] = data[key];
      }
      helper(api_emp, employment_history, api_get_emp);
    }

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };
  return (
    <div>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        className={classes.stepper}
      >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepFalied() && activeStep === index) {
            labelProps.error = true;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {/* {activeStep === steps.length ? (
        navigate("/employ/dashboard", { state: state })
      ) : ( */}
      <>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleNext)}>
            {getStepContent(activeStep)}

            <Button
              className={classes.button}
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="contained"
              style={{
                backgroundColor: "#FFA500",
                color: "#ffffff",
              }}
            >
              back
            </Button>
            {isStepOptional(activeStep) && (
              <Button
                className={classes.button}
                variant="contained"
                onClick={handleSkip}
                style={{
                  backgroundColor: "red",
                  color: "#ffffff",
                }}
              >
                skip
              </Button>
            )}
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              style={{
                backgroundColor: "#183444",
                color: "#ffffff",
              }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </form>
        </FormProvider>
      </>
    </div>
  );
};

export default Form;
