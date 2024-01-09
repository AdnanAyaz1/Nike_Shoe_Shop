// AuthLayout.jsx
import React from "react";
import Footer from "../Sections/Footer";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
