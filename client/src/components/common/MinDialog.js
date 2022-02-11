// material ui items
import Dialog from "@mui/material/Dialog";

const MinDialog = (props) => {
  return (
    <Dialog
      open={props.isOpen}
      style={{ maxWidth: props?.maxWidth, margin: "0 auto" }}
      fullWidth
    >
      {props.children}
    </Dialog>
  );
};

export default MinDialog;
