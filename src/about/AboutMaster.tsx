import { Outlet } from "react-router-dom";

import Menu from "../shared/components/Menu";

export default function AboutMaster() {
  return (
    <div style={{ backgroundColor: "#c7bca1" }}>
      <Menu />
      <Outlet />
    </div>
  );
}
