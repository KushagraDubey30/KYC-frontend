import "./index.css";
import { TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const EmploymentHistoryForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  // console.log(errors);
  return (
    <>
      <Controller
        control={control}
        name="totalYearsOfExperience"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            className="custom-text-field"
            id="totalYearsOfExperience"
            label="Total years of experience"
            variant="outlined"
            placeholder="Enter your total years of experience"
            fullWidth
            margin="normal"
            type="number"
            {...field}
            error={Boolean(errors?.totalYearsOfExperience)}
            helperText={errors.totalYearsOfExperience?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="previousCompany"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            className="custom-text-field"
            id="previousCompany"
            label="Previous Comapny"
            variant="outlined"
            placeholder="Enter your previous company"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.previousCompany)}
            helperText={errors.previousCompanyy?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="uan"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="uan"
            label="UAN Number"
            variant="outlined"
            placeholder="Enter your uan number"
            type="number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.uan)}
            helperText={errors.uan?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="joiningDate"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            className="custom-text-field"
            id="joiningDate"
            label="Joining Date"
            variant="outlined"
            placeholder=""
            type="date"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.joiningDate)}
            helperText={errors.joiningDate?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="exitDate"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="exitDate"
            label="Exit Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            variant="outlined"
            placeholder=""
            type="date"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.exitDate)}
            helperText={errors.exitDate?.message}
          />
        )}
      />
    </>
  );
};

export default EmploymentHistoryForm;
