import './index.css';
import {
  TextField,
  FormControl,  
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import {
  Controller,
  useFormContext,
} from "react-hook-form";

const PersonalInformationForm = () => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    // console.log(errors);
    return (
      <>
        <Controller
          control={control}
          name="firstName"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              className="custom-text-field"
              id="firstName"
              label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.firstName)}
              helperText={errors.firstName?.message}
            />
          )}
        />
  
        <Controller
          control={control}
          name="lastName"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.lastName)}
              helperText={errors.lastName?.message}
            />
          )}
        />
  
        <Controller
          control={control}
          name="gender"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <FormControl margin="normal" control={control}>
              <FormLabel id="gender">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                {...field}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          )}
        />
  
        <Controller
          control={control}
          name="dob"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="dob"
              label="Date of Birth"
              variant="outlined"
              placeholder=""
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              margin="normal"
              {...field}
              error={Boolean(errors?.dob)}
              helperText={errors.dob?.message}
            />
          )}
        />
  
        <Controller
          control={control}
          name="bloodGroup"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="bloodGroup"
              label="Blood Group"
              variant="outlined"
              placeholder="Enter Your blood group"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.bloodGroup)}
              helperText={errors.bloodGroup?.message}
            />
          )}
        />
  
        <Controller
          control={control}
          name="citizenship"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="citizenship"
              label="Citizenship"
              variant="outlined"
              placeholder="Enter Your citizenship"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.citizenship)}
              helperText={errors.citizenship?.message}
            />
          )}
        />
      </>
    );
  };

  export default PersonalInformationForm;