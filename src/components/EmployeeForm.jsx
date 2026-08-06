import { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  MenuItem,
  Typography,
  Box,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";


const EmployeeForm = ({
  open,
  handleClose,
  handleSubmit,
  initialData,
}) => {

  const emptyForm = {
    name: "",
    email: "",
    department: "",
    designation: "",
    status: "Active",
    joiningDate: "",
  };

  const [formData, setFormData] =
    useState(emptyForm);


  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        joiningDate: initialData.joiningDate
          ? initialData.joiningDate.substring(0,10)
          : "",
      });
    } else {
      setFormData(emptyForm);
    }
  }, [initialData, open]);


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const onSubmit = () => {
    handleSubmit(formData);
  };


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx:{
          width:{
            xs:"95%",
            sm:"90%",
            md:850,
          },
          maxWidth:"95vw",
          borderRadius:{
            xs:"16px",
            sm:"22px",
          },
          overflow:"hidden",
          boxShadow:
            "0 25px 70px rgba(15,23,42,.18)",
        },
      }}
    >

      <DialogTitle
        sx={{
          px:{
            xs:2.5,
            sm:4,
          },
          py:{
            xs:2.5,
            sm:3,
          },
          bgcolor:"#FCFCFD",
        }}
      >

        <Stack
          direction={{
            xs:"column",
            sm:"row",
          }}
          justifyContent="space-between"
          alignItems={{
            xs:"flex-start",
            sm:"center",
          }}
          gap={2}
        >

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >

            <Box
              sx={{
                width:{
                  xs:46,
                  sm:54,
                },
                height:{
                  xs:46,
                  sm:54,
                },
                borderRadius:"16px",
                bgcolor:"#EEF4FF",
                color:"#2563EB",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
              }}
            >
              <BadgeRoundedIcon
                sx={{
                  fontSize:{
                    xs:24,
                    sm:30,
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize:{
                    xs:"1.2rem",
                    sm:"1.45rem",
                  },
                  fontWeight:700,
                }}
              >
                {initialData
                  ? "Edit Employee"
                  : "Add Employee"}
              </Typography>

              <Typography
                sx={{
                  color:"#64748B",
                  mt:.5,
                  fontSize:{
                    xs:".8rem",
                    sm:".92rem",
                  },
                }}
              >
                {initialData
                  ? "Update employee information."
                  : "Create a new employee record."}
              </Typography>
            </Box>

          </Stack>

          <IconButton
            onClick={handleClose}
            sx={{
              bgcolor:"#F8FAFC",
              width:42,
              height:42,
              alignSelf:{
                xs:"flex-end",
                sm:"center",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>

        </Stack>

      </DialogTitle>

      <Divider />      <DialogContent
        sx={{
          p:{
            xs:2.5,
            sm:4,
          },
        }}
      >

        <Typography
          sx={{
            mb:3,
            fontWeight:700,
            color:"#374151",
            fontSize:{
              xs:"1rem",
              sm:"1.1rem",
            },
          }}
        >
          Employee Details
        </Typography>


        <Grid
          container
          spacing={{
            xs:2,
            sm:3,
          }}
        >

          {/* Employee Name */}

          <Grid
            size={{
              xs:12,
              sm:6,
            }}
          >

            <TextField
              fullWidth
              label="Employee Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root":{
                  height:54,
                  borderRadius:"14px",
                  bgcolor:"#F8FAFC",
                },
              }}
            />

          </Grid>


          {/* Email */}

          <Grid
            size={{
              xs:12,
              sm:6,
            }}
          >

            <TextField
              fullWidth
              type="email"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root":{
                  height:54,
                  borderRadius:"14px",
                  bgcolor:"#F8FAFC",
                },
              }}
            />

          </Grid>


          {/* Department */}

          <Grid
            size={{
              xs:12,
              sm:6,
            }}
          >

            <TextField
              fullWidth
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root":{
                  height:54,
                  borderRadius:"14px",
                  bgcolor:"#F8FAFC",
                },
              }}
            />

          </Grid>


          {/* Designation */}

          <Grid
            size={{
              xs:12,
              sm:6,
            }}
          >

            <TextField
              fullWidth
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root":{
                  height:54,
                  borderRadius:"14px",
                  bgcolor:"#F8FAFC",
                },
              }}
            />

          </Grid>


          {/* Status */}

          <Grid
            size={{
              xs:12,
              sm:6,
            }}
          >

            <TextField
              select
              fullWidth
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root":{
                  height:54,
                  borderRadius:"14px",
                  bgcolor:"#F8FAFC",
                },
              }}
            >

              <MenuItem value="Active">
                Active
              </MenuItem>

              <MenuItem value="Inactive">
                Inactive
              </MenuItem>

            </TextField>

          </Grid>


          {/* Joining Date */}

          <Grid
            size={{
              xs:12,
              sm:6,
            }}
          >

            <DatePicker
              label="Joining Date"
              value={
                formData.joiningDate
                ? dayjs(formData.joiningDate)
                : null
              }
              format="DD/MM/YYYY"

              onChange={(newValue)=>
                setFormData((prev)=>({
                  ...prev,
                  joiningDate:
                    newValue
                    ? newValue.format("YYYY-MM-DD")
                    : "",
                }))
              }

              slotProps={{
                textField:{
                  fullWidth:true,

                  sx:{
                    "& .MuiOutlinedInput-root":{
                      height:54,
                      borderRadius:"14px",
                      bgcolor:"#F8FAFC",
                    },
                  },
                },
              }}
            />

          </Grid>
        </Grid>
      </DialogContent>
      <Divider />      
      
      {/* Footer */}
      <DialogActions
        sx={{
          px:{
            xs:2.5,
            sm:4,
          },
          py:{
            xs:2,
            sm:3,
          },
          bgcolor:"#FCFCFD",
          flexDirection:{
            xs:"column-reverse",
            sm:"row",
          },
          gap:{
            xs:2,
            sm:0,
          },
          justifyContent:"space-between",
        }}
      >
        <Button
          variant="outlined"
          startIcon={
            <CloseRoundedIcon />
          }
          onClick={handleClose}
          sx={{
            width:{
              xs:"100%",
              sm:"auto",
            },
            borderRadius:"12px",
            textTransform:"none",
            fontWeight:600,
            px:3,
            height:46,
            borderColor:"#D1D5DB",
            color:"#374151",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          startIcon={
            <SaveRoundedIcon />
          }
          onClick={onSubmit}
          sx={{
            width:{
              xs:"100%",
              sm:"auto",
            },
            px:4,
            height:46,
            borderRadius:"12px",
            bgcolor:"#111827",
            textTransform:"none",
            fontWeight:700,
            boxShadow:
              "0 10px 25px rgba(17,24,39,.12)",
            "&:hover":{
              bgcolor:"#1F2937",
            },
          }}
        >
          {
            initialData
            ?
            "Update Employee"
            :
            "Save Employee"
          }

        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default EmployeeForm;