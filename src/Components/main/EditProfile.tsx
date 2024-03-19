/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import profile from "../../../assets/images/R.png";
import { Link } from "react-router-dom";

const EditProfile: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [avatar, setAvatar] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const userId = localStorage.getItem("userId");
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
      // setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };
  axios
    .get(`https://rippleroomback.onrender.com/user/profile/${userId}`)
    .then((response) => {
      const userData = response.data;
      Object.keys(userData).forEach((key) => {
        setValue(key, userData[key]);
      });

      if (userData.Image) {
        setImageUrl(userData.Image); // Set image data in state
      }
    })
    .catch((error) => {
      console.error("Error fetching user profile:", error);
    });
  useEffect(() => {}, [setValue]);

  const onSubmit = (data: any) => {
    const formDataToSend = new FormData();
    formDataToSend.append("userName", data.userName);
    formDataToSend.append("Email", data.Email);
    formDataToSend.append("Phone", data.Phone);
    formDataToSend.append("Address", data.Address);
    formDataToSend.append("Password", data.Password);
    formDataToSend.append("Bio", data.Bio);
    formDataToSend.append("Image", data.Image);

    // Only append the Image field once
    if (avatar) {
      formDataToSend.append("Image", avatar); // Append the avatar directly
    } else {
      formDataToSend.append("Image", data.Image); // Use the image from form data if avatar doesn't exist
    }

    axios
      .patch(
        `https://rippleroomback.onrender.com/user/editprofile/${userId}`,
        formDataToSend
      )
      .then((response) => {
        console.log("Profile updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });

    console.log(data);
  };

  return (
    <>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Edit Profile
        </h2>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Image */}
          <img
            src={
              imageUrl
                ? `https://rippleroomback.onrender.com/${imageUrl}`
                : profile
            }
            {...register("Image")}
            alt="Profile"
            className="w-40 h-40 rounded-full cursor-pointer mb-4"
            onClick={() => document.getElementById("imageInput").click()}
          />
          {/* File input */}
          <input
            type="file"
            id="imageInput"
            style={{ display: "none" }}
            onChange={(e) => handleAvatarChange(e)}
          />
          {/* Username and Bio */}
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="userName"
                className="block text-neutral-700 dark:text-neutral-300"
              >
                Username
              </label>
              <input
                {...register("userName")}
                id="userName"
                className="input"
                placeholder="Username"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                htmlFor="bio"
                className="block text-neutral-700 dark:text-neutral-300"
              >
                Bio
              </label>
              <input
                {...register("Bio")}
                id="bio"
                className="input"
                placeholder="Bio"
              />
            </div>
          </div>
          {/* Email and Phone */}
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="email"
                className="block text-neutral-700 dark:text-neutral-300"
              >
                Email
              </label>
              <input
                {...register("Email")}
                id="email"
                className="input"
                placeholder="Email"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                htmlFor="phone"
                className="block text-neutral-700 dark:text-neutral-300"
              >
                Phone
              </label>
              <input
                {...register("Phone")}
                id="phone"
                className="input"
                placeholder="Phone"
              />
            </div>
          </div>
          {/* Address */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-neutral-700 dark:text-neutral-300"
            >
              Address
            </label>
            <input
              {...register("Address")}
              id="address"
              className="input"
              placeholder="Address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-neutral-700 dark:text-neutral-300"
            >
              Password
            </label>
            <input
              {...register("Password")}
              id="password"
              className="input"
              placeholder="Password"
              type="password"
            />
          </div>
          {/* Save and Cancel buttons */}
          <div className="flex justify-between items-center">
            <Link
              to="/home"
              className="px-4 py-2 rounded border border-solid border-purple-500"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;