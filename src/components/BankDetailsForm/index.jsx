import './index.css';
import {
  TextField,
} from "@material-ui/core";
import {
  Controller,
  useFormContext,
} from "react-hook-form"

const BankDetailsForm= () => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="bankName"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              className="custom-text-field"
              id="bankName"
              label="Bank Name"
              variant="outlined"
              placeholder="Enter Your bank name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.bankName)}
              helperText={errors.bankName?.message}
            />
          )}
        />
  
        <Controller
          control={control}
          name="accountNo"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="accountNo"
              label="Account Number"
              variant="outlined"
              placeholder="Enter Your account number"
              fullWidth
              margin="normal"
              type="number"
              {...field}
              error={Boolean(errors?.accountNo)}
              helperText={errors.accountNo?.message}
            />
          )}
        />
  
        <Controller
          control={control}
          name="ifcs"
          rules={{ required: "this field is required." }}
          render={({ field }) => (
            <TextField
              id="ifcs"
              label="IFCS"
              variant="outlined"
              placeholder="Enter Your ifcs code"
              fullWidth
              margin="normal"
              type="number"
              {...field}
              error={Boolean(errors?.ifcs)}
              helperText={errors.ifcs?.message}
            />
          )}
        />
      </>
    );
  };

  export default BankDetailsForm;