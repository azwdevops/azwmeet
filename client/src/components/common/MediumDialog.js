// material ui items
import Dialog from "@mui/material/Dialog";

const MediumDialog = (props) => {
  return (
    <Dialog
      open={props.isOpen}
      maxWidth="md"
      style={{ maxWidth: props?.maxWidth, margin: "auto" }}
      fullWidth
    >
      {props.children}
    </Dialog>
  );
};

export default MediumDialog;
