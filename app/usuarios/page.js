"use client";
import {
  RiFileUserLine,
  RiFolder5Line,
  RiEdit2Line,
  RiDeleteBin6Line,
} from "react-icons/ri";
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
      <div className="flex items-center gap-3 p-2 lg:p-6 ">
        <span>
          <RiFileUserLine className="text-2xl" />
        </span>
        <h2 className="text-2xl">Usuarios</h2>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Nombres
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Apellidos
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Telefono
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Rol
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Estatus
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{item.nombre}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item.apellidos}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item.telefono}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{item.rol}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{item.status}</td>
                <td className="px-6 py-4 whitespace-no-wrap gap-2 flex items-center">
                  <button className="p-2 bg-[#17A2B8] rounded-md">
                    <RiFolder5Line className="text-white" />
                  </button>
                  <button className="p-2 bg-green-400 rounded-md">
                    <RiEdit2Line className="text-white" />
                  </button>
                  <button className="p-2 bg-red-500 rounded-md">
                    <RiDeleteBin6Line className="text-white" />
                    hola
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usuarios;
