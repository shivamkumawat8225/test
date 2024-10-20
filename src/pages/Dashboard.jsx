// import { Button } from "antd";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Home from "../components/Home";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { isAuthenticated, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return isAuthenticated ? (
    <div className="wrapper">
      <Header />
      <SideNav />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Dashboard;
