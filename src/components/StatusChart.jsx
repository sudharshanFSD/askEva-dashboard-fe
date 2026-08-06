import {
  Paper,
  Typography,
  Box,
  Divider,
  Stack,
} from "@mui/material";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22C55E", "#EF4444"];

const StatusChart = ({ employees = [] }) => {
  const active = employees.filter(
    (emp) => emp.status === "Active"
  ).length;

  const inactive = employees.filter(
    (emp) => emp.status === "Inactive"
  ).length;

  const total = employees.length;

  const activePercent =
    total === 0
      ? 0
      : Math.round((active / total) * 100);

  const data = [
    {
      name: "Active",
      value: active,
    },
    {
      name: "Inactive",
      value: inactive,
    },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "22px",
        border: "1px solid #E5E7EB",
        bgcolor: "#fff",
        boxShadow:
          "0 10px 30px rgba(15,23,42,.05)",
      }}
    >
      {/* Header */}

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Workforce Analytics
          </Typography>

          <Typography
            sx={{
              mt: .5,
              color: "#64748B",
            }}
          >
            Employee status distribution across
            your organization.
          </Typography>
        </Box>

        <Box
          sx={{
            px: 2,
            py: .8,
            borderRadius: 999,
            bgcolor: "#EEF4FF",
            color: "#2563EB",
            fontWeight: 700,
            fontSize: ".82rem",
          }}
        >
          Live Data
        </Box>
      </Stack>

      {/* Chart */}

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: {
              xs: "100%",
              md: 330,
            },
            height: 300,
          }}
        >
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={78}
                outerRadius={108}
                paddingAngle={5}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Center */}

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: "2.3rem",
                fontWeight: 800,
                color: "#111827",
                lineHeight: 1,
              }}
            >
              {activePercent}%
            </Typography>

            <Typography
              sx={{
                mt: .8,
                color: "#64748B",
                fontSize: ".9rem",
              }}
            >
              Active
            </Typography>
          </Box>
        </Box>

        {/* RIGHT SIDE STARTS HERE */}<Box
  sx={{
    flex: 1,
    minWidth: 280,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  }}
>
  {/* Active */}

  <Box
    sx={{
      p: 2.5,
      borderRadius: "18px",
      border: "1px solid #DCFCE7",
      bgcolor: "#F0FDF4",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: ".25s",

      "&:hover": {
        transform: "translateY(-3px)",
      },
    }}
  >
    <Box>
      <Typography
        sx={{
          color: "#15803D",
          fontWeight: 700,
          fontSize: ".95rem",
        }}
      >
        Active Employees
      </Typography>

      <Typography
        sx={{
          mt: .6,
          color: "#64748B",
          fontSize: ".85rem",
        }}
      >
        Currently working
      </Typography>
    </Box>

    <Box textAlign="right">
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        {active}
      </Typography>

      <Typography
        sx={{
          color: "#15803D",
          fontWeight: 700,
          fontSize: ".82rem",
        }}
      >
        {activePercent}%
      </Typography>
    </Box>
  </Box>

  {/* Inactive */}

  <Box
    sx={{
      p: 2.5,
      borderRadius: "18px",
      border: "1px solid #FECACA",
      bgcolor: "#FEF2F2",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: ".25s",

      "&:hover": {
        transform: "translateY(-3px)",
      },
    }}
  >
    <Box>
      <Typography
        sx={{
          color: "#B91C1C",
          fontWeight: 700,
          fontSize: ".95rem",
        }}
      >
        Inactive Employees
      </Typography>

      <Typography
        sx={{
          mt: .6,
          color: "#64748B",
          fontSize: ".85rem",
        }}
      >
        Not currently active
      </Typography>
    </Box>

    <Box textAlign="right">
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        {inactive}
      </Typography>

      <Typography
        sx={{
          color: "#B91C1C",
          fontWeight: 700,
          fontSize: ".82rem",
        }}
      >
        {100 - activePercent}%
      </Typography>
    </Box>
  </Box>

  {/* Legend */}

  <Box
    sx={{
      mt: 1,
      display: "flex",
      gap: 3,
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          bgcolor: "#22C55E",
        }}
      />

      <Typography
        sx={{
          color: "#64748B",
          fontWeight: 600,
        }}
      >
        Active
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          bgcolor: "#EF4444",
        }}
      />

      <Typography
        sx={{
          color: "#64748B",
          fontWeight: 600,
        }}
      >
        Inactive
      </Typography>
    </Box>
  </Box>
</Box>

</Box>

<Divider sx={{ my: 4 }} />

<Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 2,
  }}
>
  <Box>
    <Typography
      sx={{
        color: "#64748B",
        fontWeight: 600,
      }}
    >
      Total Workforce
    </Typography>

    <Typography
      sx={{
        mt: .5,
        fontSize: "2rem",
        fontWeight: 800,
        color: "#111827",
      }}
    >
      {total}
    </Typography>
  </Box>

  <Typography
    sx={{
      color: "#94A3B8",
      fontWeight: 600,
      fontSize: ".9rem",
    }}
  >
    Last updated • Just now
  </Typography>
</Box>

</Paper>
);
};

export default StatusChart;