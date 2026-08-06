import { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Grid,
} from "@mui/material";

import Navbar from "../components/Navbar";
import AnalyticsCards from "../components/AnalyticsCards";
import SearchFilter from "../components/SearchFilter";
import EmployeeTable from "../components/EmployeeTable";
import Pagination from "../components/Pagination";
import StatusChart from "../components/StatusChart";
import EmployeeForm from "../components/EmployeeForm";
import DeleteConfirmDialog from "../components/DeleteConfirmDialog";
import DashboardHeader from "../components/DashboardHeader";
import DepartmentChart from "../components/DepartmentChart";
import MonthlyJoinedChart from "../components/MonthlyJoinedChart";

import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService";

import { useSnackbar } from "../context/SnackbarContext";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [openDialog, setOpenDialog] =
    useState(false);

  const [selectedEmployee, setSelectedEmployee] =
    useState(null);

  const [deleteDialogOpen, setDeleteDialogOpen] =
    useState(false);

  const [employeeToDelete, setEmployeeToDelete] =
    useState(null);


const [department, setDepartment] = useState("");
  const [search, setSearch] = useState("");
const departments = [
  ...new Set(
    employees
      .map((emp) => emp.department)
      .filter(Boolean)
  ),
].sort();

  const [status, setStatus] = useState("");
  const { showSnackbar } = useSnackbar();



const [page, setPage] = useState(1);
const rowsPerPage = 5;


  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const response = await getEmployees();
      setEmployees(response.data.data);
    } catch (error) {
      setError("Failed to load employees");
      showSnackbar(
        "Failed to load employees.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);



useEffect(() => {
  setPage(1);
}, [search, department, status]);


  const handleAddEmployee = () => {
    setSelectedEmployee(null);
    setOpenDialog(true);
  };


  const handleEditEmployee = (employee) => {
    setSelectedEmployee(employee);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };



  const handleSubmit = async (formData) => {
    try {
      if (selectedEmployee) {
        await updateEmployee(
          selectedEmployee._id,
          formData
        );

        showSnackbar(
          "Employee updated successfully!",
          "success"
        );
      } else {
        await createEmployee(formData);

        showSnackbar(
          "Employee added successfully!",
          "success"
        );
      }

      fetchEmployees();

      handleClose();
    } catch (error) {
      showSnackbar(
        "Something went wrong.",
        "error"
      );
    }
  };

  const handleDeleteEmployee = (employee) => {
    setEmployeeToDelete(employee);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteEmployee(employeeToDelete._id);
      showSnackbar(
        "Employee deleted successfully!",
        "success"
      );

      fetchEmployees();
      closeDeleteDialog();
    } catch (error) {
      showSnackbar(
        "Failed to delete employee.",
        "error"
      );
    }
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setEmployeeToDelete(null);
  };



const filteredEmployees = employees.filter(
  (employee) => {
    const matchesSearch =
      employee.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      employee.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesDepartment =
      department === "" ||
      employee.department === department;

    const matchesStatus =
      status === "" ||
      employee.status === status;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus
    );
  }
);


const totalPages = Math.ceil(
  filteredEmployees.length / rowsPerPage
);

const paginatedEmployees =
  filteredEmployees.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  if (loading) {
    return (
      <>
        <Navbar />

        <Box
          sx={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </>
    );
  }


  if (error) {
    return (
      <>
        <Navbar />
        <Typography
          align="center"
          color="error"
          mt={8}
        >
          {error}
        </Typography>
      </>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F8FAFC",
      }}
    >
      <Navbar />
      <Box
        sx={{
          width: "100%",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
          },
          py: 4,
        }}
      >


<DashboardHeader
  employees={employees}
  onAddEmployee={handleAddEmployee}
/>

{/* analytics */}

<AnalyticsCards
  employees={employees}
/>

        {/* Employee Management */}

        <Box sx={{ mt: 6 }}>
<SearchFilter
  search={search}
  setSearch={setSearch}
  department={department}
  setDepartment={setDepartment}
  status={status}
  setStatus={setStatus}
  departments={departments}
/>
          <Box sx={{ mt: 4 }}>
<EmployeeTable
  employees={paginatedEmployees}
  onEdit={handleEditEmployee}
  onDelete={handleDeleteEmployee}
/>
          </Box>

          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Pagination
  page={page}
  totalPages={totalPages}
  totalEmployees={filteredEmployees.length}
  rowsPerPage={rowsPerPage}
  onPageChange={setPage}
/>
          </Box>
        </Box>


{/* Charts */}

<Box sx={{ mt: 6 }}>
  {/* Top Charts */}

  <Grid container spacing={3}>
    <Grid
      size={{
        xs: 12,
        lg: 6,
      }}
    >
      <StatusChart
        employees={filteredEmployees}
      />
    </Grid>

    <Grid
      size={{
        xs: 12,
        lg: 6,
      }}
    >
      <DepartmentChart
        employees={filteredEmployees}
      />
    </Grid>
  </Grid>

  {/* Bottom Chart */}

  <Box sx={{ mt: 3 }}>
    <MonthlyJoinedChart
      employees={filteredEmployees}
    />
  </Box>
</Box>

        {/* Employee Form */}

        <EmployeeForm
          open={openDialog}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          initialData={selectedEmployee}
        />

        {/* Delete Dialog */}

        <DeleteConfirmDialog
          open={deleteDialogOpen}
          onClose={closeDeleteDialog}
          onConfirm={confirmDelete}
          employeeName={
            employeeToDelete?.name
          }
        />
      </Box>
    </Box>
  );
};

export default Dashboard;