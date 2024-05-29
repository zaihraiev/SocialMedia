import { useDispatch, useSelector } from "react-redux";
import { Navigate, useRouteLoaderData } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { login } from "../store/auth-slice";

const LoggedInRoutes = ({ children }) => {
  const dispatch = useDispatch();

  const user = Cookies.get("user");

  if (user) {
    const userData = JSON.parse(user);
    dispatch(login(userData));

    return children;
  }

  return <Navigate to="/login" />;
};

export default LoggedInRoutes;
