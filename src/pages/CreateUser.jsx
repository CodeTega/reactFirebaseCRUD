import React, { useState } from "react";
import { signUp } from "../functions/auth";

export default function CreateUSer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userData = {
    firstName,
    lastName,
    email,
  };

  const handleCreateUser = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else if (!email) {
      alert("Email is required");
      return;
    } else if (!password) {
      alert("Password is required");
      return;
    } else signUp(email, password, userData);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-12">Register</h1>
      <p>{firstName}</p>
      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
        <input type="text" placeholder="First Name" 
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        />
        <input type="text" placeholder="Last Name" 
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        />
        <input type="email" placeholder="Email" 
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        />
        <input type="password" placeholder="Password" 
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        />
        <input type="password" placeholder="Confirm Password"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }} 
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleCreateUser}
        >
          Register
        </button>
      </div>
    </>
  );
}
