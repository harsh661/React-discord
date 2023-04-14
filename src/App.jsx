import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserContextProvider } from "./context/UserContext";
import Landing from "./pages/Landing";

const Layout = ({children}) => {
  return (
    <UserContextProvider>
    {children}
    <Outlet />
    </UserContextProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/welcome',
        element: <Landing />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
