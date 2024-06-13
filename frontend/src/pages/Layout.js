import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

export default function LayoutPage() {
  return (
    <>
      <Header />
      <main style={{ marginTop: "60px" }}>
        <Outlet />
      </main>
      <footer>
        <p>© 2023 My App</p>
      </footer>
    </>
  );
}
