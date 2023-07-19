import { Outlet } from "react-router-dom";

import Menu from "./Menu";

export default function AboutMaster() {
  return (
    <>
      <Menu />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
