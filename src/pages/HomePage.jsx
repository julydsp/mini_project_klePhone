import SideBar from "../components/sideBar";
import { FiHome } from "react-icons/fi";
import { APIProduct } from "../configs/apis/productAPI";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function HomePage() {
  const [product, setProduct] = useState([]);
  const [stokProduct, setStokProduct] = useState([]);
  useEffect(() => {
    APIProduct.sumProducts().then(setProduct);
    APIProduct.sumStokProducts().then(setStokProduct);
  }, []);


  return (
    <div className="flex h-[100vh] flex-grow">
      <SideBar />
      <div className="sm:w-screen sm:px-10 sm:py-5 md:w-screen md:px-10 md:py-5 px-5 py-5 w-full relative overflow-y-scroll">
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
          <div className=" rounded-md w-[448px] h-[188px] px-10 py-5 drop-shadow-lg shadow-xl hover:translate-x-0.5 hover:-translate-y-2.5 hover:shadow-2xl">
            <h1 className="font-win text-sm font-medium pt-3">
              Total Pendapatan Produk
            </h1>
            <h1 className="font-win font-semiBold  text-lg pt-14">
           Rp. <CountUp start={0} end={product} duration={2} delay={0}/>
            </h1>
          </div>
          <div className=" rounded-md w-[448px] h-[188px] px-10 py-5 drop-shadow-lg shadow-xl hover:translate-x-0.5 hover:-translate-y-2.5 hover:shadow-2xl">
            <h1 className="font-win text-sm font-medium pt-3">Stok Produk</h1>
            <h1 className="font-win font-semiBold  text-lg pt-14">
              <CountUp start={0} end={stokProduct} duration={2} delay={0}/>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
