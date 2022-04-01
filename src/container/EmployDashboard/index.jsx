import "./index.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  AccordionActions,
  Button,
  TextField,
  Avatar,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { ExpandMore } from "@mui/icons-material";


const useStyles = makeStyles((theme) =>
  createStyles({
    accordion: {
      margin: theme.spacing(2),
      width: theme.spacing(90),
    },

    margin: {
      width: 100,
      height: 100,
    },
  })
);

const EmployDashboard = () => {
  const classes = useStyles();

  const { state } = useLocation();
  //   console.log("my_data :",state.id);

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/form/${state.id}`, { state: state });
  };

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-container-child-one">
          <div className="avatar-container">
            <Avatar className={classes.margin}></Avatar>
          </div>
          <div className="margin-top-1vh white">
            <b>
              {state.data.firstName} {state.data.lastName}
            </b>
          </div>
          <div className="text-color">User Id : Kushagra </div>
          <div className="text-color margin-top-1px">Deloitte</div>
          <div className="text-color margin-top-1px">{state.email}</div>
          <div className="line"></div>
          <div className="white margin-top-2vh title-var">
            <b> Quick Links </b>
          </div>
          <button className="button-three">
            Update your KYC
          </button>
          <button className="button-three">Home Page</button>
          <button className="button-three">About Us</button>
          <button className = "button-three">Contact Us</button>
        </div>
        <div className="dashboard-container-child-two">
          <Box className={classes.accordion}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Personal Informaion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  First Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </Typography>
                <Typography>&nbsp;{state.data.firstName}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </Typography>
                <Typography>&nbsp;{state.data.lastName}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                </Typography>
                <Typography>&nbsp;{state.data.gender}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Date Of Birth :
                </Typography>
                <Typography>&nbsp;{state.data.dob}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Blood Group&nbsp; :
                </Typography>
                <Typography>&nbsp;{state.data.bloodGroup}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Citizenship&nbsp;&nbsp;&nbsp; :
                </Typography>
                <Typography>&nbsp;{state.data.citizenship}</Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#183444",
                    color: "#ffffff",
                  }}
                >
                  Edit Details
                </Button>
              </AccordionActions>
            </Accordion>
          </Box>
          <Box className={classes.accordion}>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Education Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Highest Education Degree :
                </Typography>
                <Typography>
                  &nbsp;{state.data.highestEducationDegree}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  College
                  Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                </Typography>
                <Typography>&nbsp;{state.data.college}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  University&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  :
                </Typography>
                <Typography>&nbsp;{state.data.university}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  CPI
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                </Typography>
                <Typography>&nbsp;{state.data.cpi}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Year of Passing
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp; :
                </Typography>
                <Typography>&nbsp;{state.data.yearOfPassing}</Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#183444",
                    color: "#ffffff",
                  }}
                >
                  Edit Details
                </Button>
              </AccordionActions>
            </Accordion>
          </Box>
          <Box className={classes.accordion}>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Contact Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  House Number &nbsp;&nbsp;:
                </Typography>
                <Typography>&nbsp;{state.data.houseNo}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Area
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </Typography>
                <Typography>&nbsp;{state.data.area}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  City
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </Typography>
                <Typography>&nbsp;{state.data.city}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  State
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </Typography>
                <Typography>&nbsp;{state.data.state}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Pin
                  Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;:
                </Typography>
                <Typography>&nbsp;{state.data.pinCode}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Country&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;:
                </Typography>
                <Typography>&nbsp;{state.data.country}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Contact Number :
                </Typography>
                <Typography>&nbsp;{state.data.contactNo}</Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#183444",
                    color: "#ffffff",
                  }}
                >
                  Edit Details
                </Button>
              </AccordionActions>
            </Accordion>
          </Box>
          <Box className={classes.accordion}>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Bank Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Bank Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                </Typography>
                <Typography>&nbsp;{state.data.bankName}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Account Number :
                </Typography>
                <Typography>&nbsp;{state.data.accountNo}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  IFSC Code &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                </Typography>
                <Typography>&nbsp;{state.data.ifcs}</Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#183444",
                    color: "#ffffff",
                  }}
                >
                  Edit Details
                </Button>
              </AccordionActions>
            </Accordion>
          </Box>
          <Box className={classes.accordion}>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Employment History</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  {" "}
                  Total Years Of Experience :
                </Typography>
                <Typography>
                  &nbsp;{state.data.totalYearsOfExperience}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Previous Company
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                </Typography>
                <Typography>&nbsp;{state.data.previousCompany}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  UAN Number
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
                </Typography>
                <Typography>&nbsp;{state.data.uan}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Joining Date
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </Typography>
                <Typography>&nbsp;{state.data.joiningDate}</Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography style={{ color: "grey" }}>
                  Exit Date
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;:
                </Typography>
                <Typography>&nbsp;{state.data.exitDate}</Typography>
              </AccordionDetails>
              <AccordionActions>
                <Button
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#183444",
                    color: "#ffffff",
                  }}
                >
                  Edit Details
                </Button>
              </AccordionActions>
            </Accordion>
          </Box>
        </div>
        <div className="dashboard-container-child-three">
          <p className="orange title-small">
            Upload your documents for verification
          </p>
          <TextField type="file" variant="filled"></TextField>
          <p className="white">Upload your Aadhaar card</p>
          <TextField type="file" variant="filled"></TextField>
          <p className="white">Upload your PAN card</p>
          <TextField type="file" variant="filled"></TextField>
          <p className="white"> Upload your marksheet</p>
          <button className="button-one">SUBMIT</button>
        </div>
      </div>
    </>
  );
};

export default EmployDashboard;
