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
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const DepartmentChart = ({
  employees = [],
}) => {
  const departmentCounts = employees.reduce(
    (acc, emp) => {
      acc[emp.department] =
        (acc[emp.department] || 0) + 1;
      return acc;
    },
    {}
  );

  const data = Object.entries(
    departmentCounts
  ).map(([department, count]) => ({
    department,
    count,
  }));

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "22px",
        border: "1px solid #E5E7EB",
        bgcolor: "#fff",
        height: "100%",
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
            }}
          >
            Department Distribution
          </Typography>

          <Typography
            sx={{
              mt: .5,
              color: "#64748B",
            }}
          >
            Employees by department
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          height: 320,
        }}
      >
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={data}
            barSize={36}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="department"
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="count"
              radius={[8, 8, 0, 0]}
              fill="#2563EB"
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
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#64748B",
              fontSize: ".9rem",
              fontWeight: 600,
            }}
          >
            Total Departments
          </Typography>

          <Typography
            sx={{
              mt: .5,
              fontSize: "2rem",
              fontWeight: 800,
              color: "#111827",
            }}
          >
            {data.length}
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "#94A3B8",
            fontWeight: 600,
            fontSize: ".9rem",
          }}
        >
          Based on current employee records
        </Typography>
      </Box>
    </Paper>
  );
};

export default DepartmentChart;