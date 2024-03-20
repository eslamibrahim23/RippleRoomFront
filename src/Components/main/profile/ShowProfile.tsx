import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import defaultAvatar from "../../../assets/images/avatar.jpg";
const ShowProfile = () => {
  const [user, setUser] = useState(null);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the server
    axios
      .get(`https://rippleroomback.onrender.com/user/profile/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmDelete) {
      // Delete user account
      axios
        .delete(
          `https://rippleroomback.onrender.com/user/deleteProfile/${userId}`
        )
        .then(() => {
          console.log("Account deleted successfully");
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error deleting user account:", error);
        });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {user && (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-md p-6">
          <img
            src={
              user.Image
                ? `https://rippleroomback.onrender.com/${user.Image}`
                : defaultAvatar
            }
            alt="Profile"
            className="w-40 h-40 rounded-full mt-4 mx-auto"
          />
          <h2 className="text-2xl font-bold mb-4 text-purple-500 text-center">
            {user.userName}'s Profile
          </h2>
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center">
                <span className="font-bold mr-2">Email:</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {user.Email}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">Phone:</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {user.Phone}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">Bio:</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {user.Bio}
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">Address:</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {user.Address}
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-purple-500 text-white px-4 py-2 rounded mr-4">
              <Link to="/editprofile">Edit Profile</Link>
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleDelete}
            >
              Delete Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowProfile;
