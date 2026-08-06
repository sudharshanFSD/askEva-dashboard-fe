import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";
import InsightsIcon from "@mui/icons-material/Insights";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { useSnackbar } from "../context/SnackbarContext";


const Login = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  const { showSnackbar } = useSnackbar();


  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });


  const [errors,setErrors] = useState({
    email:"",
    password:"",
  });


  const [loading,setLoading] = useState(false);



  const handleChange = (e)=>{

    const {name,value}=e.target;

    setFormData((prev)=>({
      ...prev,
      [name]:value,
    }));

    setErrors((prev)=>({
      ...prev,
      [name]:"",
    }));

  };



  const validateForm = ()=>{

    const newErrors={};


    if(!formData.email.trim()){

      newErrors.email="Email is required";

    }
    else if(
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ){

      newErrors.email=
      "Please enter a valid email address";

    }



    if(!formData.password.trim()){

      newErrors.password=
      "Password is required";

    }
    else if(formData.password.length < 6){

      newErrors.password=
      "Password must be at least 6 characters";

    }



    setErrors(newErrors);


    return Object.keys(newErrors).length===0;

  };



  const handleSubmit = async(e)=>{

    e.preventDefault();


    if(!validateForm()){

      showSnackbar(
        "Please fix the validation errors.",
        "error"
      );

      return;
    }



    try{

      setLoading(true);


      const response =
      await loginUser(formData);


      login(response.data.token);


      showSnackbar(
        "Login successful!",
        "success"
      );


      navigate("/dashboard");


    }
    catch(error){

      showSnackbar(
        error.response?.data?.message ||
        "Login failed",
        "error"
      );

    }
    finally{

      setLoading(false);

    }

  };



  return (

<Box
sx={{
  minHeight:"100vh",
  display:"flex",

  flexDirection:{
    xs:"column",
    md:"row",
  },

  background:"#F3F4F6",
}}
>


{/* LEFT PANEL */}

<Box
sx={{

  width:{
    xs:"100%",
    md:"50%",
  },


  minHeight:{
    xs:"auto",
    md:"100vh",
  },


  background:
  "linear-gradient(160deg,#0F172A,#1E293B)",


  color:"white",


  display:{
    xs:"none",
    md:"flex",
  },


  flexDirection:"column",


  justifyContent:"center",


  px:{
    md:8,
    lg:10,
  },

}}
>


<Avatar
sx={{
  width:70,
  height:70,
  bgcolor:"rgba(255,255,255,.08)",
  mb:4,
}}
>

<DashboardIcon
sx={{
fontSize:40
}}
/>

</Avatar>



<Typography

sx={{

fontSize:{
 md:"2.5rem",
 lg:"3rem",
},

fontWeight:800,

mb:2,

lineHeight:1.2,

}}

>

Employee
<br/>
Management
<br/>
Dashboard

</Typography>



<Typography

sx={{

opacity:.9,

mb:5,

lineHeight:1.8,

fontSize:18,

maxWidth:500,

}}

>

Manage employees effortlessly with secure
authentication, analytics and complete
employee management.

</Typography>


<Stack spacing={3}>


<Stack
direction="row"
spacing={2}
>

<GroupsIcon/>

<Typography>
Employee Management
</Typography>

</Stack>



<Stack
direction="row"
spacing={2}
>

<InsightsIcon/>

<Typography>
Analytics Dashboard
</Typography>

</Stack>



<Stack
direction="row"
spacing={2}
>

<SecurityIcon/>

<Typography>
Secure JWT Authentication
</Typography>

</Stack>


</Stack>


</Box>{/* RIGHT PANEL */}

<Box
sx={{
  flex:1,

  display:"flex",

  justifyContent:"center",

  alignItems:"center",

  p:{
    xs:2,
    sm:3,
    md:4,
  },

}}
>


<Paper
elevation={8}
sx={{

  width:{
    xs:"100%",
    sm:430,
  },

  maxWidth:430,

  p:{
    xs:3,
    sm:5,
  },

  borderRadius:5,

}}

>


<Stack
alignItems="center"
spacing={2}
>


<Avatar
sx={{
  bgcolor:"#111827",

  width:65,

  height:65,
}}
>

<LockOutlinedIcon
fontSize="large"
/>

</Avatar>



<Typography
variant="h4"
fontWeight="bold"

sx={{

fontSize:{
 xs:"1.8rem",
 sm:"2.125rem",
},

}}

>

Welcome Back

</Typography>



<Typography
color="text.secondary"
>

Login to continue

</Typography>



<Box

component="form"

onSubmit={handleSubmit}

sx={{
 width:"100%",
 mt:2,
}}

>


<TextField

fullWidth

label="Email Address"

name="email"

type="email"

margin="normal"

value={formData.email}

onChange={handleChange}

error={!!errors.email}

helperText={errors.email}

sx={{

"& .MuiOutlinedInput-root":{

borderRadius:3,

bgcolor:"#F8FAFC",

},

}}

/>



<TextField

fullWidth

label="Password"

name="password"

type="password"

margin="normal"

value={formData.password}

onChange={handleChange}

error={!!errors.password}

helperText={errors.password}

sx={{

mt:2,

"& .MuiOutlinedInput-root":{

borderRadius:3,

bgcolor:"#F8FAFC",

},

}}

/>



<Button

type="submit"

variant="contained"

fullWidth

size="large"

disabled={loading}

sx={{

mt:3,

py:1.6,

borderRadius:3,

textTransform:"none",

fontSize:17,

fontWeight:700,

bgcolor:"#111827",



"&:hover":{

bgcolor:"#0F172A",

},



"&:disabled":{

bgcolor:"#9CA3AF",

color:"#fff",

},

}}

>

{
loading
?
"Signing In..."
:
"Login"
}

</Button>



</Box>        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt:3,
            textAlign:"center",
            fontSize:{
              xs:".8rem",
              sm:".875rem",
            },
          }}
        >
          Secure Employee Management System
        </Typography>


      </Stack>

    </Paper>

  </Box>


</Box>

  );

};


export default Login;