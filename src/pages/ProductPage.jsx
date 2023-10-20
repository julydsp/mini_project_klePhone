import { Link, NavLink } from "react-router-dom";
import SideBar from "../components/sideBar";
import {
  FiHome,
  FiSearch,
  FiPlus,
  FiEdit2,
  FiEye,
  FiTrash,
} from "react-icons/fi";

export default function ProductPage() {
  return (
    <div className="flex">
      <SideBar />
      <div className="h-screen sm:w-screen sm:px-10 sm:py-5 md:w-screen md:px-10 md:py-5 px-5 py-5 w-screen relative">
        <div className="pt-5">
          <div className="bg-[#D9D9D9] w-9 h-6 rounded-md flex items-center justify-center">
            <FiHome className="text-[#715DEA]" />
          </div>
        </div>
        <h1 className="text-xl font-win relative pt-7 ">Produk</h1>
        <p className="text-[12px] font-win font-light ">
          Keseluruhan Data Produk
        </p>
        <div className="flex  flex-wrap gap-2 justify-between pt-10 w-full">
          <div className="flex border items-center rounded-md gap-3 px-3 py-3">
            <FiSearch />
            <input
              type="text"
              className="outline-none"
              placeholder="Search..."
            />
          </div>

          <Link
            to="/addProductPage"
            className="text-white flex justify-center items-center font-win text-sm bg-[#331FA8] px-14 py-3 gap-2 rounded-md"
          >
            <FiPlus className="text-white text-lg" />
            Menambahkan
          </Link>
        </div>
        <div className="overflow-x-scroll pt-5  sm:w-full">
          <table className="w-full mt-5 overflow-x-scroll">
            <thead className="bg-[#6F6A6A]/10">
              <tr className="">
                <th className="font-medium opacity-70 text-sm font-win w-20 px-3 py-3">
                  GAMBAR
                </th>
                <th className="font-medium opacity-70 text-sm font-win w-40 px-3 py-3 ">
                  NAMA
                </th>
                <th className="font-medium opacity-70 text-sm font-win w-20 px-3 py-3 ">
                  HARGA
                </th>
                <th className="font-medium opacity-70 text-sm font-win px-3 py-3 ">
                  KATEGORI
                </th>
                <th className="font-medium opacity-70 text-sm font-win px-3 py-3 ">
                  TINDAKAN
                </th>
              </tr>
            </thead>
            <tbody className="rounded-b-lg ">
              <tr className="h-20  border-x-[1px]   border-b-[1px] rounded-b-xl ">
                <td className="text-center text-md font-win font-medium">
                  image
                </td>
                <td className="text-center text-md font-win font-medium">
                  iphone xs
                </td>
                <td className="text-center text-md font-win font-medium">
                  4.000.000
                </td>
                <td className="text-center text-md font-win font-medium">
                  IOS
                </td>
                <td className="text-center text-md font-win font-medium">
                  <ul className="flex justify-around items-center">
                    <Link
                      to="/editProductPage"
                      className="px-3 py-3 border border-black rounded-full border-solid"
                    >
                      <FiEdit2 className="text-xl" />
                    </Link>
                      <Link
                      to="/detailProduct"
                        className="px-3 py-3 border border-black rounded-full border-solid"
                      >
                        <FiEye className="text-xl" />
                      </Link>
                      <a href="" 
                      className="px-3 py-3 border border-black  rounded-full border-solid">
                        <FiTrash className="text-xl" />
                      </a>
                  </ul>
                </td>
              </tr>
              <tr className="h-20  border-x-[1px]   border-b-[1px] rounded-b-xl ">
                <td className="text-center text-md font-win font-medium">
                  image
                </td>
                <td className="text-center text-md font-win font-medium">
                  iphone xs
                </td>
                <td className="text-center text-md font-win font-medium">
                  4.000.000
                </td>
                <td className="text-center text-md font-win font-medium">
                  IOS
                </td>
                <td className="text-center text-md font-win font-medium">
                  <ul className="flex justify-around items-center">
                    <Link
                      to="/editProductPage"
                      className="px-3 py-3 border border-black rounded-full border-solid"
                    >
                      <FiEdit2 className="text-xl" />
                    </Link>
                      <Link
                      to="/detailProduct"
                        className="px-3 py-3 border border-black rounded-full border-solid"
                      >
                        <FiEye className="text-xl" />
                      </Link>
                      <a href="" 
                      className="px-3 py-3 border border-black  rounded-full border-solid">
                        <FiTrash className="text-xl" />
                      </a>
                  </ul>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
