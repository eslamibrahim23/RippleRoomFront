/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useForm } from "react-hook-form";
import defaultProfile from "../../../assets/images/avatar.jpg";
import { Link } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../ui/input";
import { cn } from "@/utils/cn";
// import { number } from "yup";
import { useNavigate } from "react-router-dom";
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(" w-[25.2rem]", className)}>{children}</div>;
};

const EditProfile = () => {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    Email: "",
    Phone: "",
    Bio: "",
    Address: "",
    Image: null,
    // For file upload
  });
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    // Fetch user data when component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
         `https://rippleroomback.onrender.com/user/profile/${userId}`
        );
        const userData = response.data;
        setFormData({
          userName: userData.userName || "",
          Email: userData.Email || "",
          Phone: userData.Phone || "",
          Bio: userData.Bio || "",
          Address: userData.Address || "",
          Image: userData.Image || null,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        setErrorMessage("Error fetching user data");
      }
    };

    fetchUserData();
  }, []); //
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      Image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("userName", formData.userName);
      form.append("Email", formData.Email);
      form.append("Address", formData.Address);
      form.append("Bio", formData.Bio);
      form.append("Phone", formData.Phone);
      if (formData.Image) {
        form.append("Image", formData.Image);
        console.log(formData.Image);
      }
      const response = await axios.patch(
       `https://rippleroomback.onrender.com/user/editprofile/${userId}`,
        form
      );
      console.log(response.data);
      navigate("/profile");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const show =`https://rippleroomback.onrender.com/${formData.Image}`;
  console.log(show);
  
  
  
  return (
    <>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-5 items-end w-[90%] mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="text-center col-span-1 mx-10 md:block">
          <div className="image mx-auto">
            <img
              src={
                formData.Image
                  ? `https://rippleroomback.onrender.com/${formData.Image}`
                  : defaultProfile
              }
              alt="Profile"
              className="profile-image w-72 h-72 rounded-full cursor-pointer"
              onClick={() => document.getElementById("image").click()}
            />
            <input
              type="file"
              id="image"
              name="Image"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="col-span-1 ">
          <LabelInputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <div className="col-span-1">
          <LabelInputContainer>
            <Label htmlFor="yourname">Your Name</Label>
            <Input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>

        <div className="col-span-1">
          <LabelInputContainer>
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="text"
              id="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <div className="col-span-1">
          <LabelInputContainer>
            <Label htmlFor="bio">Bio</Label>
            <Input
              type="text"
              id="Bio"
              name="Bio"
              value={formData.Bio}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <div className="col-span-1">
          <LabelInputContainer>
            <Label htmlFor="Address">Address</Label>
            <Input
              type="text"
              id="Address"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <div className="flex justify-between items-center mt-10 mx-44">
          <Link
            to="/ChatPage"
            className="px-8 py-2 mx-32 rounded border border-solid border-purple-500"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="bg-purple-700 text-white px-10 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};



export default EditProfile;