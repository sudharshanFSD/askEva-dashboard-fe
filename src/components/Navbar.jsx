import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Chip,
} from "@mui/material";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        color: "#111827",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Toolbar
        sx={{
          minHeight: {
            xs: 72,
            sm: 80,
          },
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          py: {
            xs: 1.5,
            sm: 1,
          },

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          flexDirection: {
            xs: "column",
            sm: "row",
          },

          gap: {
            xs: 2,
            sm: 0,
          },
        }}
      >
        {/* Left */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: {
              xs: "100%",
              sm: "auto",
            },
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#111827",
              width: {
                xs: 42,
                sm: 46,
              },
              height: {
                xs: 42,
                sm: 46,
              },
            }}
          >
            <DashboardRoundedIcon />
          </Avatar>

          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "1.05rem",
                  sm: "1.25rem",
                },
                color: "#111827",
              }}
            >
              Employee Dashboard
            </Typography>

            <Typography
              sx={{
                color: "#6B7280",
                fontSize: {
                  xs: ".78rem",
                  sm: ".88rem",
                },
              }}
            >
              Employee Management System
            </Typography>
          </Box>
        </Box>

        {/* Right */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "space-between",
              sm: "flex-end",
            },
            gap: 2,
            width: {
              xs: "100%",
              sm: "auto",
            },
          }}
        >
          <Chip
            icon={<PersonRoundedIcon />}
            label="Admin"
            sx={{
              bgcolor: "#F3F4F6",
              color: "#111827",
              fontWeight: 600,
              height: 36,
            }}
          />

          <Button
            variant="outlined"
            startIcon={<LogoutRoundedIcon />}
            onClick={handleLogout}
            sx={{
              borderColor: "#111827",
              color: "#111827",
              borderRadius: 2.5,
              px: 2.5,
              height: 40,
              textTransform: "none",
              fontWeight: 600,

              "&:hover": {
                bgcolor: "#111827",
                color: "#fff",
                borderColor: "#111827",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;