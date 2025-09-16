import Link from "next/link";
import Search from "./search";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
      {/* Left: Logo */}
      <div>
       <p className="text-xl font-bold text-gray-800">
          <Link href={"/"}> 🍛 Cuisine Explorer </Link>
        </p>
      </div>

      {/* Right: Search + Avatar */}
      <div className="w-1/2">
        <Search />

        {/* Avatar Dropdown */}
        {/* <div className="relative"></div> */}
      </div>
    </nav>
  );
};

export default Navbar;
