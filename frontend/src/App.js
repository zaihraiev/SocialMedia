import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import LayoutPage from "./pages/Layout";
import HomePage from "./pages/Home";
import LoginPage from "./pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
