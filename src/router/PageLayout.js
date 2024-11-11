import { Outlet } from "react-router-dom";
// import SocoalMedia from '../CommonComponents/SocoalMedia'
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const PageLayout = () => {
  return (
    <>
      <Header />
      {/* <SocoalMedia /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
