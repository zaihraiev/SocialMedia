import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import LayoutPage from "./pages/Layout";
import HomePage from "./pages/Home";
import LoginPage from "./pages/auth/Login";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: (
          <LoggedInRoutes>
            <HomePage />
          </LoggedInRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <LoggedInRoutes>
            <Profile />
          </LoggedInRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
