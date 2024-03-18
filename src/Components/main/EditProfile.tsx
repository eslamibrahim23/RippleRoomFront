// // import React, { useEffect,useState} from "react";
// // import axios from "axios";
// // import { useForm } from "react-hook-form";
// // import { cn } from "@/utils/cn";
// // import { Label } from "@radix-ui/react-label";
// // import { Input } from "../ui/input";
// // import profile from "../../R.png";
// // import { Link } from "react-router-dom";

// // const LabelInputContainer = ({
// //   children,
// //   className,
// // }: {
// //   children: React.ReactNode;
// //   className?: string;
// // }) => {
// //   return <div className={cn(" w-[20rem]", className)}>{children}</div>;
// // };

// // const EditProfile: React.FC = () => {
// //   const { register, handleSubmit, setValue } = useForm();
// //   const [avatar, setAvatar] = useState<File | null>(null);

// //   const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files[0]) {
// //       setAvatar(e.target.files[0]);
// //     }
// //   };

// //   useEffect(() => {
// //     axios
// //       .get("https://rippleroomback.onrender.com/user/profile/:id")
// //       .then((response) => {
// //         const userData = response.data;
// //         Object.keys(userData).forEach((key) => {
// //           setValue(key, userData[key]);
// //         });
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching user profile:", error);
// //       });
// //   }, [setValue]);

// //   const onSubmit = (data: any) => {
// //     const formDataToSend = new FormData();
// //     formDataToSend.append("name", data.name);
// //     formDataToSend.append("email", data.email);
// //     formDataToSend.append("phoneNumber", data.phoneNumber);
// //     formDataToSend.append("address", data.address);
// //     formDataToSend.append("bio", data.bio);
// //     if (avatar) {
// //       formDataToSend.append("image", avatar);
// //     }

// //     axios
// //       .patch(
// //         "https://rippleroomback.onrender.com/user/editprofile/:id",
// //         formDataToSend
// //       )
// //       .then((response) => {
// //         console.log("Profile updated successfully:", response.data);
// //       })
// //       .catch((error) => {
// //         console.error("Error updating user profile:", error);
// //       });

// //     console.log(data);
// //   };

// //   return (
// //     <>
// //    <div className="w-5/12 mx-auto">
// //       <form onSubmit={handleSubmit(onSubmit)}>
// //           <div className="mb-4">
// //            <LabelInputContainer>
// //              <img
// //                style={{
// //                  width: "200px",
// //                  height: "200px",
// //                  borderRadius: "50%",
// //                  objectFit: "cover",
// //                  border: "2px solid purple",
// //                }}
// //                src={avatar ? URL.createObjectURL(avatar) : profile}
// //                alt=""
// //              />

// //              <Input
// //                type="file"
// //                id="image"
// //                name="image"
// //                accept="image/*"
// //                onChange={handleAvatarChange}
// //               //  {...register("image")}
// //              />
// //            </LabelInputContainer>
// //          </div>
// //          <div className="mb-4">
// //            <LabelInputContainer>
// //              <Label htmlFor="name">Your Name</Label>
// //              <Input id="name" type="text" name="name" {...register("name")} />
// //            </LabelInputContainer>
// //          </div>
// //          <div className="mb-4">
// //            <LabelInputContainer>
// //              <Label htmlFor="bio" className="block">
// //                Bio
// //              </Label>
// //              <Input id="bio" name="bio" type="text" {...register("bio")} />
// //            </LabelInputContainer>
// //          </div>
// //          <div className="">
// //            <div className="mb-4">
// //              <LabelInputContainer>
// //                <Label htmlFor="email" className="block">
// //                  Email
// //                </Label>
// //                <Input
// //                  type="email"
// //                  id="email"
// //                  name="email"
// //                  {...register("email")}
// //                />
// //              </LabelInputContainer>
// //            </div>
// //            <div className="mb-4">
// //              <LabelInputContainer>
// //                <Label htmlFor="phoneNumber" className="block">
// //                  Phone
// //                </Label>
// //                <Input
// //                  type="text"
// //                  id="phoneNumber"
// //                  name="phoneNumber"
// //                  {...register("phoneNumber")}
// //                />
// //              </LabelInputContainer>
// //            </div>
// //            <div className="mb-4">
// //              <LabelInputContainer>
// //                <Label htmlFor="address" className="block">
// //                  Address
// //                </Label>
// //                <Input
// //                  type="text"
// //                  id="address"
// //                  name="address"
// //                  {...register("address")}
// //                />
// //              </LabelInputContainer>
// //            </div>

