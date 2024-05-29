import { Outlet } from "react-router-dom";
import ErrorMessage from "../components/UI/ErrorMessage";
import Header from "../components/header/Header";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "../store/auth-slice";
import HomeLeft from "./HomeLeft";

export default function LayoutPage() {
  return (
    <>
      <Header />
      <main style={{ height: "calc(100vh - 160px)", marginTop: "60px" }}>
        <Outlet />
      </main>
      <footer>
        <p>© 2023 My App</p>
      </footer>
    </>
  );
}
