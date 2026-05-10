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
import Dashboard from './pages/Dashboard.jsx'

// import page protector
import PageProtector from './services/PageProtector.jsx'

// specify the routes for the app
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'dashboard',
        element: (
          <PageProtector>
            <Dashboard />
          </PageProtector>
        )
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
