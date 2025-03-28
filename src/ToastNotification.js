import React from "react";
import { Snackbar, Alert, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";

export default function ToastNotification({
  submission,
  open,
  onClose,
  onLike,
}) {
  if (!submission) return null;

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity="success"
        action={
          <>
            <IconButton
              size="small"
              onClick={onLike}
              color="inherit"
              aria-label="Favorite"
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton
              size="small"
              onClick={onClose}
              color="inherit"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </>
        }
      >
        {`${submission.data.firstName} ${submission.data.lastName} just signed up!`}
      </Alert>
    </Snackbar>
  );
}
