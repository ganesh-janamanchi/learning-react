import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle style={{ color: 'red'}} className="icon" />;
    case "cross":
      return <FaTimes style={{ color: 'blue'}} className="icon" />;
    default:
      return <FaPen className="icon" />;
  }
};

export default Icon;
