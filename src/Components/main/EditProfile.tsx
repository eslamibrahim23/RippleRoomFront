/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect,useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { cn } from "@/utils/cn";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import profile from "../../assets/images/R.png";
import { Link } from "react-router-dom";

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(" w-[20rem]", className)}>{children}</div>;
};

const EditProfile: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };
  
  useEffect(() => {
    axios
      .get("https://rippleroomback.onrender.com/user/profile/:id")
      .then((response) => {
        const userData = response.data;
        Object.keys(userData).forEach((key) => {
          setValue(key, userData[key]);
        });
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, [setValue]);

  const onSubmit = (data: any) => {
    const formDataToSend = new FormData();
    formDataToSend.append("name", data.name);
    formDataToSend.append("email", data.email);
    formDataToSend.append("phoneNumber", data.phoneNumber);
    formDataToSend.append("address", data.address);
    formDataToSend.append("bio", data.bio);
    if (avatar) {
      formDataToSend.append("image", avatar);
    }
    axios
      .patch(
        "https://rippleroomback.onrender.com/user/editprofile/:id",
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
   <div className="w-5/12 mx-auto"> 
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4"> 
           <LabelInputContainer> 
             <img 
               style={{ 
                 width: "200px", 
                 height: "200px", 
                 borderRadius: "50%", 
                 objectFit: "cover", 
                 border: "2px solid purple", 
               }} 
               src={avatar ? URL.createObjectURL(avatar) : profile} 
               alt="" 
             /> 
             
             <Input 
               type="file" 
               id="image" 
               name="image" 
               accept="image/*" 
               onChange={handleAvatarChange} 
              //  {...register("image")} 
             /> 
           </LabelInputContainer> 
         </div> 
         <div className="mb-4"> 
           <LabelInputContainer> 
             <Label htmlFor="name">Your Name</Label> 
             <Input id="name" type="text" name="name" {...register("name")} /> 
           </LabelInputContainer> 
         </div> 
         <div className="mb-4"> 
           <LabelInputContainer> 
             <Label htmlFor="bio" className="block"> 
               Bio 
             </Label> 
             <Input id="bio" name="bio" type="text" {...register("bio")} /> 
           </LabelInputContainer> 
         </div> 
         <div className=""> 
           <div className="mb-4"> 
             <LabelInputContainer> 
               <Label htmlFor="email" className="block"> 
                 Email 
               </Label> 
               <Input 
                 type="email" 
                 id="email" 
                 name="email" 
                 {...register("email")} 
               /> 
             </LabelInputContainer> 
           </div> 
           <div className="mb-4"> 
             <LabelInputContainer> 
               <Label htmlFor="phoneNumber" className="block"> 
                 Phone 
               </Label> 
               <Input 
                 type="text" 
                 id="phoneNumber" 
                 name="phoneNumber" 
                 {...register("phoneNumber")} 
               /> 
             </LabelInputContainer> 
           </div> 
           <div className="mb-4"> 
             <LabelInputContainer> 
               <Label htmlFor="address" className="block"> 
                 Address 
               </Label> 
               <Input 
                 type="text" 
                 id="address" 
                 name="address" 
                 {...register("address")} 
               /> 
             </LabelInputContainer> 
           </div> 
 
           <Link to="/home" className="px-4 py-2 rounded border border-solid border-purple-500"> 
             Cancel 
           </Link> 
           <button 
             type="submit" 
             className="bg-purple-700 text-white px-6 py-2 rounded mx-5" 
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
