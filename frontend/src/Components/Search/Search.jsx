import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Actions/User";
import User from "../User/User";
import "./Search.css";

const Search = () => {
  const [name, setName] = React.useState("");

  const { users, loading } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllUsers(name));
  };

  return (
    <div className="search">
      <form className="searchForm" onSubmit={submitHandler}>
        <Typography variant="h3" style={{ padding: "2vmax", color: "white" }}>
          Search
        </Typography>

        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c-3.5 0-6 2-6 3v1h12v-1c0-1-2.5-3-6-3z" />
          </svg>
          <input
            type="text"
            value={name}
            placeholder="UserName"
            className="input-field"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Button disabled={loading} type="submit" style={{background:"black", border:"1px solid blue", borderRadius:"1rem", padding:".6rem 3rem" , marginTop:"1rem"}}>
          Search
        </Button>

        <div className="searchResults">
          {users && users.map((user) => (
            <User key={user._id} userId={user._id} name={user.name} avatar={user.avatar.url} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Search;
