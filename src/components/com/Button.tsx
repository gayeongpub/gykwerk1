import { Button, ButtonProps } from "@mui/material";

export default function ComButton(props: ButtonProps) {
  return (
    <Button variant="contained" {...props}>
      {props.children}
    </Button>
  );
}
