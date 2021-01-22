import React from "react";
import Navlinks from "./Navlinks";
import "./Dashboard.css";

interface Props {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboard: React.FC<Props> = (props) => {
  return (
    <nav>
      <h3>My React App</h3>
      {props.loggedIn ? (
        <Navlinks />
      ) : (
        <h3>Please log in to unlock functionalities</h3>
      )}
    </nav>
  );
};

export default Dashboard;
