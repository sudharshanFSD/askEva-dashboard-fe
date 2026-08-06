import {
  Box,
  Pagination as MuiPagination,
  Typography,
} from "@mui/material";

const Pagination = ({
  page,
  totalPages,
  totalEmployees,
  rowsPerPage,
  onPageChange,
}) => {
  const start =
    totalEmployees === 0
      ? 0
      : (page - 1) * rowsPerPage + 1;

  const end = Math.min(
    page * rowsPerPage,
    totalEmployees
  );

  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
      >
        Showing {start} - {end} of {totalEmployees} employees
      </Typography>

      <MuiPagination
        page={page}
        count={totalPages}
        color="primary"
        shape="rounded"
        onChange={(event, value) =>
          onPageChange(value)
        }
        sx={{
          "& .MuiPaginationItem-root": {
            fontWeight: 600,
            borderRadius: 2,
          },
        }}
      />
    </Box>
  );
};

export default Pagination;