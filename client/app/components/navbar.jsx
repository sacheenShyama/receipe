const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
      {/* Left: Logo */}
      <div>
        <p className="text-xl font-bold text-gray-800">🍛 Cuisine Explorer</p>
      </div>

      {/* Right: Search + Avatar */}
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-lg px-3 py-1 w-1/2  sm:w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Avatar Dropdown */}
        {/* <div className="relative"></div> */}
      </div>
    </nav>
  );
};

export default Navbar;
