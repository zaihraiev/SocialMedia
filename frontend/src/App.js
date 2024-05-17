import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import LayoutPage from "./pages/Layout";
import HomePage from "./pages/Home";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
