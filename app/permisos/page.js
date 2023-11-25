"use client";
import React, {useState} from "react";
import {
  RiDoorLockBoxLine,
  RiKeyLine,
  RiEdit2Line,
  RiDeleteBin6Line,
  RiAddCircleFill,
} from "react-icons/ri";
import Swal from "sweetalert2";

export const Permisos = () => {
  const [openModal, setOpenModal] = useState(false);
  const HandleModal = () => {
    setOpenModal(!openModal);
    console.log("hola modal");
  };

  const data = [
    {
      id: 1,
      nombre: "activo",
      apellidos: "activo",
      email: "activom",
      telefono: "activo",
      rol: "activo",
    },
    {
      id: 2,
      nombre: "activo",
      apellidos: "activo",
      email: "activom",
      telefono: "activo",
      rol: "activo",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-3 p-2 lg:p-6 md:p-4">
        <span>
          <RiDoorLockBoxLine className="text-3xl" />
        </span>
        <h2 className="text-2xl">PERMISOS</h2>
        {/* <button className="flex items-center bg-[#7C081A] p-2 rounded-md text-white gap-3">
          <span>
            <RiAddCircleFill />
          </span>
          Nuevo
        </button> */}
      </div>
      <div className="flex items-center">
        {/* formulario */}
        <div className="p-4 w-[35%]">
          <h3 className="flex items-center text-xl pb-3">Agregar nuevo rol</h3>
          <form>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-[80%] px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Nombre del Rol
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Administrador / Gerente"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-[40%] px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Ver
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state">
                    <option>ON</option>
                    <option>OFF</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[40%] px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Crear
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state">
                    <option>ON</option>
                    <option>OFF</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-[40%] px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  ACTUALIZAR
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state">
                    <option>ON</option>
                    <option>OFF</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[40%] px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  ELIMINAR
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state">
                    <option>ON</option>
                    <option>OFF</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* table */}
        <div className="overflow-x-auto pl-4 pr-8">
          <table className="min-w-full divide-y divide-x divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  #
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Rol
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Ver
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Crear
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Actualizar
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                  Eliminar
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
                  <td className="px-6 py-4 whitespace-no-wrap gap-2 flex items-center border">
                    {/* <button
                    className="p-2 bg-[#17A2B8] rounded-md"
                    onClick={showModal}>
                    <RiKeyLine className="text-white" />
                  </button> */}
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

export default Permisos;
