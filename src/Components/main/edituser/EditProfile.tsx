// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// // import { cn } from "@/utils/cn";
// // import { Label } from "@radix-ui/react-label";
// // import { Input } from "../../ui/input";
// import profile from "../../../assets/images/R.png";
// import { Link } from "react-router-dom";

// // const LabelInputContainer = ({
// //   children,
// //   className,
// // }: {
// //   children: React.ReactNode;
// //   className?: string;
// // }) => {
// //   return <div className={cn(" w-[20rem]", className)}>{children}</div>;
// // };

// const EditProfile: React.FC = () => {
//   const { register, handleSubmit, setValue, getValues } = useForm();
//   const [avatar, setAvatar] = useState<File | null>(null);
//   const [imageData, setImageData] = useState<File | null>(null);
//   const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setAvatar(e.target.files[0]);
//     }
//   };
//   const userId = localStorage.getItem("userId");
//   let myImage;
//   useEffect(() => {
//     axios
//       .get(`https://rippleroomback.onrender.com/user/profile/${userId}`)
//       .then((response) => {
//         const userData = response.data;
//         Object.keys(userData).forEach((key) => {
//           setValue(key, userData[key]);
//         });
//         myImage = userData.Image;
//         console.log(myImage);

//         if (userData.Image) {
//           setImageData(userData.Image); // Set image data in state
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching user profile:", error);
//       });
//   }, [setValue]);

//   const onSubmit = (data: any) => {
//     const formDataToSend = new FormData();
//     formDataToSend.append("userName", data.userName);
//     formDataToSend.append("Email", data.Email);
//     formDataToSend.append("Phone", data.Phone);
//     formDataToSend.append("Address", data.Address);
//     formDataToSend.append("Password", data.Password);
//     formDataToSend.append("Bio", data.Bio);
//     formDataToSend.append("Image", data.Image);
//     if (avatar) {
//       formDataToSend.append("Image", data.Image);
//     }

//     axios
//       .patch(
//         `https://rippleroomback.onrender.com/user/editprofile/${userId}`,
//         formDataToSend
//       )
//       .then((response) => {
//         console.log("Profile updated successfully:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error updating user profile:", error);
//       });

//     console.log(data);
//   };

//   return (
//     <>
//       {/* <div className=" ">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="mb-4">
//             <LabelInputContainer>
//               <img
//                 style={{
//                   width: "200px",
//                   height: "200px",
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                   border: "2px solid purple",
//                 }}
//                 src={avatar ? URL.createObjectURL(avatar) : profile}
//                 alt=""
//               />

//               <Input
//                 type="file"
//                 id="image"
//                 name="Image"
//                 accept="Image/*"
//                 onChange={handleAvatarChange}
//                 //  {...register("image")}
//               />
//             </LabelInputContainer>
//           </div>
//           <div className="mb-4">
//             <LabelInputContainer>
//               <Label htmlFor="name">Your Name</Label>
//               <Input
//                 id="name"
//                 type="text"
//                 name="userName"
//                 {...register("userName")}
//               />
//             </LabelInputContainer>
//           </div>
//           <div className="mb-4">
//             <LabelInputContainer>
//               <Label htmlFor="bio" className="block">
//                 Bio
//               </Label>
//               <Input id="bio" name="Bio" type="text" {...register("Bio")} />
//             </LabelInputContainer>
//           </div>
//           <div className="">
//             <div className="mb-4">
//               <LabelInputContainer>
//                 <Label htmlFor="email" className="block">
//                   Email
//                 </Label>
//                 <Input
//                   type="email"
//                   id="email"
//                   name="Email"
//                   {...register("Email")}
//                 />
//               </LabelInputContainer>
//             </div>
//             <div className="mb-4">
//               <LabelInputContainer>
//                 <Label htmlFor="phoneNumber" className="block">
//                   Phone
//                 </Label>
//                 <Input
//                   type="text"
//                   id="phoneNumber"
//                   name="Phone"
//                   {...register("Phone")}
//                 />
//               </LabelInputContainer>
//             </div>
//             <div className="mb-4">
//               <LabelInputContainer>
//                 <Label htmlFor="address" className="block">
//                   Address
//                 </Label>
//                 <Input
//                   type="text"
//                   id="address"
//                   name="Address"
//                   {...register("Address")}
//                 />
//               </LabelInputContainer>
//             </div>

//             <Link
//               to="/home"
//               className="px-4 py-2 rounded border border-solid border-purple-500"
//             >
//               Cancel
//             </Link>
//             <button
//               type="submit"
//               className="bg-purple-700 text-white px-6 py-2 rounded mx-5"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div> */}
//       <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
//         <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//           Edit Profile
//         </h2>
//         <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
//           {/* Image */}
//           <img
//             src={myImage ? myImage : profile}
//             alt="Profile"
//             className="w-40 h-40 rounded-full cursor-pointer mb-4"
//             onClick={() => document.getElementById("imageInput").click()}
//           />
//           {/* File input */}
//           <input
//             type="file"
//             id="imageInput"
//             style={{ display: "none" }}
//             onChange={(e) => handleAvatarChange(e)}
//           />
//           {/* Username and Bio */}
//           <div className="flex mb-4">
//             <div className="w-1/2 mr-2">
//               <label
//                 htmlFor="userName"
//                 className="block text-neutral-700 dark:text-neutral-300"
//               >
//                 Username
//               </label>
//               <input
//                 {...register("userName")}
//                 id="userName"
//                 className="input"
//                 placeholder="Username"
//               />
//             </div>
//             <div className="w-1/2 ml-2">
//               <label
//                 htmlFor="bio"
//                 className="block text-neutral-700 dark:text-neutral-300"
//               >
//                 Bio
//               </label>
//               <input
//                 {...register("Bio")}
//                 id="bio"
//                 className="input"
//                 placeholder="Bio"
//               />
//             </div>
//           </div>
//           {/* Email and Phone */}
//           <div className="flex mb-4">
//             <div className="w-1/2 mr-2">
//               <label
//                 htmlFor="email"
//                 className="block text-neutral-700 dark:text-neutral-300"
//               >
//                 Email
//               </label>
//               <input
//                 {...register("Email")}
//                 id="email"
//                 className="input"
//                 placeholder="Email"
//               />
//             </div>
//             <div className="w-1/2 ml-2">
//               <label
//                 htmlFor="phone"
//                 className="block text-neutral-700 dark:text-neutral-300"
//               >
//                 Phone
//               </label>
//               <input
//                 {...register("Phone")}
//                 id="phone"
//                 className="input"
//                 placeholder="Phone"
//               />
//             </div>
//           </div>
//           {/* Address */}
//           <div className="mb-4">
//             <label
//               htmlFor="address"
//               className="block text-neutral-700 dark:text-neutral-300"
//             >
//               Address
//             </label>
//             <input
//               {...register("Address")}
//               id="address"
//               className="input"
//               placeholder="Address"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="  Password"
//               className="block text-neutral-700 dark:text-neutral-300"
//             >
//               Password
//             </label>
//             <input
//               {...register("Password")}
//               id="Password"
//               className="input"
//               placeholder="Password"
//               type="Password"
//             />
//           </div>
//           {/* Save and Cancel buttons */}
//           <div className="flex justify-between items-center">
//             <Link
//               to="/home"
//               className="px-4 py-2 rounded border border-solid border-purple-500"
//             >
//               Cancel
//             </Link>
//             <button
//               type="submit"
//               className="bg-purple-700 text-white px-6 py-2 rounded"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default EditProfile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import profile from "../../../assets/images/R.png";
import { Link } from "react-router-dom";

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