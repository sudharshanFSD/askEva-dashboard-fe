import {
  Paper,
  Box,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";

const DashboardHeader = ({
  employees = [],
  onAddEmployee,
}) => {
  const departments = new Set(
    employees.map((emp) => emp.department)
  ).size;

  return (
    <Paper
      elevation={0}
      sx={{
        mb: 5,
        p: {
          xs: 3,
          md: 4,
        },
        borderRadius: 5,
        border: "1px solid #E5E7EB",
        bgcolor: "#fff",
        position: "relative",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          top: -120,
          right: -120,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#2563EB,#60A5FA)",
          opacity: 0.06,
        },
      }}
    >
      {/* Top Row */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 3,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left */}

        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                md: "2.5rem",
              },
              fontWeight: 800,
              color: "#111827",
              letterSpacing: "-1px",
              lineHeight: 1.2,
            }}
          >
            Employee Management
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#64748B",
              fontSize: ".98rem",
              maxWidth: 720,
              lineHeight: 1.8,
            }}
          >
            Manage employee records, departments,
            workforce analytics and organizational
            operations from a centralized dashboard.
          </Typography>
        </Box>

        {/* Right */}

        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          onClick={onAddEmployee}
          sx={{
            minWidth: 185,
            height: 48,
            px: 3,
            borderRadius: "14px",
            bgcolor: "#111827",
            textTransform: "none",
            fontWeight: 700,
            fontSize: ".92rem",
            whiteSpace: "nowrap",
            boxShadow:
              "0 12px 28px rgba(17,24,39,.12)",

            "&:hover": {
              bgcolor: "#1F2937",
              transform: "translateY(-2px)",
              boxShadow:
                "0 18px 36px rgba(17,24,39,.18)",
            },

            transition: ".25s",
          }}
        >
          Add Employee
        </Button>
      </Box>

      {/* Stats */}

      <Stack
        direction="row"
        spacing={1.5}
        flexWrap="wrap"
        useFlexGap
        sx={{
          mt: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Chip
          icon={<GroupsRoundedIcon />}
          label={`${employees.length} Employees`}
          variant="outlined"
          sx={{
            borderRadius: 3,
            height: 38,
            fontWeight: 600,
            bgcolor: "#F8FAFC",
          }}
        />

        <Chip
          icon={<ApartmentRoundedIcon />}
          label={`${departments} Departments`}
          variant="outlined"
          sx={{
            borderRadius: 3,
            height: 38,
            fontWeight: 600,
            bgcolor: "#F8FAFC",
          }}
        />

        <Chip
          icon={<AdminPanelSettingsRoundedIcon />}
          label="Administrator"
          variant="outlined"
          sx={{
            borderRadius: 3,
            height: 38,
            fontWeight: 600,
            bgcolor: "#F8FAFC",
          }}
        />
      </Stack>
    </Paper>
  );
};

export default DashboardHeader;