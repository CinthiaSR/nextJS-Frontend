"use client";
import React from "react";
import {
  RiFolder5Line,
  RiEdit2Line,
  RiDeleteBin6Line,
  RiAddCircleFill,
  RiUserLocationFill,
} from "react-icons/ri";

export const Clientes = () => {
  const data = [
    {
      id: 1,
      nombre: "Beetlejuice",
      direccion: "Sonora",
      ciudad: "Hermosillo",
      telefono: "9298765432",
      email: "beetlejuice@gmail.com",
      status: "Activo",
    },
    {
      id: 2,
      nombre: "Beetlejuice 2",
      direccion: "Sonora 2",
      ciudad: "Hermosillo 2",
      telefono: "9298765432",
      email: "beetlejuice@gmail.com",
      status: "Activo",
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-3 p-2 lg:p-6 md:p-4">
        <span>
          <RiUserLocationFill className="text-3xl" />
        </span>
        <h2 className="text-2xl">CLIENTES</h2>
        <button className="flex items-center bg-[#7C081A] p-2 rounded-md text-white gap-3">
          <span>
            <RiAddCircleFill />
          </span>
          Nuevo
        </button>
      </div>
      {/* table */}
      <div className="overflow-x-auto pl-8 pr-8">
        <table className="min-w-full divide-y divide-x divide-gray-200  ">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                ID
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                Nombre
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                Dirección
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                Ciudad
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                Telefono
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                Email
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
                  {item.direccion}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                  {item.ciudad}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                  {item.telefono}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                  {item.email}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                  {item.status}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap gap-2 flex items-center text-sm border">
                  <button className="p-2 bg-[#17A2B8] rounded-md ">
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
  );
};

export default Clientes;
