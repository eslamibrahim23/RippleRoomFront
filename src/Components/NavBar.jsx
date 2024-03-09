import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between px-16 h-20 bg-sky-400">
          <div className="cursor-pointer bg-transparent p-1">
            <Link to="/" className="text-2xl ">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
