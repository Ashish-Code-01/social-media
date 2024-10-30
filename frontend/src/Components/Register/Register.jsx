import React, { useEffect, useState } from "react";
import { Avatar, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { registerUser } from "../../Actions/User"; // Adjust the path as necessary
import './Register.css'; // Ensure this file contains your CSS

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setAvatar(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password, avatar));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, alert]);

  return (
    <div className="center">
      <form className="form" onSubmit={submitHandler}>
        <Typography variant="h4" id="heading">
          Sign Up
        </Typography>

        <span className="centeravtar">
          <Avatar
            src={avatar}
            alt="User Avatar"
            sx={{ height: "5vmax", width: "5vmax", marginBottom: "1rem" }}
          />
        </span>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

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
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
          </svg>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
          </svg>
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/">
          <Typography style={{ textAlign: "center", marginTop: "1em" }} className="alredyaccount">
            Already have an account? Login
          </Typography>
        </Link>
        <div className=" .btn" style={{ border: "1px solid blue", textAlign: "center", borderRadius: "2rem", color: "blue" }}>
          <Button disabled={loading} type="submit" className="singup">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
