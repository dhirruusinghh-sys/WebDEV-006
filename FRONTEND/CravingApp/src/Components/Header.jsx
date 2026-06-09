import React from "react";

const Header = () => {
  return (
    <header className="bg-[#c54a0b] h-28 flex items-center justify-between px-24">
      
      <div>
        <h1 className="text-white text-5xl font-extrabold">
          crav<span className="text-green-400">i</span>ng
        </h1>
      </div>

    
      <div className="flex items-center gap-8">
        <button className="text-white text-2xl font-medium hover:text-gray-200 transition">
          Login
        </button>

        <button className="bg-white text-[#c54a0b] px-7 py-3 rounded-md text-2xl font-medium hover:bg-gray-100 transition">
          Register
        </button>
      </div>
    </header>
  );
};

export default Header;