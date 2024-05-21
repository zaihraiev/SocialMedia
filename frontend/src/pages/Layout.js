import { Outlet } from "react-router-dom";

export default function LayoutPage() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2023 My App</p>
      </footer>
    </>
  );
}
