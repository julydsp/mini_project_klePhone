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
      <div className="h-screen w-screen px-10 py-5 relative">
        <div className="pt-5">
          <div className="bg-[#D9D9D9] w-9 h-6 rounded-md flex items-center justify-center">
            <FiHome className="text-[#715DEA]" />
          </div>
        </div>
        <h1 className="text-xl font-win relative pt-7 ">Produk</h1>
        <p className="text-[12px] font-win font-light ">
          Keseluruhan Data Produk
        </p>
        <div className="flex justify-between pt-10">
          <div className="flex border items-center rounded-md gap-3 px-3 py-3">
            <FiSearch />
            <input
              type="text"
              className="outline-none"
              placeholder="Search..."
            />
          </div>
          <div className="flex bg-[#331FA8] px-3 py-3 gap-2 items-center rounded-md">
            <a href="">
              <FiPlus className="text-white text-lg" />
            </a>
            <a href="" className="text-white font-win text-sm">
              Menambahkan
            </a>
          </div>
        </div>

        <table className="w-full mt-5">
          <thead className="bg-[#6F6A6A]/10">
            <tr>
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
            <tr className="h-20  border-x-[1px]  border-b-[1px] rounded-b-xl ">
              <td className="text-center text-md font-win font-medium">
                image
              </td>
              <td className="text-center text-md font-win font-medium">
                iphone xs
              </td>
              <td className="text-center text-md font-win font-medium">
                4.000.000
              </td>
              <td className="text-center text-md font-win font-medium">IOS</td>
              <td className="text-center text-md font-win font-medium">
                <ul className="flex justify-around items-center">
                  <li className="px-3 py-3 border border-black rounded-full border-solid">
                    <a href="">
                      <FiEdit2 className="text-xl" />
                    </a>
                  </li>
                  <li className="px-3 py-3 border border-black rounded-full border-solid">
                    <a href="">
                      <FiEye className="text-xl" />
                    </a>
                  </li>
                  <li className="px-3 py-3 border border-black  rounded-full border-solid">
                    <a href="">
                      <FiTrash className="text-xl" />
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="h-20 border-x-[1px] border-b-[1px] rounded-b-2xl ">
              <td className="text-center text-md font-win font-medium">
                image
              </td>
              <td className="text-center text-md font-win font-medium">
                iphone xs
              </td>
              <td className="text-center text-md font-win font-medium">
                4.000.000
              </td>
              <td className="text-center text-md font-win font-medium">IOS</td>
              <td className="text-center text-md font-win font-medium">
                <ul className="flex justify-around items-center">
                  <li className="px-3 py-3 border border-black rounded-full border-solid">
                    <a href="">
                      <FiEdit2 className="text-xl" />
                    </a>
                  </li>
                  <li className="px-3 py-3 border border-black rounded-full border-solid">
                    <a href="">
                      <FiEye className="text-xl" />
                    </a>
                  </li>
                  <li className="px-3 py-3 border border-black  rounded-full border-solid">
                    <a href="">
                      <FiTrash className="text-xl" />
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