// //            <Link to="/home" className="px-4 py-2 rounded border border-solid border-purple-500">
// //              Cancel
// //            </Link>
// //            <button
// //              type="submit"
// //              className="bg-purple-700 text-white px-6 py-2 rounded mx-5"
// //            >
// //              Save
// //            </button>
// //         </div>
// //       </form>
// //     </div>
// //     </>
// //   );
// // };

// // export default EditProfile;
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useForm } from "react-hook-form";

// const EditProfile = () => {
//   const { register, handleSubmit } = useForm();
//   const [formData, setFormData] = useState({
//     userName: "",
//     Email: "",
//     Password: "",
//     Bio: "",
//     Phone: "",
//     Address: "",
//     Image: "", // Add image field
//   });
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get(
//           `https://rippleroomback.onrender.com/user/profile/${userId}`
//         );
//         const userData = response.data;
//         setFormData(userData);
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     if (userId) {
//       fetchProfileData();
//     }
//   }, [userId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const onSubmit = async () => {
//     try {
//       await axios.patch(
//         `https://rippleroomback.onrender.com/user/editprofile/${userId}`,
//         formData
//       );
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to update profile. Please try again later.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
//       <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
//         <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//           Edit Profile
//         </h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="w-full">
//           {/* Image */}
//           <img
//             src={formData.Image}
//             alt="Profile"
//             className="w-20 h-20 rounded-full cursor-pointer"
//             onClick={() => document.getElementById("imageInput").click()}
//           />

//           {/* File input */}
//           <input
//             type="file"
//             id="imageInput"
//             style={{ display: "none" }}
//             onChange={(e) => handleAvatarChange(e)}
//           />
//           {/* Username and Email */}
//           <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//             <input
//               {...register("userName")}
//               className="input"
//               placeholder="Username"
//               value={formData.userName}
//               onChange={handleChange}
//             />
//             <input
//               {...register("Email")}
//               className="input"
//               placeholder="Email"
//               value={formData.Email}
//               onChange={handleChange}
//             />
//           </div>
//           {/* Bio and Address */}
//           <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//             <input
//               {...register("Bio")}
//               className="input"
//               placeholder="Bio"
//               value={formData.Bio}
//               onChange={handleChange}
//             />
//             <input
//               {...register("Address")}
//               className="input"
//               placeholder="Address"
//               value={formData.Address}
//               onChange={handleChange}
//             />
//           </div>
//           {/* Phone and Password */}
//           <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//             <input
//               {...register("Phone")}
//               className="input"
//               placeholder="Phone"
//               value={formData.Phone}
//               onChange={handleChange}
//             />
//             <input
//               {...register("Password")}
//               className="input"
//               type="password"
//               placeholder="Password"
//               value={formData.Password}
//               onChange={handleChange}
//             />
//           </div>
//           {/* Confirm Password */}

//           <button className="btn" type="submit">
//             Update Profile
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

// const EditProfile = () => {
//   const { register, handleSubmit } = useForm();
//   const [formData, setFormData] = useState({
//     userName: "",
//     Email: "",
//     Password: "",
//     Bio: "",
//     Phone: "",
//     Address: "",
//     Image: "", // Add image field
//   });
//   const userId = localStorage.getItem("userId");

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get(
//           `https://rippleroomback.onrender.com/user/profile/${userId}`
//         );
//         const userData = response.data;
//         setFormData(userData);
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     if (userId) {
//       fetchProfileData();
//     }
//   }, [userId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleAvatarChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData((prevData) => ({
//         ...prevData,
//         Image: URL.createObjectURL(e.target.files[0]),
//       }));
//     }
//   };

//   const onSubmit = async () => {
//     try {
//       await axios.patch(
//         `https://rippleroomback.onrender.com/user/editprofile/${userId}`,
//         formData
//       );
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to update profile. Please try again later.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
//       <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
//         <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//           Edit Profile
//         </h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="w-full">
//           {/* Image */}
//           <img
//             src={formData.Image}
//             alt="Profile"
//             className="w-20 h-20 rounded-full cursor-pointer"
//             onClick={() => document.getElementById("imageInput").click()}
//           />

//           {/* File input */}
//           <input
//             type="file"
//             id="imageInput"
//             style={{ display: "none" }}
//             onChange={(e) => handleAvatarChange(e)}
//           />
//           {/* Username and Email */}
//           <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//             <input
//               {...register("userName")}
//               className="input"
//               placeholder="Username"
//               value={formData.userName}
//               onChange={handleChange}
//             />
//             <input
//               {...register("Email")}
//               className="input"
//               placeholder="Email"
//               value={formData.Email}
//               onChange={handleChange}
//             />
//           </div>
//           {/* Bio and Address */}
//           <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//             <input
//               {...register("Bio")}
//               className="input"
//               placeholder="Bio"
//               value={formData.Bio}
//               onChange={handleChange}
//             />
//             <input
//               {...register("Address")}
//               className="input"
//               placeholder="Address"
//               value={formData.Address}
//               onChange={handleChange}
//             />
//           </div>
//           {/* Phone and Password */}
//           <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
//             <input
//               {...register("Phone")}
//               className="input"
//               placeholder="Phone"
//               value={formData.Phone}
//               onChange={handleChange}
//             />
//             <input
//               {...register("Password")}
//               className="input"
//               type="password"
//               placeholder="Password"
//               value={formData.Password}
//               onChange={handleChange}
//             />
//           </div>
//           {/* Confirm Password */}

//           <button className="btn" type="submit">
//             Update Profile
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

const EditProfile = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState({
    userName: "",
    Email: "",
    Password: "",
    Bio: "",
    Phone: "",
    Address: "",
    Image: "", // Add image field
  });
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `https://rippleroomback.onrender.com/user/profile/${userId}`
        );
        const userData = response.data;
        setFormData(userData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    if (userId) {
      fetchProfileData();
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        Image: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  const onSubmit = async () => {
    try {
      await axios.patch(
        `https://rippleroomback.onrender.com/user/editprofile/${userId}`,
        formData
      );
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* Image */}
          <div className="mb-4">
            <img
              src={formData.Image}
              alt="Profile"
              className="w-20 h-20 rounded-full cursor-pointer"
              onClick={() => document.getElementById("imageInput").click()}
            />
            <input
              type="file"
              id="imageInput"
              style={{ display: "none" }}
              onChange={(e) => handleAvatarChange(e)}
            />
          </div>
          {/* Username and Email */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <input
              {...register("userName")}
              className="input"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
            />
            <input
              {...register("Email")}
              className="input"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
            />
          </div>
          {/* Bio and Address */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <input
              {...register("Bio")}
              className="input"
              placeholder="Bio"
              value={formData.Bio}
              onChange={handleChange}
            />
            <input
              {...register("Address")}
              className="input"
              placeholder="Address"
              value={formData.Address}
              onChange={handleChange}
            />
          </div>
          {/* Phone and Password */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <input
              {...register("Phone")}
              className="input"
              placeholder="Phone"
              value={formData.Phone}
              onChange={handleChange}
            />
            <input
              {...register("Password")}
              className="input"
              type="password"
              placeholder="Password"
              value={formData.Password}
              onChange={handleChange}
            />
          </div>
          {/* Confirm Password */}
          <button className="btn" type="submit">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
