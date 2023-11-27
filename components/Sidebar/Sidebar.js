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
  RiFolderUserLine,
  RiArchiveDrawerLine,
  RiCashLine,
  RiArrowDownSLine,
  RiDoorLockBoxLine,
} from "react-icons/ri";

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      {/* sidebar */}
      <div
        className={`fixed lg:static top-0 w-[40%] md:w-[50%] lg:w-full z-50 bg-gray-300 transition-all ${
          sidebar ? "-left-0" : "-left-full"
        } w-full h-full overflow-y-scroll col-span-1 p-8`}>
        {/* logo */}
        <div className="w-[200px] lg:w-[150px] text-center md:w-[250px] flex items-center top-0">
          <img src="logo2.png" alt="" />
        </div>
        <div className="flex flex-col justify-between h-[560px] pt-2">
          {/* menu */}
          <nav>
            <ul>
              {/* flex para alinear en la misma linea y item-center para centrarl, gap para separarlos entre si */}
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                  <RiDashboardLine className="text-2xl" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/usuarios"
                  className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                  <RiFileUserLine className="text-2xl" />
                  Usuarios
                </Link>
              </li>
              <li>
                <Link
                  href="/permisos"
                  className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                  <RiDoorLockBoxLine className="text-2xl" />
                  Permisos
                </Link>
              </li>
              <li>
                <Link
                  href="/clientes"
                  className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                  <RiFolderUserLine className="text-2xl" />
                  Clientes
                </Link>
              </li>
              <li>
                <Link
                  href="/cobranza"
                  className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                  <RiCashLine className="text-2xl" />
                  Cobranza
                </Link>
              </li>
              <li>
                <button
                  // href="/pedidos"
                  className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors"
                  onClick={toggleDropdown}>
                  <RiArchiveDrawerLine className="text-2xl" />
                  Pedidos
                  <RiArrowDownSLine />
                </button>
                {isOpen && (
                  <div className="absolute pl-8 bg-gray-300 rounded">
                    <ul>
                      <li className="px-4 py-2 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                        <Link href="/">Arcos</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                        <Link href="/">Horizontales</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                        <Link href="/">Neolux</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                        <Link href="/">Roller Shades</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                        <Link href="/">Romana</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
                        <Link href="/">Shutters</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </nav>
          {/* <div className="flex flex-col gap-4">
            <Link
              href=""
              className="flex items-center gap-3 hover:bg-[#7E081A] p-4 text-black hover:text-white rounded-lg transition-colors">
              <RiLogoutBoxLine className="text-2xl" />
              Logout
            </Link>
          </div> */}
        </div>
      </div>
      {/* btn menu movil */}
      <button
        onClick={handleSidebar}
        className="block lg:hidden fixed bottom-4 right-4 bg-[#7C081A] p-2 text-white rounded-full text-2xl z-40">
        {sidebar ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </>
  );
};

export default Sidebar;
