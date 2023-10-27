import SideBar from "../components/sideBar";
import { FiHome } from "react-icons/fi";

export default function HomePage() {
  return (
    <div className="flex h-screen overflow-y-hidden flex-grow">
      <SideBar />
      <div className="h-full max-w-screen-sm p-7 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl relative">
        <div className="pt-5">
          <div className="bg-[#D9D9D9] w-9 h-6 rounded-md flex items-center justify-center">
            <FiHome className="text-[#715DEA]" />
          </div>
        </div>
        <h1 className="text-xl font-win relative pt-7 ">Dashboard</h1>
        <p className="text-[12px] font-win font-light ">
          Monitoring Data Produk
        </p>

        <div className="flex gap-8 md:flex-nowrap flex-wrap justify-center">
          <div className=" rounded-md w-[448px] h-[188px] px-10 py-5 drop-shadow-lg shadow-xl">
            <h1 className="font-win text-sm pt-3">Total Produk</h1>
            <h1 className="font-win font-bold  text-lg pt-14">150</h1>
          </div>
          <div className=" rounded-md w-[448px] h-[188px] px-10 py-5 drop-shadow-lg shadow-xl">
            <h1 className="font-win text-sm pt-3">Total Produk</h1>
            <h1 className="font-win font-bold  text-lg pt-14">150</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
