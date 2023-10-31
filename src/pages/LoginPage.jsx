import React, { useState } from "react";
import { APIAuth } from "../configs/apis/authAPI";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMesage, setErrorMessage] = useState(false);

  const handleChangeEmail = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  const handleChangePassword = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      await APIAuth.signInWithCredentials({
        email: user.email,
        password: user.password,
      });
      alert("Berhasil Login");
      navigate("/");
    } catch (error) {
      setErrorMessage(true);
    }
  };

  return (
    <div className="bg-[#715EEA] bg-cover h-screen flex justify-center flex-col gap-7 items-center">
      <label className="text-white font-win font-light">
        Selamat datang di <span className="font-logo">KlePhone.</span>
      </label>
      <div className="w-60 md:w-80 lg:w-96 flex flex-col items-center shadow-2xl bg-white h-auto gap-4 px-2 py-7 rounded-xl">
        <h1 className="text-gray-950  text-sm md:text-xl font-bold font-win text-center">
          Masuk
        </h1>
        <form
          onSubmit={signIn}
          className="w-full md:w-64 lg:w-80  flex flex-col items-center gap-5 justify-center"
        >
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-win font-light">Email</label>
              <input
                type="email"
                className="border-solid border-b-[1px] outline-none border-gray-800 placeholder:text-sm"
                placeholder="Masukkan Email Anda"
                value={user.email}
                onChange={handleChangeEmail}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-win font-light">Password</label>
              <input
                type="password"
                className="border-solid border-b-[1px] placeholder:text-sm outline-none border-gray-800"
                placeholder="Masukkan Password Anda"
                value={user.password}
                onChange={handleChangePassword}
              />
            </div>
            {errorMesage && (
              <p className="text-red-600 text-[10px] font-win font-bold">
                email atau password salah !!!
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#331FA8] px-2 py-2 w-24  rounded-md text-white font-win font-light"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};
