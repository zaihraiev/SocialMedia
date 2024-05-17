import { Outlet } from "react-router-dom";

export default function LayoutPage() {
  return (
    <>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
