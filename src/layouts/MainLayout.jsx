import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-[68px]">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-(68px+52px))]">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
