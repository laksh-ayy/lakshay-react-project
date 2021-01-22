import React from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import "./Dashboard.css";

const Navlinks: React.FC = () => {
  return (
    <ul className="nav-links">
      <Link to="/list-users">
        <li>List Users</li>
      </Link>
      <Link to="/myprofile">
        <li>My Profile</li>
      </Link>
      <Link to="/list-resources">
        <li>List Resource</li>
      </Link>
      <Link to="/single-resource">
        <li>Single Resource</li>
      </Link>
      <Link to="/delayed">
        <li>Delayed</li>
      </Link>
      <Link to="/create-user">
        <li>Create User</li>
      </Link>
      <Link to="/login">
        <li>Log Out</li>
      </Link>
    </ul>
  );
};

export default Navlinks;
