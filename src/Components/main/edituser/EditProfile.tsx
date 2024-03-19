/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import profile from "../../../assets/images/avatar.jpg";
import { Link } from "react-router-dom";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../ui/input";
import { cn } from "@/utils/cn";

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(" w-[25.2rem]", className)}>{children}</div>;
};

const EditProfile: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [avatar, setAvatar] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]).value);
    }
  };
  useEffect(() => {
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
  }, [setValue]);

  const userId = localStorage.getItem("userId");

  const onSubmit = (data: any) => {
    const formDataToSend = new FormData();
    formDataToSend.append("userName", data.userName);
    formDataToSend.append("Email", data.Email);
    formDataToSend.append("Phone", data.Phone);
    formDataToSend.append("Address", data.Address);
    formDataToSend.append("Password", data.Password);
    formDataToSend.append("Bio", data.Bio);

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
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-5 items-end w-[90%] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-center col-span-1 mx-10 md:block">
          <div className="image mx-auto">
            <img
              src={
                imageUrl
                  ? `https://rippleroomback.onrender.com/${imageUrl}`
                  : profile
              }
              alt="Profile"
              className="w-72 h-72 rounded-full cursor-pointer"
              onClick={() => document.getElementById("imageInput").click()}
            />
            {/* File input */}
            <input
              type="file"
              id="imageInput"
              style={{ display: "none" }}
              onChange={(e) => handleAvatarChange(e)}
            />
          </div>
        </div>
        <div className="col-span-1 ">
          <LabelInputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              {...register("Email")}
              className="py-6"
              placeholder="Email"
            />
          </LabelInputContainer>
        </div>
        <div className="col-span-1">
          <LabelInputContainer>
            <Label htmlFor="yourname">Your Name</Label>
            <Input
              type="text"
              id="yourname"
              {...register("userName")}
              className="py-6"
              placeholder="userName"
            />
          </LabelInputContainer>
        </div>

        <div className="col-span-1">
          <LabelInputContainer>
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="text"
              id="phone"
              {...register("Phone")}
              className="py-6"
              placeholder="Phone"
            />
          </LabelInputContainer>
        </div>
        <div className="col-span-1">
          <LabelInputContainer>
            <Label htmlFor="bio">Bio</Label>
            <Input
              type="text"
              id="bio"
              {...register("Bio")}
              className="py-6"
              placeholder="Bio"
            />
          </LabelInputContainer>
        </div>
        <div className="col-span-1">
          <LabelInputContainer>
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              {...register("Address")}
              className="py-6"
              placeholder="Address"
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
