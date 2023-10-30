
import React from "react";
import { Link } from "react-router-dom";

export function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#715EEA]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold font-win text-gray-800 mb-4">
          Login Dulu Sodara!!!
        </h2>
        <p className="text-gray-600 font-win mb-6">
          kamu tidak ada izin untuk mengakses halaman ini, silahkan Login terlebih dahulu
        </p>
        <Link
          to="/loginPage"
          className="bg-[#715EEA] text-white font-win rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300"
        >
          Silahkan Login
        </Link>
      </div>
    </div>
  );
}
