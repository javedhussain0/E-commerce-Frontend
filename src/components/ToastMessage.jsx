import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import { closeSnackbar } from "../redux/reducers/snackbarSlice";

const ToastMessage = ({ message, severity, open }) => {
  const dispatch = useDispatch();
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => dispatch(closeSnackbar())}
    >
      <Alert
        onClose={() => dispatch(closeSnackbar())}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastMessage;


