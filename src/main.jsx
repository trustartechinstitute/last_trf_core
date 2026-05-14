// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// testing router out
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AuthProvider } from './services/authService'
import './index.css'
import App from './App.jsx'

// import pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

// import guards
import RoleGuard from './services/RoleGuard.jsx'

// import page protector
import AuthGuard from './services/AuthGuard.jsx'

// specify the routes for the app
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "dashboard",
        element: (
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        ),
      },
      {
        path: "admin",
        element: (
          <RoleGuard allowedRoles={["admin"]}>
            <AdminDashboard />
          </RoleGuard>
        ),
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
