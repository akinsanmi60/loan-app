import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from "react";

const useToast = () => {
  const [show, setAlertOpen] = useState(false);
  const [severity, setSeverity] = useState(null);
  const [message, setMessage] = useState(null);
  const [durationInMs, setDurationInMs] = useState(5000);

  const showAlert = ({
    severity: s,
    message: m,
    duration = 5000,
  }: {
    severity: any;
    message: any;
    duration?: number | undefined;
  }) => {
    setAlertOpen(true);
    setSeverity(s);
    setMessage(m);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    duration && setDurationInMs(duration);
  };

  const hideAlert = () => {
    setAlertOpen(false);
    setSeverity(null);
    setMessage(null);
  };

  function Toast() {
    return (
      <Snackbar
        open={show}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={durationInMs}
        onClose={hideAlert}
      >
        <MuiAlert
          onClose={hideAlert}
          elevation={6}
          variant="filled"
          // @ts-ignore
          severity={severity?.toString()}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    );
  }

  return {
    Toast,
    showAlert,
    hideAlert,
  };
};

export default useToast;
