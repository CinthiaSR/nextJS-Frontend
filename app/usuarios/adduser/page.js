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
  email: Yup.string().required("Es requerido *"),
  telefono: Yup.string().required("Es requerido *l"),
  rol: Yup.string().required("Selecciona un rol"),
});

export const Adduser = () => {
  const [dataForm, setDataForm] = useState(initDataForm);

  const data = [
    {
      id: 1,
      nombre: "activo",
      email: "activo",
      rol: "activom",
      permiso: "activo",
    },
    {
      id: 2,
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
        <h2 className="text-xl">Agregar nuevo usuario</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 w-full">
        {/* formulario */}
        <div className="w-full md:w-[100%] lg:w-[100%]">
          {/* <h3 className="text-xl font-medium pl-10">Agregar rol</h3> */}
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-md mx-auto mt-4">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-[80%] px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Nombre del Rol
                </label>
                <div className="relative">
                  <input
                    id="nombre"
                    name="nombre"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nombre}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.nombre && formik.errors.nombre
                        ? "border-2 border-black"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {formik.touched.nombre && formik.errors.nombre && (
                    <span className="text-red-600">{formik.errors.nombre}</span>
                  )}
                </div>
              </div>
              <div className="w-full md:w-[80%] px-3">
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
                        ? "border-2 border-black"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}>
                    <option value="">Selecciona</option>
                    <option value="administrador">Administrador</option>
                    <option value="gerente">Gerente de ventas</option>
                    <option value="ventas">Ventas</option>
                    <option value="supervisor">Supervisor</option>
                  </select>
                  {formik.touched.rol && formik.errors.rol && (
                    <span className="text-red-600">{formik.errors.rol}</span>
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

            <button
              type="submit"
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Guardar
            </button>
          </form>
        </div>
        {/* table */}
        <div className="w-full md:w-[50%] lg:w-[70%]">
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
