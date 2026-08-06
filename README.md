# Employee Management Dashboard (MERN Stack) 

A full-stack Employee Management Dashboard application built using the MERN stack.

This project provides secure authentication, employee CRUD operations, analytics visualization, search and filtering, pagination, and a responsive dashboard interface.

---

#  Live Demo

## Frontend

https://sudharshanaskeva.netlify.app/

## Backend API

https://askeva-dashboard-be.onrender.com

---

#  Demo Login Credentials

Use the following credentials to access the dashboard:

**Email**
admin@gmail.com

**Password**
Admin@123


---

#  Features

## Authentication Module

- User login functionality
- JWT based authentication
- Token storage using localStorage
- Protected dashboard access
- Logout functionality
- Login form validation
- Error handling with snackbar notifications


---

# Employee Management Dashboard

Complete employee management system with CRUD operations.

## Employee Listing

Displays employee information:

- Employee Name
- Email
- Department
- Designation
- Status
- Joining Date


## CRUD Operations

### Create Employee

- Add new employee using a form
- Form based data entry


### Edit Employee

- Update existing employee details


### Delete Employee

- Delete employees with confirmation dialog


---

# Search & Filtering

Implemented employee filtering features:

- Search by employee name
- Search by employee email
- Filter by department
- Filter by employee status


---

# Analytics Dashboard

Dashboard analytics based on employee data.

Includes:

- Total Employees
- Active Employees
- Inactive Employees
- Department-wise Employee Count
- Employee Status Distribution
- Monthly Joined Employee Analytics


Charts are implemented using:

- Recharts


---

# Pagination

Employee listing includes:

- Client-side pagination
- Dynamic page handling
- Empty state handling


---

# UI / UX Features

- Fully responsive design
- Modern dashboard UI
- Material UI components
- Loading states
- API error handling
- Snackbar notifications
- Confirmation dialogs
- Responsive tables and forms


---

# Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Material UI
- Axios
- Recharts
- Day.js


## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- CORS
- dotenv


## Database

- MongoDB Atlas


---

# Project Structure
Employee Management Dashboard

│
├── frontend
│
│ ├── src
│ │
│ ├── components
│ │ ├── DashboardHeader.jsx
│ │ ├── AnalyticsCards.jsx
│ │ ├── EmployeeTable.jsx
│ │ ├── EmployeeForm.jsx
│ │ ├── SearchFilter.jsx
│ │ ├── Pagination.jsx
│ │ └── Charts
│ │
│ ├── pages
│ │ ├── Login.jsx
│ │ └── Dashboard.jsx
│ │
│ ├── context
│ │ ├── AuthContext.jsx
│ │ └── SnackbarContext.jsx
│ │
│ ├── services
│ │ ├── authService.js
│ │ └── employeeService.js
│ │
│ └── main.jsx
│
│
└── backend
│
├── config
│
├── controllers
│
├── middleware
│
├── models
│
├── routes
│
├── utils
│
└── server.js


---

# Environment Variables

## Frontend

Create a `.env` file:


VITE_API_URL=https://askeva-dashboard-be.onrender.com


---

## Backend

Create a `.env` file:


PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key


---

# Installation & Setup

## Clone Repository


git clone <repository-url>


---

# Frontend Setup

Navigate to frontend:


cd frontend


Install dependencies:


npm install


Run development server:


npm run dev


Frontend runs on:


http://localhost:5173


---

# Backend Setup

Navigate to backend:


cd backend


Install dependencies:


npm install


Start server:


node server.js


Backend runs on:


http://localhost:5000


---

# API Endpoints

## Authentication Routes


### Register User


POST /api/auth/register



### Login User


POST /api/auth/login



Example response:
{
  "token": "jwt_token"
}


Employee Routes

Get Employees
GET /api/employees

Create Employee
POST /api/employees

Update Employee
PUT /api/employees/:id

Delete Employee
DELETE /api/employees/:id

Authentication Flow
User logs in using email and password
Backend validates credentials
JWT token is generated
Token is stored in localStorage
Token is attached to API requests
Protected dashboard becomes accessible
Deployment

Frontend
Deployed using:
Netlify
Build command:
npm run build

Publish directory:
dist
Backend

Deployed using:
Render

Database
Hosted using:
MongoDB Atlas

Future Improvements
Role based authorization
Server-side pagination
Advanced employee analytics
Image/profile upload
Email notifications
Author

Sudharshan

MERN Stack Developer
This is suitable for an interview submission: it explains the **features, stack, setup, API, deployment, and demo access** without looking like a basic tutorial README.
