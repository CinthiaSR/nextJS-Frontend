"use client";
import React, {useState} from "react";
import {
  RiFileUserLine,
  RiKeyLine,
  RiEdit2Line,
  RiDeleteBin6Line,
  RiAddCircleFill,
} from "react-icons/ri";
import {useFormik} from "formik";
import * as Yup from "yup";
const initDataForm = {
  nombre: "",
  apellidos: "",
  email: "",
  telefono: "",
  rol: "",
  status: "",
};

const validationForm = Yup.object({
  nombre: Yup.string().required("Es requerido *"),
  apellidos: Yup.string().required("Es requerido *"),
  email: Yup.string().required("Email requerido *"),
  telefono: Yup.string().required("Telefono requerido *"),
  rol: Yup.string().required("Selecciona un rol"),
});

export const Adduser = () => {
  const [dataForm, setDataForm] = useState(initDataForm);

  const data = [
    {
      id: 1,
      nombre: "Pablo",
      email: "administracion@vertivision.com",
      rol: "Administrador",
      permiso: "Todos",
    },
    {
      id: 2,
      nombre: "activo",
      email: "activo",
      rol: "activom",
      permiso: "activo",
    },
    {
      id: 3,
      nombre: "Pablo",
      email: "administracion@vertivision.com",
      rol: "Administrador",
      permiso: "Todos",
    },
    {
      id: 4,
      nombre: "activo",
      email: "activo",
      rol: "activom",
      permiso: "activo",
    },
    {
      id: 5,
      nombre: "activo",
      email: "activo",
      rol: "activom",
      permiso: "activo",
    },
    {
      id: 6,
      nombre: "Pablo",
      email: "administracion@vertivision.com",
      rol: "Administrador",
      permiso: "Todos",
    },
    {
      id: 7,
      nombre: "activo",
      email: "activo",
      rol: "activom",
      permiso: "activo",
    },
    {
      id: 8,
      nombre: "activo",
      email: "activo",
      rol: "activom",
      permiso: "activo",
    },
    {
      id: 9,
      nombre: "Pablo",
      email: "administracion@vertivision.com",
      rol: "Administrador",
      permiso: "Todos",
    },
    {
      id: 10,
      nombre: "activo",
      email: "activo",
      rol: "activom",
      permiso: "activo",
    },
  ];

  const formik = useFormik({
    initialValues: dataForm,
    validationSchema: validationForm,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <div>
      <div className="flex items-center gap-2 p-2  lg:p-4 md:p-4 bg-gray-200">
        <span>
          <RiFileUserLine className="text-3xl" />
        </span>
        <h2 className="text-xl">Usuarios </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-3 w-full bg-red-300">
        {/* formulario */}
        <div className="w-full md:w-[100%] lg:w-[30%] pb-8 bg-gray-100 rounded-md shadow-md shadow-slate-500">
          <div className="w-full p-2 rounded-t">
            <h3 className="text-lg font-semibold">Agregar nuevo usuario</h3>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-md mx-auto mt-4">
            <div className="flex flex-wrap mb-3">
              {/* nombre/apellidos */}
              <div className="w-full md:w-[100%] px-3 flex items-center gap-3 mb-2">
                <div className="relative">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nombre}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.nombre && formik.errors.nombre
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {formik.touched.nombre && formik.errors.nombre && (
                    <span className="text-red-600 text-xs">
                      {formik.errors.nombre}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Apellido
                  </label>
                  <input
                    id="apellidos"
                    name="apellidos"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.apellidos}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.apellidos && formik.errors.apellidos
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {formik.touched.apellidos && formik.errors.apellidos && (
                    <span className="text-red-600 text-xs">
                      {formik.errors.apellidos}
                    </span>
                  )}
                </div>
              </div>
              {/* email/telefono */}
              <div className="w-full md:w-[100%] px-3 flex items-center gap-3 mb-2">
                <div className="relative">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.email && formik.errors.email
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="text-red-600 text-xs">
                      {formik.errors.email}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Telefono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.telefono}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.telefono && formik.errors.telefono
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {formik.touched.telefono && formik.errors.telefono && (
                    <span className="text-red-600 text-xs">
                      {formik.errors.telefono}
                    </span>
                  )}
                </div>
              </div>
              {/* Rol */}
              <div className="w-full md:w-[100%] px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Nombre del Rol
                </label>
                <div className="relative">
                  <select
                    id="rol"
                    name="rol"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.rol}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.rol && formik.errors.rol
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}>
                    <option value="">Selecciona</option>
                    <option value="administrador">Administrador</option>
                    <option value="gerente">Gerente de ventas</option>
                    <option value="ventas">Ventas</option>
                    <option value="supervisor">Supervisor</option>
                  </select>
                  {formik.touched.rol && formik.errors.rol && (
                    <span className="text-red-600 text-xs">
                      {formik.errors.rol}
                    </span>
                  )}
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
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Guardar
              </button>
            </div>
          </form>
        </div>
        {/* table */}
        <div className="w-full md:w-[100%] lg:w-[70%] p-2 bg-slate-500">
          <h1 className="text-xl">Lista de roles y permisos asignados</h1>
          <div className="overflow-x-auto pt-10 pb-10 pr-10">
            <table className="min-w-full divide-y divide-x divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                    #
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                    Nombre
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                    Email
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                    Rol
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider border">
                    Permisos
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
                      {item.email}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                      {item.rol}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm border">
                      {item.permiso}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap gap-2 flex items-center border">
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
    </div>
  );
};

export default Adduser;
