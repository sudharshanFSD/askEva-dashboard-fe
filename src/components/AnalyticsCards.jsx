import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
} from "@mui/material";

import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import PersonOffRoundedIcon from "@mui/icons-material/PersonOffRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";


const AnalyticsCards = ({
  employees = [],
  onAddEmployee,
}) => {
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (emp) => emp.status === "Active"
  ).length;

  const inactiveEmployees = employees.filter(
    (emp) => emp.status === "Inactive"
  ).length;

  const departments = new Set(
    employees.map((emp) => emp.department)
  ).size;

  const activePercentage =
    totalEmployees === 0
      ? 0
      : Math.round(
          (activeEmployees / totalEmployees) * 100
        );

  const cards = [
    {
      title: "Total Employees",
      value: totalEmployees,
      subtitle: "Overall workforce",
      trend: "+12%",
      icon: <GroupsRoundedIcon />,
      color: "#2563EB",
      gradient:
        "linear-gradient(135deg,#2563EB,#60A5FA)",
    },

    {
      title: "Active Employees",
      value: activeEmployees,
      subtitle: `${activePercentage}% Active`,
      trend: "+8%",
      icon: <CheckCircleRoundedIcon />,
      color: "#22C55E",
      gradient:
        "linear-gradient(135deg,#22C55E,#4ADE80)",
    },

    {
      title: "Departments",
      value: departments,
      subtitle: "Across organization",
      trend: "+2",
      icon: <ApartmentRoundedIcon />,
      color: "#EA580C",
      gradient:
        "linear-gradient(135deg,#EA580C,#FB923C)",
    },

    {
      title: "Inactive",
      value: inactiveEmployees,
      subtitle: "Needs attention",
      trend: "-3%",
      icon: <PersonOffRoundedIcon />,
      color: "#EF4444",
      gradient:
        "linear-gradient(135deg,#EF4444,#F87171)",
    },
  ];

  return (
    <Box mb={5}>


      <Grid container spacing={3}>{cards.map((card) => (
  <Grid
    key={card.title}
    size={{
      xs: 12,
      sm: 6,
      xl: 3,
    }}
  >
    <Card
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "22px",
        height: 220,
        bgcolor: "#FFFFFF",
        border: "1px solid #EEF2F7",
        boxShadow:
          "0 8px 30px rgba(15,23,42,.05)",
        transition: "all .3s ease",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow:
            "0 22px 50px rgba(15,23,42,.12)",
        },
      }}
    >
      {/* Decorative Circle */}

      <Box
        sx={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: card.gradient,
          opacity: .08,
        }}
      />

      <CardContent
        sx={{
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: "18px",
              background: card.gradient,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",

              "& svg": {
                fontSize: 30,
              },
            }}
          >
            {card.icon}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: .5,
              px: 1.3,
              py: .5,
              borderRadius: 999,
              bgcolor: "#F0FDF4",
            }}
          >
            <TrendingUpRoundedIcon
              sx={{
                fontSize: 17,
                color: "#16A34A",
              }}
            />

            <Typography
              sx={{
                fontWeight: 700,
                color: "#16A34A",
                fontSize: ".82rem",
              }}
            >
              {card.trend}
            </Typography>
          </Box>
        </Box>

        {/* Number */}

        <Typography
          sx={{
            mt: 3,
            fontSize: "3rem",
            fontWeight: 800,
            color: "#111827",
            letterSpacing: "-2px",
            lineHeight: 1,
          }}
        >
          {card.value}
        </Typography>

        {/* Title */}

        <Typography
          sx={{
            mt: 1,
            fontWeight: 700,
            color: "#111827",
            fontSize: "1rem",
          }}
        >
          {card.title}
        </Typography>

        {/* Subtitle */}

        <Typography
          sx={{
            mt: .5,
            color: "#64748B",
            fontSize: ".88rem",
          }}
        >
          {card.subtitle}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* Footer */}

        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: ".82rem",
              fontWeight: 600,
            }}
          >
            Updated just now
          </Typography>

          <Box
            sx={{
              width: 34,
              height: 6,
              borderRadius: 999,
              background: card.gradient,
            }}
          />
        </Box>
      </CardContent>
    </Card>
  </Grid>
))}      </Grid>
    </Box>
  );
};

export default AnalyticsCards;