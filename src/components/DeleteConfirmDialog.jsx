import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Divider,
} from "@mui/material";

const DeleteConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  employeeName = "",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "1.6rem",
          fontWeight: 700,
          px: 3,
          py: 2.5,
        }}
      >
        Delete Employee
      </DialogTitle>

      <Divider />

      <DialogContent
        sx={{
          px: 3,
          py: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            color: "#4B5563",
            lineHeight: 1.8,
          }}
        >
          Are you sure you want to permanently delete
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#111827",
          }}
        >
          {employeeName || "this employee"}?
        </Typography>

        <Typography
          sx={{
            mt: 3,
            color: "#DC2626",
            fontSize: ".92rem",
            fontWeight: 500,
          }}
        >
          This action cannot be undone.
        </Typography>
      </DialogContent>

      <Divider />

      <DialogActions
        sx={{
          px: 3,
          py: 2.5,
          gap: 1.5,
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            minWidth: 100,
            fontWeight: 600,
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={onConfirm}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            minWidth: 120,
            fontWeight: 700,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmDialog;