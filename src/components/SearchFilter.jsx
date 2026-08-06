import {
  Paper,
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
  InputAdornment,
  Box,
  Divider,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RestartAltRoundedIcon from "@mui/icons-material/RestartAltRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

const SearchFilter = ({
  search,
  setSearch,
  department,
  setDepartment,
  status,
  setStatus,
  departments = [],
}) => {
  const handleClear = () => {
    setSearch("");
    setDepartment("");
    setStatus("");
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        border: "1px solid #E5E7EB",
        bgcolor: "#FFFFFF",
        boxShadow: "0 10px 25px rgba(15,23,42,.04)",
      }}
    >
      {/* Header */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2.5,
        }}
      >
        <FilterAltRoundedIcon
          sx={{
            color: "#2563EB",
            fontSize: 22,
          }}
        />

        <Typography
          sx={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Search & Filters
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={2.5}>
        {/* Search */}

        <Grid
          size={{
            xs: 12,
            lg: 5,
          }}
        >
          <TextField
            fullWidth
            placeholder="Search by employee name or email..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon
                    sx={{ color: "#94A3B8" }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 52,
                borderRadius: 3,
                bgcolor: "#F8FAFC",
              },
            }}
          />
        </Grid>

        {/* Department */}

        <Grid
          size={{
            xs: 12,
            sm: 6,
            lg: 2.5,
          }}
        >
          <TextField
            select
            fullWidth
            label="Department"
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 52,
                borderRadius: 3,
                bgcolor: "#F8FAFC",
              },
            }}
          >
<MenuItem value="">
  All Departments
</MenuItem>

{departments.map((dept) => (
  <MenuItem
    key={dept}
    value={dept}
  >
    {dept}
  </MenuItem>
))}
          </TextField>
        </Grid>

        {/* Status */}

        <Grid
          size={{
            xs: 12,
            sm: 6,
            lg: 2.5,
          }}
        >
          <TextField
            select
            fullWidth
            label="Status"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 52,
                borderRadius: 3,
                bgcolor: "#F8FAFC",
              },
            }}
          >
            <MenuItem value="">
              All Status
            </MenuItem>

            <MenuItem value="Active">
              Active
            </MenuItem>

            <MenuItem value="Inactive">
              Inactive
            </MenuItem>
          </TextField>
        </Grid>

        {/* Reset */}

        <Grid
          size={{
            xs: 12,
            lg: 2,
          }}
        >
          <Button
            fullWidth
            variant="outlined"
            startIcon={
              <RestartAltRoundedIcon />
            }
            onClick={handleClear}
            sx={{
              height: 52,
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 700,
              borderColor: "#D1D5DB",
              color: "#475569",

              "&:hover": {
                bgcolor: "#F8FAFC",
                borderColor: "#94A3B8",
              },
            }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchFilter;