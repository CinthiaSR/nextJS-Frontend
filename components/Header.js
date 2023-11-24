import React from "react";

export const Header = () => {
  return (
    <>
      <header className="bg-[#7C081A] flex flex-col md:flex-row items-center p-4 lg:pl-8 w-full overflow-y-scroll pt-6">
        {/* notifications */}
        <div>
          <h2 className="text-white font-semibold">Bienvenido</h2>
        </div>
        <nav className="w-full md:w-[50%] lg:w-[100%] flex justify-center md:justify-end">
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="#"
                className="flex items-center gap-1 text-white font-semibold pr-2 text-sm">
                Cinthia Sanchez
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
