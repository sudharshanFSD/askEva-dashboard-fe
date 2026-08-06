import {
  Paper,
  Typography,
  Box,
  Stack,
} from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MonthlyJoinedChart = ({
  employees = [],
}) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const counts = new Array(12).fill(0);

  employees.forEach((emp) => {
    if (emp.joiningDate) {
      const month = new Date(
        emp.joiningDate
      ).getMonth();

      counts[month]++;
    }
  });

  const data = months.map(
    (month, index) => ({
      month,
      employees: counts[index],
    })
  );

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 4,
        p: 4,
        borderRadius: "22px",
        border: "1px solid #E5E7EB",
        boxShadow:
          "0 10px 30px rgba(15,23,42,.05)",
      }}
    >
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
            }}
          >
            Monthly Joined Employees
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              mt: .5,
            }}
          >
            Employee hiring trend
            throughout the year.
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          height: 330,
        }}
      >
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={data}
            barSize={34}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
            />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="employees"
              fill="#6366F1"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
           </Box>

      {/* Footer */}

      <Box
        sx={{
          mt: 3,
          pt: 3,
          borderTop: "1px solid #E5E7EB",
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
              fontSize: ".9rem",
            }}
          >
            Total Joined Employees
          </Typography>

          <Typography
            sx={{
              mt: .5,
              fontSize: "2rem",
              fontWeight: 800,
              color: "#111827",
            }}
          >
            {employees.length}
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "#94A3B8",
            fontWeight: 600,
            fontSize: ".9rem",
          }}
        >
          Based on employee joining dates
        </Typography>
      </Box>
    </Paper>
  );
};

export default MonthlyJoinedChart;