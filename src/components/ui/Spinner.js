import React from "react";
import spinner from "../../img/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: "auto", display: "block" }}
      alt="Loading"
    />
  );
};

export default Spinner;
