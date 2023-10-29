import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/sideBar";
import {
  FiHome,
  FiSearch,
  FiPlus,
  FiEdit2,
  FiEye,
  FiTrash,
  FiX,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import ModalDetailProduct from "../components/modalDetailProduct";
import { APIProduct } from "../configs/apis/productAPI";

export default function ProductPage() {
  const [isModal, setIsModal] = useState(false);
  const [product, setProduct] = useState([]);
  const [selectProduct, setSelectProduct] = useState(null)
  const navigate = useNavigate();

  const [searchField, setSearchField] = useState("");

   const filteredProduct = product.filter((product) => {
     return (
       product.productName.toLowerCase().includes(searchField.toLowerCase()) ||
       product.category.toLowerCase().includes(searchField.toLowerCase()) 
     );
   });

   const handleChangeSearch = (e) => {
     setSearchField(e.target.value);
   };


  const handleDetailClick = (product) => {
    setSelectProduct(product);
    setIsModal(true);
  }

  useEffect(() => {
    APIProduct.getProducts().then(setProduct);
  }, []);
  return (
    <div className="flex h-[100vh] overflow-y-hidden flex-grow">
      <SideBar />
      <div className="sm:w-screen sm:px-10 sm:py-5 md:w-screen md:px-10 md:py-5 px-5 py-5 w-full relative">
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
              value={searchField}
              onChange={handleChangeSearch}
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
        <div className="overflow-x-scroll pt-5  w-full">
          <table className="w-full mt-5 rounded-md">
            <thead className="bg-[#6F6A6A]/10">
              <tr className="rounded-xl">
                <th className="font-medium opacity-70 text-sm font-win w-20 px-3 py-3">
                  GAMBAR
                </th>
                <th className="font-medium opacity-70 text-sm font-win w-40 px-3 py-3 ">
                  NAMA
                </th>
                <th className="font-medium opacity-70 text-sm font-win w-20 px-3 py-3 ">
                  HARGA
                </th>
                <th className="font-medium opacity-70 text-sm font-win w-20 px-3 py-3 ">
                  STOK
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
              {filteredProduct &&
                filteredProduct.map((product) => (
                  <tr
                    key={product.id}
                    className="h-20  border-x-[1px]   border-b-[1px] rounded-b-xl "
                  >
                    <td className="text-center text-md font-win font-medium">
                      <img src={product.image} alt="" />
                    </td>
                    <td className="text-center text-md font-win font-medium">
                      {product.productName}
                    </td>
                    <td className="text-center text-md font-win font-medium">
                      {product.price}
                    </td>
                    <td className="text-center text-md font-win font-medium">
                      {product.stok}
                    </td>
                    <td className="text-center text-md font-win font-medium">
                      {product.category}
                    </td>
                    <td className="text-center text-md font-win font-medium">
                      <ul className="flex justify-around items-center">
                        <Link
                          to={`/editProductPage/${product.id}`}
                          className="px-3 py-3 border border-black rounded-full border-solid"
                        >
                          <FiEdit2 className="text-xl" />
                        </Link>
                        <div
                          onClick={() => handleDetailClick(product)}
                          className="px-3 py-3 border border-black cursor-pointer rounded-full border-solid"
                        >
                          <FiEye className="text-xl" />
                        </div>
                        <a
                          onClick={() =>
                            APIProduct.deleteProduct(product.id).then(() =>
                              location.reload()
                            )
                          }
                          className="px-3 py-3 border border-black  rounded-full border-solid"
                        >
                          <FiTrash className="text-xl" />
                        </a>
                      </ul>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModal && (
        <div
          onClick={() => setIsModal(!isModal)}
          className="z-10 w-full left-0 flex justify-center items-center top-0 h-full absolute bg-gray-600/80"
        >
          <div className=" z-10 top-0 flex justify-center items-center fixed h-full">
            <div className=" flex items-start justify-center duration-500">
              <ModalDetailProduct product={selectProduct} />
              <FiX
                onClick={() => setIsModal(!isModal)}
                className="text-3xl text-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
