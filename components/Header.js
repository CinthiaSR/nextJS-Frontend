import React from "react";
import Link from "next/link";
import {RiAccountCircleFill, RiLogoutBoxLine} from "react-icons/ri";

export const Header = () => {
  return (
    <>
      {/* <header className="fixed bg-[#7C081A] flex flex-col md:flex-row items-center p-4 lg:pl-8 w-full z-50"> */}
      <header className="fixed bg-[#7C081A] flex items-center justify-between w-full p-4 pr-10 z-50">
        {/* notifications */}
        <div className="flex gap-2 items-center justify-between lg:w-[83%] w-[100%]">
          <h3 className="text-white text-x flex items-center gap-2">
            <RiAccountCircleFill className="text-2xl" />
            Cinthia
            <span className="text-xs text-gray-300">Administrador</span>
          </h3>
          <button className="text-white text-x flex items-center gap-2">
            <RiLogoutBoxLine className="text-x" />
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
