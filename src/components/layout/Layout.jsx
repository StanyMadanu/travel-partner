import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="d-flex">
      <>
        <Sidebar />
      </>

      <div className="header-content">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default Layout;
