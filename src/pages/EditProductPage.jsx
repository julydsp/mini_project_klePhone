import { useState } from "react";
import SideBar from "../components/sideBar";
import { FiHome, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function EditProductPage() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  return (
    <div className="flex h-full">
      <SideBar />
      <div className="h-screen sm:w-screen sm:px-10 sm:py-5 md:w-screen md:px-10 md:py-5 px-5 py-5 w-screen relative">
        <div className="pt-5">
          <div className="bg-[#D9D9D9] w-9 h-6 rounded-md flex items-center justify-center">
            <FiHome className="text-[#715DEA]" />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-win relative pt-2 sm:pt-3 md:pt-3 ">
            Edit Produk
          </h1>
          <p className="text-[12px] font-win font-light ">
            Edit Produk Anda Disini
          </p>
        </div>

        <form className="flex flex-col gap-3" action="">
          <div className="pt-2">
            <div
              className="w-full border-[1px] min-h-[100px] sm:min-h-[150px] md:min-h-[150px] rounded-md flex justify-center items-center"
              onClick={() => document.querySelector(".input-field").click()}
            >
              <input
                type="file"
                accept="image/*"
                className="input-field hidden"
                onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name);
                  if (files) {
                    setImage(URL.createObjectURL(files[0]));
                  }
                }}
              />
              {image ? (
                <img
                  src={image}
                  className="w-full h-auto md:h-[250px] sm:h-[200px] lg:h-[200px] "
                  alt={fileName}
                />
              ) : (
                <FiCamera className="text-2xl " />
              )}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            <div className="flex gap-2  flex-col w-full sm:w-[50%]">
              <label htmlFor="" className="font-win text-sm font-light">
                Nama
              </label>
              <input
                className="border-[1px] rounded-md px-2 py-2 outline-none"
                placeholder="Masukkan Nama Produk"
                type="text"
              />
            </div>
            <div className="flex gap-2 flex-col w-full sm:w-[50%]">
              <label htmlFor="" className="font-win text-sm font-light">
                Harga
              </label>
              <input
                className="border-[1px] rounded-md px-2 py-2 outline-none"
                placeholder="Masukkan Harga Produk"
                type="number"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-col ">
            <label htmlFor="" className="font-win text-sm font-light">
              Category
            </label>
            <select
              name=""
              id=""
              className="px-2 py-2 rounded-md bg-transparent border-[1px]"
            >
              <option value="" className="font-win text-sm font-light">
                IOS
              </option>
              <option value="" className="font-win text-sm font-light">
                ANDROID
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-win text-sm font-light">
              Deskripsi
            </label>
            <textarea
              className="border-[1px] outline-none h-16 rounded-md w-full px-2 py-1"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </form>
        <div className="flex gap-4 pt-5">
          <button
            type="submit"
            className="bg-[#331FA8] px-2 py-2 w-24 mb-4 rounded-md text-white font-win font-light"
          >
            Kirim
          </button>
          <Link
            to="/productPage"
            className="bg-[#331FA8] px-2 py-2 w-24 mb-4 rounded-md text-white text-center font-win font-light"
          >
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}
