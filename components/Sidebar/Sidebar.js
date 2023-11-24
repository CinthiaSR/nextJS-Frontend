"use client";
import Link from "next/link";
import React from "react";
import {useState} from "react";
import {
  RiDashboardLine,
  RiLogoutBoxLine,
  RiMenu3Fill,
  RiCloseLine,
  RiFileUserLine,
  RiUserSearchFill,
  RiArchiveDrawerLine,
  RiCashLine,
} from "react-icons/ri";

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      {/* sidebar */}
      <div
        className={`fixed lg:static top-0 w-[50%] md:w-[50%] lg:w-full z-50 bg-gray-300 transition-all ${
          sidebar ? "-left-0" : "-left-full"
        } w-full h-full overflow-y-scroll col-span-1 p-8`}>
        {/* logo */}
        <div className="text-center">
          <img src="logo2.png" alt="" />
        </div>
        <div className="flex flex-col justify-between h-[550px]">
          {/* menu */}
          <nav>
            <ul>
              {/* flex para alinear en la misma linea y item-center para centrarl, gap para separarlos entre si */}
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                  <RiDashboardLine />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/usuarios"
                  className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                  <RiFileUserLine />
                  Usuarios
                </Link>
              </li>
              <li>
                <Link
                  href="/clientes"
                  className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                  <RiUserSearchFill />
                  Clientes
                </Link>
              </li>
              <li>
                <Link
                  href="/pedidos"
                  className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                  <RiArchiveDrawerLine />
                  Pedidos
                </Link>
              </li>
              <li>
                <Link
                  href="/cobranza"
                  className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                  <RiCashLine />
                  Cobranza
                </Link>
              </li>
            </ul>
          </nav>
          {/* image en logout */}
          <div className="flex flex-col gap-4">
            <Link
              href=""
              className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
              <RiLogoutBoxLine />
              Logout
            </Link>
          </div>
        </div>
      </div>
      {/* btn menu movil */}
      <button
        onClick={handleSidebar}
        className="block lg:hidden fixed bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl z-40">
        {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </>
  );
};

export default Sidebar;
