import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { logout } from "../functions/auth";
import { updateData } from "../functions/crud";

export default function UserDashboard() {
  const { user } = UserAuth();
  const [newFirstName, setNewFirstName] = useState("");

  const handleLogout = () => {
    logout();
  };

  const handleUpdateName = () => {
    console.log(newFirstName);
    updateData("users", user.uid, { firstName: newFirstName });
    setNewFirstName("");
  };

  return (
    <>
      <div>Welcome {user?.firstName}</div>

      <input
        type="text"
        value={newFirstName}
        placeholder="New First Name"
        onChange={(e) => {
          setNewFirstName(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleUpdateName}
      >
        Update Name
      </button>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block mt-12"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}
