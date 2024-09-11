import { Outlet } from "react-router-dom";
import Navbar from "../general/Navbar";

export default function Applayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
