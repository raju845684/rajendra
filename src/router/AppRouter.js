import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/AggregateComponents/About/About";
import Blog from "../components/AggregateComponents/Blog/Blog";
import Contact from "../components/AggregateComponents/Contact/Contact";
import Home from "../components/AggregateComponents/Home/Home";
import Portfolio from "../components/AggregateComponents/Portfolio/Portfolio";
import Servicess from "../components/AggregateComponents/Services/Servicess";
import NotFound from "../components/NotFound/NotFound";
import SignIn from "../components/SignIn/SignIn";
import SIgnUp from "../components/SIgnUp/SIgnUp";
import PageLayout from "./PageLayout";
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../components/admin/DashbordAdmin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Servicess />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/admin" element={<Dashbord />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
