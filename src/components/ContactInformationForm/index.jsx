import "./index.css";
import { TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const ContactInformationForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  // console.log(errors);
  return (
    <>
      
      <Controller
        control={control}
        name="houseNo"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="houseNo"
            label="House Number"
            variant="outlined"
            placeholder="Enter Your house number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.houseNo)}
            helperText={errors.houseNo?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="area"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="area"
            label="Area"
            variant="outlined"
            placeholder="Enter Your area name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.area)}
            helperText={errors.area?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="city"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="city"
            label="City"
            variant="outlined"
            placeholder="Enter Your city name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.city)}
            helperText={errors.city?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="state"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="state"
            label="State"
            variant="outlined"
            placeholder="Enter Your state name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.state)}
            helperText={errors.state?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="pinCode"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="pinCode"
            label="Pin Code"
            variant="outlined"
            placeholder="Enter Your pin code number"
            fullWidth
            margin="normal"
            type="number"
            {...field}
            error={Boolean(errors?.pinCode)}
            helperText={errors.pinCode?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="country"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your country name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors?.country)}
            helperText={errors.country?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="contactNo"
        rules={{ required: "this field is required." }}
        render={({ field }) => (
          <TextField
            id="contactNo"
            label="Contact Number"
            variant="outlined"
            placeholder="Enter Your contact number"
            fullWidth
            margin="normal"
            type="number"
            {...field}
            error={Boolean(errors?.contactNo)}
            helperText={errors.contactNo?.message}
          />
        )}
      />
    </>
  );
};

export default ContactInformationForm;
