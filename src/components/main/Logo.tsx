import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the desired page
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ cursor: "pointer" }}
      onClick={handleClick} // Call handleClick function when clicked
    >
      <div
        className="flex start-10 py-8 fixed top-0 w-full -z-10 "
        style={{ cursor: "pointer" }}
      >
        <a>
          <span className="text-purple-500 sm:text-xl md:text-3xl lg:text-5xl font-bold text-center mr-3">
            Ripple
          </span>
          <span className="text-blue-500 sm:text-lg md:text-3xl lg:text-3xl font-bold text-center">
            Room
          </span>
        </a>
      </div>
    </motion.div>
  );
}
