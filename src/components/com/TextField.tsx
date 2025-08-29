import { TextField, TextFieldProps } from "@mui/material";

export default function ComTextField(props: TextFieldProps) {
  return <TextField fullWidth variant="outlined" margin="normal" {...props} />;
}
