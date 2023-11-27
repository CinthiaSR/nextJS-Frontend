"use client";
import {
  RiFileUserLine,
  RiFolder5Line,
  RiEdit2Line,
  RiDeleteBin6Line,
  RiAddCircleFill,
} from "react-icons/ri";
import Link from "next/link";
export const Usuarios = () => {
  const data = [
    {
      id: 1,
      nombre: "Beetlejuice",
      apellidos: "Beetlejuice Apellidos",
      email: "Beetlejuice@beetlejuice.com",
      telefono: "9298765432",
      rol: "Admin",
      status: "Activo",
    },
    {
      id: 2,
      nombre: "Beetlejuice",
      apellidos: "Beetlejuice Apellidos",
      email: "Beetlejuice@beetlejuice.com",
      telefono: "9298765432",
      rol: "Admin",
      status: "Activo",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-3  lg:p-6 md:p-4 bg-gray-200">
        <span>
          <RiFileUserLine className="text-3xl" />
        </span>
        <h2 className="text-xl">USUARIOS</h2>
        <Link
          href="/usuarios/adduser"
          className="flex items-center bg-[#7C081A] p-2 rounded-md text-white gap-3">
          <span>
            <RiAddCircleFill />
          </span>
          Nuevo
        </Link>
      </div>
      <div>
        {/* table */}
        <div className="overflow-x-auto pl-8 pr-8">
          <table className="min-w-full divide-y divide-x divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  ID
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Nombre
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Apellidos
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Email
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Telefono
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Rol
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Estatus
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                    {item.nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                    {item.apellidos}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                    {item.email}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                    {item.telefono}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                    {item.rol}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                    {item.status}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap gap-2 flex items-center border">
                    <button className="p-2 bg-[#17A2B8] rounded-md">
                      <RiFolder5Line className="text-white" />
                    </button>
                    <button className="p-2 bg-green-400 rounded-md">
                      <RiEdit2Line className="text-white" />
                    </button>
                    <button className="p-2 bg-red-500 rounded-md">
                      <RiDeleteBin6Line className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
