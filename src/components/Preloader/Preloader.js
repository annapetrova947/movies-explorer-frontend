import React from "react";
import "./Preloader.css";

const Preloader = () => {
  React.useEffect(() => {
    console.log("preloader");
  }, []);
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
