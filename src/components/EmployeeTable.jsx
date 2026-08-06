import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Chip,
  IconButton,
  Box,
  Stack,
} from "@mui/material";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const EmployeeTable = ({
  employees = [],
  onEdit,
  onDelete,
}) => {
  const getInitials = (name = "") => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "22px",
        border: "1px solid #E5E7EB",
        overflow: "hidden",
        bgcolor: "#fff",
        boxShadow:
          "0 10px 30px rgba(15,23,42,.04)",
      }}
    >
      <TableContainer>
        <Table>
          {/* Header */}

          <TableHead>
            <TableRow
              sx={{
                bgcolor: "#F8FAFC",

                "& th": {
                  py: 2.2,
                  fontWeight: 700,
                  color: "#475569",
                  fontSize: ".9rem",
                  borderBottom:
                    "1px solid #E5E7EB",
                },
              }}
            >
              <TableCell>
                Employee
              </TableCell>

              <TableCell>
                Department
              </TableCell>

              <TableCell>
                Designation
              </TableCell>

              <TableCell>
                Status
              </TableCell>

              <TableCell>
                Joining Date
              </TableCell>

              <TableCell align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.length > 0 ? (
  employees.map((employee) => (
    <TableRow
      key={employee._id}
      hover
      sx={{
        transition: ".2s",

        "& td": {
          py: 2,
          borderBottom: "1px solid #F1F5F9",
        },

        "&:hover": {
          bgcolor: "#FAFBFC",
        },
      }}
    >
      {/* Employee */}

      <TableCell>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Avatar
            sx={{
              width: 46,
              height: 46,
              bgcolor: "#111827",
              fontWeight: 700,
              fontSize: ".95rem",
            }}
          >
            {getInitials(employee.name)}
          </Avatar>

          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                color: "#111827",
                fontSize: ".95rem",
              }}
            >
              {employee.name}
            </Typography>

            <Typography
              sx={{
                mt: .3,
                color: "#64748B",
                fontSize: ".84rem",
              }}
            >
              {employee.email}
            </Typography>
          </Box>
        </Stack>
      </TableCell>

      {/* Department */}

      <TableCell>
        <Chip
          label={employee.department}
          size="small"
          sx={{
            bgcolor: "#EFF6FF",
            color: "#2563EB",
            fontWeight: 700,
            borderRadius: 2,
          }}
        />
      </TableCell>

      {/* Designation */}

      <TableCell>
        <Typography
          sx={{
            fontWeight: 600,
            color: "#374151",
          }}
        >
          {employee.designation}
        </Typography>
      </TableCell>

      {/* Status */}

      <TableCell>
        <Chip
          label={employee.status}
          size="small"
          sx={{
            borderRadius: 5,
            fontWeight: 700,
            color:
              employee.status === "Active"
                ? "#15803D"
                : "#B91C1C",

            bgcolor:
              employee.status === "Active"
                ? "#DCFCE7"
                : "#FEE2E2",
          }}
        />
      </TableCell>

      {/* Joining Date */}

      <TableCell>
        <Typography
          sx={{
            color: "#64748B",
            fontWeight: 500,
          }}
        >
          {employee.joiningDate
            ? new Date(
                employee.joiningDate
              ).toLocaleDateString()
            : "-"}
        </Typography>
      </TableCell>

      {/* Actions */}

      <TableCell align="center">
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
        >
          <IconButton
            onClick={() =>
              onEdit(employee)
            }
            sx={{
              width: 38,
              height: 38,
              bgcolor: "#EFF6FF",
              color: "#2563EB",

              "&:hover": {
                bgcolor: "#DBEAFE",
              },
            }}
          >
            <EditRoundedIcon
              fontSize="small"
            />
          </IconButton>

          <IconButton
            onClick={() =>
              onDelete(employee)
            }
            sx={{
              width: 38,
              height: 38,
              bgcolor: "#FEF2F2",
              color: "#DC2626",

              "&:hover": {
                bgcolor: "#FEE2E2",
              },
            }}
          >
            <DeleteRoundedIcon
              fontSize="small"
            />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  ))
) : (  <TableRow>
    <TableCell
      colSpan={6}
      align="center"
      sx={{
        py: 10,
      }}
    >
      <Stack
        spacing={2}
        alignItems="center"
      >
        <Avatar
          sx={{
            width: 72,
            height: 72,
            bgcolor: "#F8FAFC",
            color: "#94A3B8",
            fontSize: "1.6rem",
          }}
        >
          👥
        </Avatar>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "#111827",
          }}
        >
          No Employees Found
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            maxWidth: 350,
          }}
        >
          No employees match your current search
          or filter criteria.
        </Typography>
      </Stack>
    </TableCell>
  </TableRow>
)}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default EmployeeTable;