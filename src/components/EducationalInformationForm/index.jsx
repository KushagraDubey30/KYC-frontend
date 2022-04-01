import "./index.css";
import { TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const EducationalInformationForm = () => {
  // const classes = useStyles();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  // console.log(errors);
  return (
    <>
      <Controller
        control={control}
        name="highestEducationDegree"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="highestEducationDegree"
            label="Highest Education Degree"
            variant="outlined"
            placeholder="Enter your highest education degree"
            fullWidth
            margin="normal"
            // className={classes.multilineColor}
            {...field}
            error={Boolean(errors.highestEducationDegree)}
            helperText={errors.highestEducationDegree?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="college"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="=college"
            label="College Name"
            variant="outlined"
            placeholder="Enter Your college name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.college)}
            helperText={errors.college?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="university"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="university"
            label="University"
            variant="outlined"
            placeholder="Enter Your university name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.university)}
            helperText={errors.university?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="cpi"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="cpi"
            label="CPI"
            variant="outlined"
            placeholder="Enter your cpi"
            fullWidth
            type="number"
            margin="normal"
            {...field}
            error={Boolean(errors?.cpi)}
            helperText={errors.cpi?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="yearOfPassing"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="yearOfPassing"
            label="Year Of Passing"
            variant="outlined"
            placeholder=""
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            margin="normal"
            {...field}
            error={Boolean(errors?.yearOfPassing)}
            helperText={errors.yearOfPassing?.message}
          />
        )}
      />
    </>
  );
};

export default EducationalInformationForm;
