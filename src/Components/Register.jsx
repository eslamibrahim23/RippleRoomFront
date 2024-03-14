/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    firstName: yup.string().required().min(3),
    Email: yup.string().required().email(),
   Password: yup
      .string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    cPassword: yup
      .string()
      .required("Confirm Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([yup.ref("Password")], "Passwords do not match"),
  })
  .required();

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  // const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const onSubmit = async (user) => {
    console.log(user);
    const fetchuser = await axios.post(
      "https://rippleroomback.onrender.com/signup",
      { ...user }
    );

    if (fetchuser.data.status === "success") {
      console.log("yes");
      navigate("/Login");
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <>
      <h1 className="text-3xl text-blue-400 p-5 w-full m-auto text-center">
        Registeration
      </h1>
      <div className="flex m-auto w-100 justify-center items-center my-10">
        <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-96 m-auto  ">
            <label className="mt-2">Name:</label>
            <input {...register("firstName")} />
            <p className="text-red-500 text-md">{errors.firstName?.message}</p>

            <label className="mt-2">Email:</label>
            <input {...register("Email")} />
            <p className="text-red-500 text-md">{errors.Email?.message}</p>

            <label className="mt-2">Password:</label>
            <input type="password" {...register("Password")} />
            <p className="text-red-500 text-md ">{errors.Password?.message}</p>

            <label className="mt-2">Confirm Password:</label>
            <input type="password" {...register("cPassword")}></input>
            <p className="text-red-500 text-md ">{errors.cPassword?.message}</p>

            <input className="mt-5" id="submit-btn" type="submit" />
          </div>
        </form>
        {/* <div className="mx-10">
          <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M273.59 16.87C317.07 25.62 366.48 49.8 386.68 91.74C417.21 155.1 472.12 154.46 486.23 274.45C488.369 291.956 488.604 309.643 486.93 327.2C486.074 335.786 484.678 344.31 482.75 352.72C465.69 426.87 409.44 473.13 345 486.55C260.22 504.21 210 451.13 179.92 416.21C149.84 381.29 50 349.4 35.2 231.55C32.8657 213.569 32.614 195.379 34.45 177.34C38.81 136.19 56 92.34 86.78 63.49C89.0933 61.33 91.4767 59.2367 93.93 57.21C141.83 17.56 214.31 4.94001 273.59 16.87Z"
              fill="#92E3A9"
            />
            <path
              opacity="0.7"
              d="M273.59 16.87C317.07 25.62 366.48 49.8 386.68 91.74C417.21 155.1 472.12 154.46 486.23 274.45C488.369 291.956 488.604 309.643 486.93 327.2C486.074 335.786 484.678 344.31 482.75 352.72C465.69 426.87 409.44 473.13 345 486.55C260.22 504.21 210 451.13 179.92 416.21C149.84 381.29 50 349.4 35.2 231.55C32.8657 213.569 32.614 195.379 34.45 177.34C38.81 136.19 56 92.34 86.78 63.49C89.0933 61.33 91.4767 59.2367 93.93 57.21C141.83 17.56 214.31 4.94001 273.59 16.87Z"
              fill="white"
            />
            <path
              d="M53.73 57.67L67.69 71.63"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M67.69 57.67L53.73 71.63"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M447.35 424.4L461.31 438.36"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M461.31 424.4L447.35 438.36"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M138.88 131.6L148.37 141.09"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M148.37 131.6L138.88 141.09"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M380.53 357.92L390.02 367.41"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M390.02 357.92L380.53 367.41"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M91.48 444.56L100.97 454.05"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M100.97 444.56L91.48 454.05"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M377.54 30.77L387.04 40.26"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M387.04 30.77L377.54 40.26"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M68.85 112.93C68.85 111.743 68.4981 110.583 67.8388 109.597C67.1795 108.61 66.2424 107.841 65.1461 107.387C64.0497 106.933 62.8433 106.814 61.6794 107.045C60.5155 107.277 59.4465 107.848 58.6073 108.687C57.7682 109.526 57.1968 110.596 56.9653 111.759C56.7338 112.923 56.8526 114.13 57.3067 115.226C57.7608 116.322 58.5299 117.26 59.5166 117.919C60.5033 118.578 61.6633 118.93 62.85 118.93C64.4413 118.93 65.9674 118.298 67.0926 117.173C68.2178 116.047 68.85 114.521 68.85 112.93Z"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M261.55 33.76C261.55 32.5733 261.198 31.4133 260.539 30.4266C259.879 29.4399 258.942 28.6708 257.846 28.2167C256.75 27.7626 255.543 27.6438 254.379 27.8753C253.216 28.1068 252.146 28.6782 251.307 29.5174C250.468 30.3565 249.897 31.4256 249.665 32.5895C249.434 33.7533 249.553 34.9597 250.007 36.0561C250.461 37.1525 251.23 38.0895 252.217 38.7488C253.203 39.4081 254.363 39.76 255.55 39.76C257.141 39.76 258.667 39.1279 259.793 38.0026C260.918 36.8774 261.55 35.3513 261.55 33.76Z"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M447.54 370.62C450.843 370.62 453.52 367.943 453.52 364.64C453.52 361.337 450.843 358.66 447.54 358.66C444.237 358.66 441.56 361.337 441.56 364.64C441.56 367.943 444.237 370.62 447.54 370.62Z"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M221.22 472.19C221.22 471.003 220.868 469.843 220.209 468.857C219.55 467.87 218.612 467.101 217.516 466.647C216.42 466.193 215.213 466.074 214.049 466.305C212.886 466.537 211.816 467.108 210.977 467.947C210.138 468.786 209.567 469.856 209.335 471.019C209.104 472.183 209.223 473.39 209.677 474.486C210.131 475.582 210.9 476.519 211.887 477.179C212.873 477.838 214.033 478.19 215.22 478.19C216.811 478.19 218.337 477.558 219.463 476.433C220.588 475.307 221.22 473.781 221.22 472.19Z"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M129.35 316.84C129.35 315.653 128.998 314.493 128.339 313.507C127.68 312.52 126.742 311.751 125.646 311.297C124.55 310.843 123.343 310.724 122.179 310.955C121.016 311.187 119.946 311.758 119.107 312.597C118.268 313.436 117.697 314.506 117.465 315.669C117.234 316.833 117.353 318.04 117.807 319.136C118.261 320.232 119.03 321.17 120.017 321.829C121.003 322.488 122.163 322.84 123.35 322.84C124.941 322.84 126.467 322.208 127.593 321.083C128.718 319.957 129.35 318.431 129.35 316.84Z"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M485.63 135.34C485.63 134.153 485.278 132.993 484.619 132.007C483.96 131.02 483.022 130.251 481.926 129.797C480.83 129.343 479.623 129.224 478.459 129.455C477.296 129.687 476.226 130.258 475.387 131.097C474.548 131.936 473.977 133.006 473.745 134.169C473.514 135.333 473.633 136.54 474.087 137.636C474.541 138.732 475.31 139.67 476.297 140.329C477.283 140.988 478.443 141.34 479.63 141.34C481.221 141.34 482.747 140.708 483.873 139.583C484.998 138.457 485.63 136.931 485.63 135.34Z"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M347 436.31L346.53 433.19C346.69 433.19 361.99 430.78 369.31 423.74C370.88 422.23 370.84 421.14 370.67 420.45C368.98 413.45 343.1 402.45 291.56 386.9C283.07 384.34 274.85 381.9 266.97 379.56C215.51 364.28 181.51 354.19 179.16 342.74C178.57 339.88 179.86 337.1 183 334.5C200.83 319.69 271.83 314.32 274.85 314.09L275.08 317.25C274.35 317.3 202.08 322.76 185.02 336.93C181.75 339.64 182.13 341.5 182.26 342.1C184.26 351.7 221.14 362.66 267.87 376.53C275.75 378.87 283.98 381.31 292.47 383.87C361.32 404.64 372.22 413.37 373.75 419.71C374.29 421.94 373.53 424.06 371.5 426.02C363.41 433.76 347.63 436.21 347 436.31Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M185.2 332.87L189.76 333.87C212.6 322 274.37 317.3 275 317.25L274.77 314.09C271.91 314.31 206.06 319.29 185.2 332.87Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M355.45 439.69C356.038 437.792 355.997 435.754 355.332 433.882C354.667 432.009 353.414 430.402 351.76 429.3C347.16 426.3 338.76 422.6 324.59 421.59C299.46 419.79 282.4 429.07 274.32 436.84C266.24 444.61 268.04 453.9 279.71 459.58C291.38 465.26 299.76 466.76 309.63 465.27C319.5 463.78 335.63 455.99 341.34 452.1C347.05 448.21 353.91 444.62 355.41 439.84L355.45 439.69Z"
              fill="#58C377"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M316.81 458.09C302.75 467.66 289.28 463.17 289.28 463.17L288.97 463.43C295.594 465.766 302.698 466.398 309.63 465.27C319.5 463.77 335.63 455.99 341.34 452.1C347.05 448.21 353.91 444.62 355.41 439.84V439.69C355.529 439.307 355.62 438.916 355.68 438.52C346.87 440.67 329.26 449.61 316.81 458.09Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M296.17 441.63C296.17 443.78 293.55 445.52 290.33 445.52C287.11 445.52 284.5 443.78 284.5 441.63C284.5 439.48 287.11 437.74 290.33 437.74C293.55 437.74 296.17 439.48 296.17 441.63Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M178.6 382.14L177.96 379.05C187.43 377.05 193.69 374.25 194.57 372.85C193.57 371.85 189.57 369.68 186.24 367.93C174.17 361.56 153.98 350.93 160.4 337.14C164.15 329.09 184.6 322.04 222.9 315.61C250.69 310.94 277.8 308.44 278.07 308.41L278.36 311.56C278.09 311.56 251.08 314.08 223.36 318.73C175.27 326.81 165.03 334.57 163.21 338.48C158.06 349.48 175.88 358.91 187.67 365.14C194.83 368.92 198.09 370.64 197.75 373.04C197.12 377.81 184.15 381 178.6 382.14Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M278.07 308.41C277.8 308.41 250.69 310.94 222.9 315.61C197.23 319.92 179.6 324.51 169.62 329.49L174.86 330.62C183.52 327.08 198.3 322.95 223.41 318.73C251.08 314.08 278.09 311.59 278.41 311.56L278.07 308.41Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M276.78 404.69L219.59 437.25L11.24 364.99L74.59 342.15L276.78 404.69Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M184.9 388.15L191.7 390.24L198.81 386.53L192.09 384.52L184.9 388.15Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M174.35 379.48L168.46 383.1L182 387.26L189.16 383.64L174.69 379.31L174.35 379.48Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M194.56 391.12L201.8 393.34L209 389.58L201.7 387.39L194.56 391.12Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M148.36 376.93L154.9 378.94L161.61 375.39L155.6 373.59L148.36 376.93Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M157.75 379.81L165.78 382.28L171.95 378.49L164.48 376.25L157.75 379.81Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M190.31 399.33L183.16 397.07L176.06 400.78L183.12 403.09L190.31 399.33Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M204.67 394.22L213.81 397.03L221.12 393.21L211.9 390.45L204.67 394.22Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M130.86 371.56L137.11 373.48L144.05 370.13L137.64 368.21L130.86 371.56Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M212.5 406.36L205.02 403.99L197.63 407.85L205.43 410.41L212.5 406.36Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M221.04 401.46L214.01 399.3L207.66 402.61L214.98 404.93L221.04 401.46Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M216.67 397.91L223.55 400.02L230.52 396.02L224.02 394.08L216.67 397.91Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M202.18 403.09L193.15 400.23L185.91 404.01L194.83 406.93L202.18 403.09Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M241.54 399.32L233.3 396.86L226.31 400.87L234.42 403.36L241.54 399.32Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M231.89 404.79L223.8 402.3L217.71 405.8L225.67 408.31L231.89 404.79Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M146.94 371.07L140.07 374.39L145.34 376L152.55 372.68L147.05 371.03L146.94 371.07Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M49.07 365.87L54.96 363.29L51.34 362.11L45.15 364.55L49.07 365.87Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M50.75 359.69L57.86 362.02L63.96 359.35L56.74 357.07L50.75 359.69Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M59.67 355.78L66.89 358.07L72.19 355.75L64.88 353.5L59.67 355.78Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M79.97 371.49L75.73 370.1L69.16 372.65L73.92 374.26L79.97 371.49Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M63.81 366.19L57.97 364.28L52.04 366.88L57.84 368.83L63.81 366.19Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M69.94 359.03L73.04 360.01L78.11 357.56L75.28 356.69L69.94 359.03Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M72.57 369.07L66.8 367.18L60.8 369.83L66.04 371.6L72.57 369.07Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M122.03 368.85L127.93 370.66L134.68 367.32L128.91 365.6L122.03 368.85Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M105.38 363.73L110.24 365.23L116.58 361.9L111.77 360.46L105.38 363.73Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M80.59 362.4L85.87 359.94L81.07 358.47L75.97 360.94L80.59 362.4Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M113.1 366.1L119.04 367.93L125.89 364.69L119.46 362.77L113.1 366.1Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M103.38 358.01L96.61 361.04L102.5 362.85L108.85 359.59L103.47 357.98L103.38 358.01Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M87.76 358.32L93.55 360.1L100.37 357.05L94.26 355.22L87.76 358.32Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M78.24 355.4L84.78 357.41L91.25 354.32L84.98 352.44L78.24 355.4Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M163.54 388.65L173.2 391.71L179.28 388.63L169.07 385.5L163.54 388.65Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M176.07 392.62L182.96 394.8L189.04 391.63L182.19 389.52L176.07 392.62Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M211.14 398.42L202.01 395.61L195.79 398.86L204.82 401.72L211.14 398.42Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M185.8 395.69L192.95 397.96L199.14 394.73L191.91 392.51L185.8 395.69Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M88.82 374.39L82.92 372.46L76.84 375.25L82.74 377.24L88.82 374.39Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M134.73 379.53L141.79 381.77L146.9 378.69L140.03 376.58L134.73 379.53Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M144.47 382.62L151.34 384.79L156.61 381.67L149.61 379.52L144.47 382.62Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M154.04 385.64L160.81 387.79L166.31 384.65L159.33 382.5L154.04 385.64Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M85.19 366.07L80.73 364.66L74.59 367.51L79.32 369.06L85.19 366.07Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M75.15 354.45L81.86 351.51L71.59 348.43L71.61 348.49L64.09 351.05L75.15 354.45Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M60.65 350L68.21 347.42L66.05 346.77L58.74 349.41L60.65 350Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M259.37 402.46L269.7 405.56L272.38 404.03L262.2 400.92L259.37 402.46Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M77.76 363.71L73.2 362.27L67.31 365.12L71.66 366.55L77.76 363.71Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M126 376.77L131.97 378.66L137.24 375.72L131.25 373.88L126 376.77Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M60.86 363.01L64.42 364.18L70.28 361.35L67.01 360.31L60.86 363.01Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M116.67 373.82L123.23 375.89L128.45 373.02L121.75 370.96L116.67 373.82Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M111.4 374.36L105.52 372.5L99.37 375.64L105.54 377.66L111.4 374.36Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M120.68 377.3L114.16 375.23L108.26 378.55L114.62 380.63L120.68 377.3Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M139.39 383.22L132.2 380.94L126.03 384.38L133.44 386.8L139.39 383.22Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M180.32 396.17L173.39 393.98L166.28 397.57L173.26 399.86L180.32 396.17Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M148.91 386.23L142.06 384.07L136.08 387.67L142.78 389.87L148.91 386.23Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M170.51 393.07L151.61 387.09L145.44 390.74L163.45 396.64L170.51 393.07Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M129.44 380.07L123.45 378.18L117.36 381.53L123.31 383.48L129.44 380.07Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M100.13 368.58L105.33 370.23L110.61 367.54L105.41 365.95L100.13 368.58Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M90.72 365.61L97.25 367.67L102.49 365.05L95.83 363L90.72 365.61Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M102.66 371.6L97.41 369.93L91.16 372.94L96.55 374.71L102.66 371.6Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M108.2 371.14L113.92 372.95L118.96 370.11L113.5 368.43L108.2 371.14Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M83.5601 363.34L87.8601 364.7L92.9301 362.12L88.8801 360.87L83.5601 363.34Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M94.48 369.01L88.05 366.97L82.14 369.99L88.28 372L94.48 369.01Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M47.75 358.71L53.7 356.1L46.52 353.83L40.02 356.18L47.75 358.71Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M106.58 387.52L74.04 376.53L74.01 376.54L74 376.51L57.95 371.09L47.28 375.81L96.46 392.82L106.58 387.52Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.65 369.03L37.84 364.31L33.14 362.72L22.09 367.1L27.65 369.03Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M46.2 367.13L40.74 365.29L30.52 370.02L35.6 371.77L46.2 367.13Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M54.99 370.1L49.17 368.13L38.54 372.79L44.36 374.8L54.99 370.1Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M134.19 396.84L128.14 394.8L117.6 400.13L124.2 402.41L134.19 396.84Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M115.31 390.46L109.34 388.45L99.1901 393.76L104.81 395.71L115.31 390.46Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M125.34 393.85L118.12 391.41L107.6 396.67L114.82 399.17L125.34 393.85Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M96.02 353.55L100.18 351.37L92.68 349.07L87.97 351.13L96.02 353.55Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M98.91 354.41L103.36 355.75L108.13 353.8L103.05 352.24L98.91 354.41Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M151.5 402.69L136.89 397.75L126.87 403.34L140.74 408.13L151.5 402.69Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M106.58 356.71L111.63 358.22L116.14 356.25L111.31 354.77L106.58 356.71Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.08 360.47L33.13 360.45L33.15 360.5L42.06 363.51L48.21 361.08L36.8 357.34L30.52 359.61L33.08 360.47Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M79.02 348.45L84.85 350.2L89.59 348.13L83.96 346.4L79.02 348.45Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M61.79 352.55L55.45 350.6L49.78 352.65L56.62 354.82L61.79 352.55Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M224.84 418.99L216.13 416.13L209.33 419.99L217.8 422.85L224.84 418.99Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M256.78 403.89L249.37 407.95L259.83 411.16L267.16 407L256.78 403.89Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M75.82 347.5L80.79 345.44L74.81 343.61L69.38 345.57L75.82 347.5Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M246.79 409.36L240.27 412.94L250.84 416.28L257.31 412.6L246.79 409.36Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M218.01 425.14L207.14 431.1L218.1 434.88L228.82 428.79L218.01 425.14Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M237.72 414.34L230.12 418.5L240.78 422L248.34 417.7L237.72 414.34Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30.54 361.66L27.33 360.76L15.79 364.93L19.04 366.05L30.54 361.66Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M215.29 424.22L206.87 421.38L196.32 427.35L204.45 430.17L215.29 424.22Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M182.75 413.24L173.94 410.26L163.16 415.88L171.89 418.9L182.75 413.24Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M204.19 420.48L196.59 417.91L196.39 418.02L196.27 417.8L185.51 414.17L174.63 419.85L193.67 426.44L204.19 420.48Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M171.17 409.33L164.19 406.97L153.5 412.55L160.42 414.94L171.17 409.33Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M238.3 423.4L227.59 419.89L220.52 423.76L231.27 427.4L238.3 423.4Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M114.75 359.15L119.29 360.51L123.71 358.56L119.23 357.19L114.75 359.15Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M161.43 406.04L154.31 403.63L143.51 409.09L150.76 411.6L161.43 406.04Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M167.54 374.96L174.48 377.04L178.06 375.18L171.73 373.25L167.54 374.96Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M202.97 411.82L195.02 409.21L188.1 412.82L196.36 415.61L202.97 411.82Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M180.51 404.45L173.45 402.14L166.78 405.62L173.76 407.98L180.51 404.45Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M253.94 403.04L244.34 400.16L237.19 404.21L246.56 407.09L253.94 403.04Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M213.43 415.25L205.67 412.7L199.03 416.51L206.65 419.08L213.43 415.25Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M243.98 408.5L234.67 405.64L228.41 409.18L237.49 412.06L243.98 408.5Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M223.16 409.73L215.23 407.22L208.13 411.29L215.91 413.84L223.16 409.73Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M234.94 413.46L225.91 410.6L218.62 414.73L227.38 417.6L234.94 413.46Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M192.22 408.29L183.3 405.37L176.52 408.91L185.34 411.88L192.22 408.29Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M115.15 383.03L108.77 380.94L102.55 383.93L109.16 386.16L115.15 383.03Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M124.23 386L117.94 383.94L111.92 387.1L117.96 389.13L124.23 386Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M105.88 379.99L100.5 378.22L94.66 381.27L99.69 382.97L105.88 379.99Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M160.79 397.99L137.15 390.24L130.78 393.46L154.14 401.35L160.79 397.99Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M170.65 401.22L163.62 398.92L156.94 402.3L164.01 404.69L170.65 401.22Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M134.32 389.31L127.07 386.94L120.78 390.08L127.98 392.52L134.32 389.31Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M140.62 366.9L146.94 368.8L151.31 367L144.9 365.04L140.62 366.9Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M150.15 369.76L155.47 371.35L159.67 369.56L154.49 367.97L150.15 369.76Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M158.63 372.3L164.34 374L168.55 372.27L162.81 370.52L158.63 372.3Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M177.38 377.91L183.16 379.64L183.15 379.63L186.87 377.88L180.93 376.06L177.38 377.91Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M97.7 377.31L91.75 375.35L85.63 378.22L91.89 380.33L97.7 377.31Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M131.71 364.23L137.49 365.96L141.8 364.09L135.77 362.25L131.71 364.23Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M122.4 361.44L128.74 363.34L132.82 361.35L126.79 359.5L122.4 361.44Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M226.7 392.68L233.04 394.58L235.98 392.9L229.86 391.03L226.7 392.68Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M214.58 389.05L223.8 391.81L226.99 390.15L217.84 387.35L214.58 389.05Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M259.38 400.06L249.74 397.11L246.88 398.72L256.54 401.62L259.38 400.06Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M235.82 395.41L244.08 397.88L246.96 396.26L238.74 393.74L235.82 395.41Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M186.17 380.54L191.9 382.26L195.55 380.53L189.87 378.8L186.17 380.54Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M194.92 383.16L201.49 385.13L204.85 383.38L198.55 381.45L194.92 383.16Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M204.38 386L211.68 388.18L214.97 386.47L207.72 384.25L204.38 386Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M219.59 437.25L219.11 443.72L276.18 411.92L276.78 404.69L219.59 437.25Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M268.48 416.13V423.97L275.79 420.02L276.18 411.92L268.48 416.13Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M268.48 423.97L258.41 422L268.68 416.13L268.48 423.97Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M219.11 443.72L11.2 370.64L11.24 364.99L219.59 437.25L219.11 443.72Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M242.225 276.463L181.766 298.263L292.125 326.363L353.716 300.293L242.225 276.463Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M181.766 298.263V301.693L291.945 330.873L292.125 326.363L181.766 298.263Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M292.126 326.363L353.716 300.293L353.266 304.063L291.946 330.873L292.126 326.363Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M249.345 249.263L246.855 287.823L243.375 289.323L306.315 304.243L309.796 302.753L312.535 260.953L249.345 249.263Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M245.866 250.763L243.375 289.323L306.315 304.243L309.056 262.453L245.866 250.763Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M452.866 7.62331L449.106 6.19331L443.836 6.52331L443.406 7.96331L149.496 25.4533C148.719 25.4985 147.983 25.8176 147.419 26.3541C146.855 26.8905 146.499 27.6095 146.416 28.3833L127.016 229.283C126.948 229.945 127.13 230.608 127.526 231.143C127.922 231.677 128.503 232.045 129.156 232.173L403.236 284.683L400.236 286.513L412.386 288.873L413.796 288.683L417.226 287.023C417.783 286.863 418.282 286.544 418.661 286.105C419.041 285.667 419.286 285.128 419.366 284.553L454.876 10.8133C454.956 10.1319 454.8 9.44358 454.434 8.86309C454.069 8.28259 453.515 7.84502 452.866 7.62331Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M144.656 26.4533L123.016 230.933C122.943 231.596 123.124 232.261 123.52 232.797C123.917 233.332 124.501 233.699 125.156 233.823L411.816 288.753C412.214 288.826 412.623 288.817 413.017 288.728C413.412 288.638 413.785 288.47 414.113 288.232C414.441 287.995 414.717 287.694 414.926 287.347C415.134 287 415.27 286.614 415.326 286.213L450.896 9.35331C450.947 8.92068 450.903 8.48206 450.768 8.06796C450.633 7.65385 450.409 7.27419 450.112 6.95538C449.815 6.63657 449.452 6.38625 449.049 6.22184C448.645 6.05742 448.211 5.98285 447.776 6.00331L147.776 23.5233C146.991 23.5572 146.244 23.8716 145.672 24.4093C145.099 24.947 144.739 25.6723 144.656 26.4533Z"
              fill="#263238"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M151.246 32.6233L133.026 202.233L407.286 244.303L438.186 16.7233L151.246 32.6233Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M125.156 233.813L411.816 288.753C412.214 288.826 412.623 288.817 413.017 288.728C413.412 288.638 413.785 288.47 414.113 288.232C414.441 287.995 414.717 287.694 414.926 287.347C415.134 287 415.27 286.614 415.326 286.213L418.776 259.313L125.066 211.493L123.016 230.933C122.946 231.594 123.128 232.257 123.524 232.791C123.92 233.324 124.503 233.689 125.156 233.813Z"
              fill="white"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M169.863 186.321C172.424 180.203 169.525 173.175 163.387 170.622C157.25 168.069 150.198 170.959 147.637 177.077C145.076 183.194 147.975 190.222 154.113 192.775C160.25 195.328 167.302 192.438 169.863 186.321Z"
              fill="#58C377"
            />
            <path
              d="M164.837 181.994C164.837 181.994 166.103 180.315 166.389 181.994C166.675 183.674 164.224 185.771 164.224 185.771L164.837 181.994Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M152.724 181.994C152.724 181.994 151.468 180.315 151.182 181.994C150.896 183.674 153.337 185.771 153.337 185.771L152.724 181.994Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M159.209 173.708C159.209 173.708 154.44 173.342 153.337 176.508C152.234 179.673 152.979 184.794 153.337 185.771C153.694 186.749 156.768 191.503 157.616 191.879C158.464 192.256 160.557 192.124 160.915 191.635C161.272 191.146 164.347 186.647 164.582 185.059C164.682 182.73 164.637 180.398 164.449 178.075C164.406 177.257 164.131 176.467 163.655 175.799C163.18 175.13 162.523 174.61 161.763 174.298C160.95 173.964 160.087 173.765 159.209 173.708Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M164.449 178.055C164.406 177.236 164.131 176.447 163.655 175.778C163.18 175.11 162.523 174.589 161.763 174.278C160.948 173.951 160.086 173.758 159.209 173.708C159.209 173.708 154.44 173.342 153.337 176.508C152.819 178.316 152.636 180.202 152.795 182.076C153.041 182.351 153.817 183.206 153.715 182.137C153.572 180.875 153.429 177.047 154.419 176.253C155.41 175.459 155.543 174.716 156.942 175.836C158.341 176.955 158.208 177.933 159.618 177.23C161.027 176.528 161.303 174.991 162.559 175.551C163.816 176.11 163.407 178.767 163.407 180.03C163.407 181.292 163.407 183.674 164.255 182.554C164.409 182.316 164.533 182.06 164.622 181.791C164.582 180.518 164.51 179.124 164.449 178.055Z"
              fill="#263238"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M157.177 191.095C157.177 191.095 158.688 188.041 159.649 189.181C160.245 189.89 160.677 190.721 160.915 191.614C160.336 191.999 159.636 192.159 158.947 192.064C158.258 191.968 157.628 191.623 157.177 191.095Z"
              fill="#263238"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M157.861 173.453C157.625 172.91 157.248 172.439 156.768 172.089L156.084 171.682C156.084 171.682 157.728 171 158.27 171.54C158.614 171.885 158.934 172.252 159.23 172.639C159.23 172.639 159.506 170.725 160.19 171.407C160.577 171.797 160.99 172.161 161.426 172.496C161.426 172.496 159.506 173.046 159.506 174.41"
              fill="#263238"
            />
            <path
              d="M157.861 173.453C157.625 172.91 157.248 172.439 156.768 172.089L156.084 171.682C156.084 171.682 157.728 171 158.27 171.54C158.614 171.885 158.934 172.252 159.23 172.639C159.23 172.639 159.506 170.725 160.19 171.407C160.577 171.797 160.99 172.161 161.426 172.496C161.426 172.496 159.506 173.046 159.506 174.41"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M176.863 127.321C179.424 121.203 176.525 114.175 170.387 111.622C164.25 109.069 157.198 111.959 154.637 118.077C152.076 124.194 154.975 131.222 161.113 133.775C167.25 136.328 174.302 133.438 176.863 127.321Z"
              fill="#58C377"
            />
            <path
              d="M171.837 122.994C171.837 122.994 173.103 121.315 173.389 122.994C173.675 124.674 171.224 126.771 171.224 126.771L171.837 122.994Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M159.724 122.994C159.724 122.994 158.468 121.315 158.182 122.994C157.896 124.674 160.337 126.771 160.337 126.771L159.724 122.994Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M166.209 114.708C166.209 114.708 161.44 114.342 160.337 117.508C159.234 120.673 159.979 125.794 160.337 126.771C160.694 127.749 163.768 132.503 164.616 132.879C165.464 133.256 167.557 133.124 167.915 132.635C168.272 132.146 171.347 127.647 171.582 126.059C171.682 123.73 171.637 121.398 171.449 119.075C171.406 118.257 171.131 117.467 170.655 116.799C170.18 116.13 169.523 115.61 168.763 115.298C167.95 114.964 167.087 114.765 166.209 114.708Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M171.449 119.055C171.406 118.236 171.131 117.447 170.655 116.778C170.18 116.11 169.523 115.589 168.763 115.278C167.948 114.951 167.086 114.758 166.209 114.708C166.209 114.708 161.44 114.342 160.337 117.508C159.819 119.316 159.636 121.202 159.795 123.076C160.041 123.351 160.817 124.206 160.715 123.137C160.572 121.875 160.429 118.047 161.419 117.253C162.41 116.459 162.543 115.716 163.942 116.836C165.341 117.955 165.208 118.933 166.618 118.23C168.027 117.528 168.303 115.991 169.559 116.551C170.816 117.11 170.407 119.767 170.407 121.03C170.407 122.292 170.407 124.674 171.255 123.554C171.409 123.316 171.533 123.06 171.622 122.791C171.582 121.518 171.51 120.124 171.449 119.055Z"
              fill="#263238"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M164.177 132.095C164.177 132.095 165.688 129.041 166.649 130.181C167.245 130.89 167.677 131.721 167.915 132.614C167.336 132.999 166.636 133.159 165.947 133.064C165.258 132.968 164.628 132.623 164.177 132.095Z"
              fill="#263238"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M164.861 114.453C164.625 113.91 164.248 113.439 163.768 113.089L163.084 112.682C163.084 112.682 164.728 112 165.27 112.54C165.614 112.885 165.934 113.252 166.23 113.639C166.23 113.639 166.506 111.725 167.19 112.407C167.577 112.797 167.99 113.161 168.426 113.496C168.426 113.496 166.506 114.046 166.506 115.41"
              fill="#263238"
            />
            <path
              d="M164.861 114.453C164.625 113.91 164.248 113.439 163.768 113.089L163.084 112.682C163.084 112.682 164.728 112 165.27 112.54C165.614 112.885 165.934 113.252 166.23 113.639C166.23 113.639 166.506 111.725 167.19 112.407C167.577 112.797 167.99 113.161 168.426 113.496C168.426 113.496 166.506 114.046 166.506 115.41"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M186.863 63.3207C189.424 57.2032 186.525 50.1748 180.387 47.6221C174.25 45.0694 167.198 47.9591 164.637 54.0765C162.076 60.1939 164.975 67.2224 171.113 69.7751C177.25 72.3278 184.302 69.4381 186.863 63.3207Z"
              fill="#58C377"
            />
            <path
              d="M181.837 58.9943C181.837 58.9943 183.103 57.3146 183.389 58.9943C183.675 60.674 181.224 62.7711 181.224 62.7711L181.837 58.9943Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M169.724 58.9943C169.724 58.9943 168.468 57.3146 168.182 58.9943C167.896 60.674 170.337 62.7711 170.337 62.7711L169.724 58.9943Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M176.209 50.708C176.209 50.708 171.44 50.3415 170.337 53.5075C169.234 56.6735 169.979 61.794 170.337 62.7713C170.694 63.7486 173.768 68.5027 174.616 68.8793C175.464 69.256 177.557 69.1236 177.915 68.635C178.272 68.1464 181.347 63.6468 181.582 62.0587C181.682 59.7304 181.637 57.3981 181.449 55.0752C181.406 54.2568 181.131 53.4672 180.655 52.7986C180.18 52.13 179.523 51.6098 178.763 51.2985C177.95 50.9642 177.087 50.7648 176.209 50.708Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M181.449 55.0549C181.406 54.2364 181.131 53.4469 180.655 52.7783C180.18 52.1096 179.523 51.5894 178.763 51.2781C177.948 50.9509 177.086 50.7583 176.209 50.708C176.209 50.708 171.44 50.3415 170.337 53.5075C169.819 55.3156 169.636 57.2025 169.795 59.076C170.041 59.3508 170.817 60.206 170.715 59.1371C170.572 57.8747 170.429 54.0471 171.419 53.253C172.41 52.459 172.543 51.7158 173.942 52.8356C175.341 53.9554 175.208 54.9327 176.618 54.2303C178.027 53.5279 178.303 51.9907 179.559 52.5506C180.816 53.1105 180.407 55.7675 180.407 57.0298C180.407 58.2921 180.407 60.6742 181.255 59.5544C181.409 59.3165 181.533 59.0599 181.622 58.7909C181.582 57.5184 181.51 56.1238 181.449 55.0549Z"
              fill="#263238"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M174.177 68.0953C174.177 68.0953 175.688 65.0413 176.649 66.1814C177.245 66.8898 177.677 67.7205 177.915 68.6145C177.336 68.9994 176.636 69.1592 175.947 69.0635C175.258 68.9678 174.628 68.6233 174.177 68.0953Z"
              fill="#263238"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M174.861 50.4534C174.625 49.9101 174.248 49.4393 173.768 49.0892L173.084 48.682C173.084 48.682 174.728 48 175.27 48.5395C175.614 48.8846 175.934 49.2519 176.23 49.639C176.23 49.639 176.506 47.7251 177.19 48.4072C177.577 48.7973 177.99 49.1612 178.426 49.4964C178.426 49.4964 176.506 50.0462 176.506 51.4103"
              fill="#263238"
            />
            <path
              d="M174.861 50.4534C174.625 49.9101 174.248 49.4393 173.768 49.0892L173.084 48.682C173.084 48.682 174.728 48 175.27 48.5395C175.614 48.8846 175.934 49.2519 176.23 49.639C176.23 49.639 176.506 47.7251 177.19 48.4072C177.577 48.7973 177.99 49.1612 178.426 49.4964C178.426 49.4964 176.506 50.0462 176.506 51.4103"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M390.042 191.004C396.692 191.004 402.083 185.631 402.083 179.002C402.083 172.374 396.692 167 390.042 167C383.391 167 378 172.374 378 179.002C378 185.631 383.391 191.004 390.042 191.004Z"
              fill="#58C377"
            />
            <path
              d="M388.53 169.881C387.283 169.806 386.046 170.148 385.016 170.853C383.986 171.557 383.22 172.583 382.841 173.77C381.431 177.528 380.638 181.488 380.492 185.497C380.492 187.981 385.425 189.946 388.121 190.149C390.818 190.353 396.884 190.251 398.968 186.943C401.052 183.634 397.671 176.915 396.833 172.772C395.996 168.629 391.431 169.677 388.53 169.881Z"
              fill="#263238"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M396.118 178.178C396.118 178.178 397.385 176.498 397.661 178.178C397.936 179.857 395.506 181.954 395.506 181.954L396.118 178.178Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M384.005 178.178C384.005 178.178 382.739 176.498 382.463 178.178C382.187 179.857 384.618 181.954 384.618 181.954L384.005 178.178Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M390.491 169.891C390.491 169.891 385.721 169.525 384.618 172.701C383.515 175.877 384.251 180.977 384.618 181.954C384.986 182.932 388.04 187.686 388.898 188.062C389.756 188.439 391.829 188.307 392.196 187.818C392.564 187.329 395.618 182.82 395.863 181.232C395.963 178.903 395.919 176.571 395.73 174.248C395.687 173.43 395.412 172.64 394.937 171.971C394.461 171.303 393.805 170.783 393.044 170.471C392.23 170.141 391.368 169.945 390.491 169.891Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M386.865 171.123C386.865 171.123 394.576 178.178 396.118 178.178C397.661 178.178 397.865 172.986 396.2 170.502C394.535 168.018 386.62 166.573 386.865 171.123Z"
              fill="#263238"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M393.422 126.715C399.912 128.166 406.346 124.099 407.793 117.63C409.239 111.161 405.151 104.741 398.661 103.289C392.171 101.838 385.737 105.906 384.29 112.374C382.844 118.843 386.932 125.264 393.422 126.715Z"
              fill="#58C377"
            />
            <path
              d="M396.557 105.771C395.356 105.426 394.075 105.49 392.916 105.952C391.757 106.415 390.786 107.25 390.156 108.325C387.96 111.684 386.322 115.376 385.305 119.257C384.763 121.681 389.148 124.675 391.735 125.462C394.322 126.249 400.265 127.473 403.02 124.699C405.775 121.925 403.942 114.631 404.029 110.404C404.116 106.178 399.432 106.205 396.557 105.771Z"
              fill="#263238"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M402.152 115.524C402.152 115.524 403.754 114.161 403.657 115.86C403.56 117.56 400.73 119.076 400.73 119.076L402.152 115.524Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M390.331 112.88C390.331 112.88 389.461 110.965 388.826 112.544C388.19 114.123 390.105 116.7 390.105 116.7L390.331 112.88Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M398.468 106.209C398.468 106.209 393.894 104.81 392.124 107.669C390.355 110.528 389.959 115.666 390.105 116.7C390.25 117.734 392.193 123.04 392.948 123.594C393.703 124.149 395.755 124.472 396.221 124.076C396.686 123.679 400.651 119.945 401.236 118.448C401.842 116.198 402.308 113.912 402.631 111.604C402.767 110.796 402.671 109.965 402.353 109.209C402.035 108.453 401.508 107.802 400.834 107.332C400.112 106.832 399.313 106.452 398.468 106.209Z"
              fill="white"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M394.661 106.62C394.661 106.62 400.647 115.187 402.152 115.524C403.657 115.86 404.989 110.838 403.907 108.051C402.824 105.264 395.415 102.126 394.661 106.62Z"
              fill="#263238"
              stroke="#263238"
              stroke-width="1.10919"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M204.791 49.2333L259.279 53.31C259.824 53.3501 260.355 53.5158 260.841 53.7977C261.327 54.0796 261.759 54.4721 262.111 54.9528C262.463 55.4336 262.729 55.9931 262.894 56.5994C263.058 57.2057 263.119 57.8469 263.071 58.4863L261.934 73.686C261.886 74.3254 261.731 74.9505 261.478 75.5255C261.225 76.1006 260.878 76.6143 260.458 77.0372C260.039 77.4602 259.554 77.7842 259.031 77.9906C258.509 78.1971 257.959 78.2819 257.414 78.2403L203.684 74.2203L190.038 60.5747L204.791 49.2333Z"
              fill="#A3A3A3"
            />
            <path
              d="M367.202 100.697L308.124 94.1178C307.533 94.0512 306.933 94.1108 306.36 94.2933C305.786 94.4757 305.249 94.7774 304.781 95.1812C304.312 95.5849 303.92 96.0827 303.628 96.6462C303.336 97.2096 303.149 97.8276 303.078 98.4649L301.391 113.613C301.32 114.251 301.367 114.895 301.528 115.509C301.688 116.122 301.961 116.694 302.329 117.191C302.698 117.688 303.155 118.101 303.674 118.405C304.194 118.709 304.766 118.899 305.357 118.964L363.613 125.452L380.821 114.701L367.202 100.697Z"
              fill="#92E3A9"
            />
            <path
              d="M361.781 166.081L304.127 157.006C303.55 156.915 302.958 156.949 302.387 157.107C301.815 157.264 301.275 157.543 300.796 157.926C300.317 158.31 299.909 158.79 299.596 159.341C299.283 159.891 299.07 160.5 298.971 161.134L296.601 176.19C296.501 176.824 296.516 177.469 296.645 178.089C296.774 178.709 297.014 179.291 297.352 179.803C297.69 180.315 298.119 180.746 298.615 181.072C299.11 181.398 299.662 181.612 300.24 181.702L357.092 190.651L374.482 180.644L361.781 166.081Z"
              fill="#92E3A9"
            />
            <path
              d="M195.535 114.019L247.766 119.676C248.289 119.732 248.793 119.913 249.25 120.209C249.707 120.504 250.108 120.909 250.429 121.4C250.75 121.89 250.986 122.457 251.122 123.067C251.259 123.678 251.293 124.32 251.224 124.958L249.583 140.111C249.514 140.749 249.343 141.369 249.079 141.936C248.815 142.503 248.463 143.007 248.044 143.417C247.626 143.827 247.148 144.137 246.638 144.328C246.128 144.519 245.597 144.588 245.074 144.531L193.57 138.952L180.944 124.922L195.535 114.019Z"
              fill="#A3A3A3"
            />
            <rect
              x="174.744"
              y="178.787"
              width="27.7588"
              height="13"
              rx="6.5"
              transform="rotate(8.04938 174.744 178.787)"
              fill="#D9D9D9"
            />
            <circle
              cx="181.872"
              cy="186.214"
              r="2.5"
              transform="rotate(7.27582 181.872 186.214)"
              fill="white"
            />
            <circle
              cx="187.824"
              cy="186.974"
              r="2.5"
              transform="rotate(7.27582 187.824 186.974)"
              fill="#696969"
            />
            <circle
              cx="193.775"
              cy="187.734"
              r="2.5"
              transform="rotate(7.27582 193.775 187.734)"
              fill="#455A64"
            />
            <path
              d="M408.751 390.31L411.381 414.22C411.381 421.22 423.171 426.94 437.711 426.94C452.251 426.94 464.031 421.25 464.031 414.22L466.671 390.31H408.751Z"
              fill="#BABDBF"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M406.861 376.17V390.91C406.861 394.68 420.671 399.37 437.711 399.37C454.751 399.37 468.561 394.68 468.561 390.91V376.17H406.861Z"
              fill="#BABDBF"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M437.711 384.91C454.749 384.91 468.561 380.997 468.561 376.17C468.561 371.343 454.749 367.43 437.711 367.43C420.673 367.43 406.861 371.343 406.861 376.17C406.861 380.997 420.673 384.91 437.711 384.91Z"
              fill="#BABDBF"
              stroke="#263238"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M437.711 382.98C450.987 382.98 461.751 379.931 461.751 376.17C461.751 372.409 450.987 369.36 437.711 369.36C424.434 369.36 413.671 372.409 413.671 376.17C413.671 379.931 424.434 382.98 437.711 382.98Z"
              fill="#263238"
            />
            <path
              d="M384.721 290.85C387.571 291.63 394.121 290.53 394.131 290.53C394.141 290.53 392.131 286.43 391.931 286.19C390.051 283.38 384.771 279.07 381.131 280.11C380.531 280.297 379.977 280.609 379.507 281.025C379.036 281.441 378.658 281.952 378.399 282.524C378.139 283.097 378.003 283.717 378 284.345C377.997 284.974 378.127 285.596 378.381 286.17C379.371 288.65 382.281 290.18 384.721 290.85Z"
              fill="#263238"
            />
            <path
              d="M451.381 282.66C451.441 282.66 451.941 278.12 451.941 277.82C451.941 274.45 449.941 267.93 446.291 266.82C445.685 266.65 445.05 266.609 444.427 266.7C443.804 266.792 443.207 267.013 442.676 267.349C442.144 267.686 441.689 268.131 441.34 268.654C440.991 269.178 440.756 269.77 440.651 270.39C440.111 273 441.651 275.88 443.361 277.78C445.311 279.96 451.381 282.65 451.381 282.66Z"
              fill="#263238"
            />
            <path
              d="M467.541 256C463.761 256.14 460.081 261.88 459.161 265.13C459.081 265.42 458.351 269.95 458.411 269.94H458.471C457.891 270.84 457.261 271.81 456.611 272.94C455.411 274.94 454.081 277.21 452.791 279.78C451.376 282.531 450.124 285.363 449.041 288.26C447.81 291.504 446.87 294.85 446.231 298.26C446.226 298.303 446.226 298.347 446.231 298.39C446.091 297.29 445.591 294.23 445.531 294C444.621 290.74 440.951 285 437.171 284.85C436.542 284.843 435.918 284.968 435.341 285.218C434.764 285.468 434.246 285.836 433.82 286.299C433.395 286.762 433.072 287.31 432.872 287.906C432.672 288.503 432.6 289.134 432.661 289.76C432.831 292.42 435.121 294.76 437.221 296.17C439.601 297.74 445.691 298.72 446.171 298.79C445.605 302.274 445.271 305.792 445.171 309.32C445.111 311.367 445.111 313.434 445.171 315.52C445.021 314.57 444.871 313.73 444.841 313.61C443.931 310.36 440.261 304.61 436.481 304.46C435.852 304.455 435.23 304.581 434.653 304.831C434.077 305.081 433.559 305.45 433.134 305.913C432.709 306.375 432.386 306.922 432.185 307.518C431.985 308.114 431.912 308.745 431.971 309.37C432.141 312.03 434.431 314.37 436.541 315.79C438.651 317.21 443.851 318.13 445.221 318.36C445.221 319.16 445.221 319.95 445.221 320.75C445.311 324.57 445.421 328.38 445.421 332.13C445.421 333.45 445.421 334.75 445.321 336.05C445.191 335.21 445.071 334.5 445.041 334.39C444.131 331.14 440.461 325.39 436.681 325.24C436.052 325.233 435.428 325.358 434.851 325.608C434.274 325.858 433.756 326.226 433.33 326.689C432.905 327.152 432.582 327.7 432.382 328.296C432.182 328.893 432.11 329.524 432.171 330.15C432.341 332.82 434.631 335.15 436.731 336.57C438.831 337.99 443.541 338.82 445.171 339.1C445.091 340.43 445.001 341.76 444.861 343.1C444.741 343.97 444.691 344.82 444.521 345.7C444.351 346.58 444.231 347.42 444.081 348.27C443.751 349.9 443.411 351.58 443.081 353.16C442.831 354.26 442.571 355.3 442.311 356.35C442.311 355.04 442.311 352.47 442.311 352.26C441.839 349.337 440.627 346.583 438.791 344.26C438.756 343.921 438.689 343.586 438.591 343.26C438.427 342.648 438.135 342.077 437.734 341.585C437.334 341.094 436.833 340.693 436.266 340.41C435.699 340.126 435.078 339.966 434.444 339.94C433.811 339.915 433.179 340.024 432.591 340.26C429.111 341.75 427.741 348.43 428.051 351.79C428.051 351.99 428.511 354.12 428.811 355.46C428.511 354.7 428.231 353.96 427.921 353.18C427.311 351.63 426.651 350.11 425.921 348.47L424.821 346.1C424.461 345.3 423.991 344.51 423.571 343.7C422.571 341.85 421.471 340.02 420.321 338.2C421.671 337.66 426.441 335.68 428.211 333.86C429.981 332.04 431.711 329.27 431.311 326.63C431.238 326.006 431.035 325.404 430.714 324.864C430.393 324.324 429.962 323.857 429.448 323.495C428.935 323.133 428.351 322.883 427.735 322.761C427.118 322.64 426.483 322.65 425.871 322.79C422.211 323.73 419.871 330.13 419.641 333.5C419.641 333.71 419.751 336.14 419.851 337.5C419.151 336.41 418.451 335.32 417.711 334.25C415.561 331.14 413.291 328.06 411.041 324.98C410.341 324.03 409.671 323.08 408.991 322.14C409.471 321.95 415.191 319.72 417.171 317.69C418.931 315.88 420.671 313.09 420.271 310.45C420.198 309.826 419.995 309.224 419.674 308.684C419.353 308.144 418.922 307.677 418.408 307.315C417.895 306.953 417.311 306.703 416.695 306.581C416.078 306.46 415.443 306.47 414.831 306.61C411.171 307.55 408.831 313.95 408.601 317.32C408.601 317.57 408.771 321.08 408.861 321.96C407.361 319.88 405.861 317.79 404.521 315.66C402.66 312.806 400.99 309.833 399.521 306.76C399.741 306.67 405.721 304.37 407.751 302.29C409.511 300.48 411.251 297.69 410.851 295.05C410.792 294.422 410.602 293.813 410.291 293.264C409.981 292.714 409.558 292.237 409.049 291.863C408.541 291.489 407.959 291.226 407.343 291.093C406.726 290.96 406.088 290.959 405.471 291.09C401.811 292.03 399.471 298.43 399.241 301.8C399.241 302.02 399.361 304.69 399.461 305.96L399.251 306.01C397.849 302.876 396.728 299.623 395.901 296.29C395.421 294.46 395.071 292.69 394.761 290.95C395.921 290.64 401.201 289.14 403.231 287.47C405.261 285.8 407.231 283.28 407.101 280.62C407.098 279.99 406.962 279.367 406.702 278.793C406.442 278.22 406.063 277.707 405.591 277.29C405.119 276.872 404.564 276.559 403.962 276.372C403.361 276.184 402.726 276.125 402.101 276.2C398.351 276.74 395.291 282.83 394.721 286.2C394.721 286.38 394.581 288.26 394.521 289.63C394.391 288.84 394.251 288.03 394.141 287.28C393.741 284.45 393.541 281.83 393.391 279.51C393.311 278.19 393.261 277 393.231 275.88C394.231 274.98 398.101 271.29 399.111 268.88C400.121 266.47 400.721 263.33 399.391 261.02C399.099 260.459 398.692 259.966 398.196 259.574C397.699 259.181 397.126 258.899 396.512 258.745C395.899 258.591 395.26 258.569 394.637 258.68C394.015 258.791 393.423 259.033 392.901 259.39C389.821 261.59 389.901 268.39 390.951 271.62C391.041 271.9 392.951 276.09 392.951 276.04L393.011 275.99C393.011 277.07 393.011 278.22 393.081 279.48C393.191 281.81 393.331 284.48 393.671 287.29C394.012 290.367 394.53 293.422 395.221 296.44C396.009 299.823 397.096 303.13 398.471 306.32C398.474 306.357 398.474 306.394 398.471 306.43C397.751 305.59 395.651 303.31 395.471 303.15C392.921 300.94 386.681 298.15 383.471 300.15C382.942 300.489 382.491 300.936 382.147 301.462C381.803 301.988 381.574 302.58 381.475 303.2C381.376 303.82 381.409 304.455 381.572 305.061C381.735 305.668 382.024 306.233 382.421 306.72C384.031 308.85 387.241 309.56 389.761 309.56C392.611 309.56 398.231 307.01 398.671 306.81C400.132 310.023 401.802 313.136 403.671 316.13C404.751 317.88 405.891 319.61 407.061 321.33C406.411 320.62 405.821 320 405.731 319.92C403.181 317.71 396.941 314.92 393.731 316.92C393.203 317.261 392.753 317.71 392.41 318.236C392.067 318.763 391.838 319.356 391.739 319.976C391.64 320.597 391.673 321.231 391.835 321.838C391.997 322.445 392.285 323.012 392.681 323.5C394.291 325.63 397.501 326.33 400.031 326.33C402.561 326.33 407.421 324.26 408.691 323.69L410.041 325.69C412.231 328.82 414.431 331.94 416.491 335.07C417.221 336.17 417.891 337.28 418.571 338.39C418.001 337.76 417.511 337.24 417.421 337.17C414.871 334.96 408.641 332.17 405.421 334.17C404.897 334.515 404.451 334.967 404.113 335.495C403.775 336.024 403.551 336.617 403.457 337.238C403.362 337.858 403.4 338.491 403.566 339.096C403.732 339.701 404.023 340.265 404.421 340.75C406.031 342.88 409.241 343.58 411.771 343.58C414.301 343.58 418.691 341.71 420.201 341.04C420.861 342.2 421.531 343.35 422.121 344.5C422.501 345.3 422.931 346.04 423.271 346.86C423.611 347.68 423.981 348.46 424.331 349.25C424.941 350.79 425.591 352.38 426.151 353.9C426.551 354.95 426.911 355.97 427.281 356.99C426.561 355.88 425.131 353.75 424.991 353.58C422.801 351.01 417.061 347.33 413.561 348.78C412.991 349.041 412.482 349.418 412.067 349.888C411.653 350.357 411.341 350.909 411.153 351.506C410.964 352.103 410.903 352.734 410.973 353.356C411.044 353.979 411.244 354.58 411.561 355.12C412.831 357.47 415.901 358.66 418.391 359.04C421.131 359.46 426.851 357.88 427.561 357.68C428.161 359.37 428.731 361.02 429.241 362.58C431.011 367.95 432.241 372.49 433.131 375.69L435.671 375.32C435.671 375.25 435.671 375.19 435.611 375.11C434.681 371.88 433.281 367.29 431.361 361.86C430.761 360.14 430.081 358.32 429.361 356.45C431.014 355.5 432.607 354.448 434.131 353.3C436.351 355.1 441.611 356.82 442.291 357.03C441.861 358.77 441.431 360.46 440.991 362.03C439.511 367.48 438.061 371.97 436.991 375.11L439.771 374.71C440.771 371.6 441.921 367.48 443.141 362.6C443.581 360.83 444.021 358.94 444.461 356.99C445.181 356.99 451.111 357.37 453.711 356.37C456.061 355.47 458.811 353.66 459.551 351.1C459.747 350.503 459.815 349.871 459.75 349.245C459.685 348.62 459.49 348.015 459.175 347.471C458.861 346.926 458.435 346.454 457.926 346.085C457.417 345.716 456.836 345.459 456.221 345.33C452.501 344.65 447.671 349.47 446.071 352.44C445.981 352.62 445.171 354.64 444.681 355.92C444.861 355.12 445.031 354.35 445.201 353.53C445.541 351.9 445.841 350.27 446.201 348.53C446.331 347.68 446.451 346.82 446.581 345.95C446.711 345.08 446.771 344.16 446.871 343.26C447.061 341.16 447.151 339.03 447.191 336.88C448.621 337.18 453.691 338.16 456.191 337.62C458.691 337.08 461.641 335.71 462.761 333.29C463.044 332.729 463.205 332.114 463.236 331.487C463.266 330.859 463.163 330.231 462.935 329.646C462.707 329.06 462.358 328.529 461.911 328.087C461.464 327.645 460.929 327.302 460.341 327.08C456.771 325.85 451.261 329.88 449.231 332.58C449.111 332.75 447.871 334.85 447.231 336.02C447.231 334.72 447.231 333.43 447.231 332.13C447.161 328.35 446.961 324.53 446.781 320.71C446.781 319.54 446.691 318.38 446.641 317.21C447.151 317.32 453.151 318.62 455.921 318.02C458.391 317.48 461.381 316.11 462.501 313.69C462.795 313.111 462.96 312.476 462.985 311.827C463.009 311.178 462.892 310.531 462.642 309.932C462.392 309.333 462.015 308.795 461.536 308.356C461.057 307.917 460.489 307.588 459.871 307.39C456.301 306.16 450.791 310.19 448.761 312.89C448.611 313.09 446.841 316.12 446.421 316.89C446.321 314.32 446.251 311.76 446.281 309.24C446.299 305.828 446.54 302.421 447.001 299.04C447.241 299.04 453.501 300.47 456.341 299.85C458.801 299.32 461.791 297.95 462.911 295.53C463.183 294.971 463.336 294.362 463.359 293.74C463.382 293.119 463.276 292.499 463.046 291.921C462.817 291.344 462.469 290.82 462.025 290.384C461.582 289.948 461.052 289.61 460.471 289.39C456.901 288.16 451.391 292.19 449.371 294.89C449.231 295.06 447.881 297.37 447.261 298.48L447.061 298.41C447.608 295.006 448.465 291.659 449.621 288.41C450.231 286.62 450.911 284.95 451.621 283.33C452.761 283.71 457.991 285.33 460.621 285.1C463.251 284.87 466.251 283.81 467.621 281.52C467.964 280.994 468.193 280.402 468.292 279.782C468.391 279.162 468.358 278.528 468.196 277.921C468.034 277.315 467.745 276.749 467.35 276.261C466.954 275.773 466.461 275.374 465.901 275.09C462.481 273.47 456.571 276.87 454.251 279.33C454.131 279.46 453.001 280.96 452.201 282.07C452.521 281.35 452.851 280.59 453.201 279.9C454.421 277.32 455.701 275.03 456.851 273.01C457.511 271.86 458.131 270.84 458.731 269.89C460.041 269.68 465.311 268.75 467.471 267.33C469.631 265.91 471.871 263.58 472.041 260.92C472.102 260.294 472.032 259.662 471.833 259.066C471.634 258.469 471.312 257.921 470.888 257.456C470.464 256.992 469.946 256.623 469.369 256.372C468.793 256.121 468.169 255.994 467.541 256Z"
              fill="#263238"
            />
          </svg>
        </div> */}
      </div>
    </>
  );
}
