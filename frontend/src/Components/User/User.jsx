import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const User = ({ userId, name, avatar }) => {
  return (
    <Link to={`/user/${userId}`} className="homeUser">
      <img src={avatar} alt={name} />
      <Typography style={{color:"white"}}>{name}</Typography>
    </Link>
  );
};

export default User;
