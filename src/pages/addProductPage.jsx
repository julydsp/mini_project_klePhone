import { useState } from "react";
import SideBar from "../components/sideBar";
import { FiHome, FiCamera } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { APIProduct } from "../configs/apis/productAPI";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../configs/firebase";
import { v4 } from "uuid";

export default function AddProductPage() {
  const [product, setProduct] = useState({
    productName: "",
    image: null,
    price: "",
    category: "",
    description: "",
  });

  const [uploadImage, setUploadImage] = useState(null);
  const navigate = useNavigate();

  const handleInputProductName = (e) => {
    const NewProductName = e.target.value;
    setProduct((prevData) => ({
      ...prevData,
      productName: NewProductName,
    }));
  };

  const handleInputImage = (e) => {
    const newOnImageChange = e.target.files[0];
    setProduct((prevData) => ({
      ...prevData,
      image: URL.createObjectURL(newOnImageChange),
    }));
    setUploadImage(newOnImageChange);
  };

  const handleInputPrice = (e) => {
    const newPrice = parseInt(e.target.value);
    setProduct((prevData) => ({
      ...prevData,
      price: newPrice,
    }));
  };

  const optionsCategory = [
    { value: "", label: "Choose..." },
    { value: "1", label: "IOS" },
    { value: "2", label: "ANDROID" },
  ];

  const handleInputCategory = (e) => {
    const newInputCategory = e.target.value;
    setProduct((prevData) => ({
      ...prevData,
      category: newInputCategory,
    }));
  };

  const handleInputDescription = (e) => {
    const newDescription = e.target.value;
    setProduct((prevData) => ({
      ...prevData,
      description: newDescription,
    }));
  };

  const handleSubmit = async (e) => {
    console.log(product);
    e.preventDefault();
    if (product.image !== null) {
      const imageRef = ref(storage, `imagesProduct/${uploadImage.name + v4()}`);
      const uploadTask = uploadBytes(imageRef, uploadImage);

      await uploadTask;

      const downloadURL = await getDownloadURL(imageRef);

      const productWithDownloadURL = {
        ...product,
        image: downloadURL,
      };
      try {
        await APIProduct.addProduct(productWithDownloadURL);
        alert("add product successful");
        setProduct((prevData) => ({
          ...prevData,
          productName: "",
          image: null,
          category: "",
          price: "",
          description: "",
        }));
        navigate("/productPage");
      } catch (error) {
        alert("ada Kesalahan Saat Menambah Data");
      }
    } else {
      alert("gambar Harus Ada");
      setProduct((prevData) => ({
        ...prevData,
        productName: "",
        image: null,
        category: "",
        price: "",
        description: "",
      }));
    }
  };
  return (
    <div className="flex h-full overflow-y-hidden flex-grow">
      <SideBar />
      <div className="sm:w-screen sm:px-10 sm:py-5 md:w-screen md:px-10 md:py-5 px-5 py-5 w-screen relative">
        <div className="pt-5">
          <div className="bg-[#D9D9D9] w-9 h-6 rounded-md flex items-center justify-center">
            <FiHome className="text-[#715DEA]" />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-win relative pt-2 sm:pt-3 md:pt-3 ">
            Tambahkan Produk
          </h1>
          <p className="text-[12px] font-win font-light ">
            Tambahkan Produk Anda Disini
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3" action="">
          <div className="pt-2">
            <div
              className="w-full border-[1px] min-h-[100px] sm:min-h-[150px] md:min-h-[150px] rounded-md flex justify-center items-center"
              onClick={() => document.querySelector(".input-field").click()}
            >
              <input
                type="file"
                accept="image/*"
                className="input-field hidden"
                onChange={handleInputImage}
              />
              {product.image ? (
                <img
                  src={product.image}
                  className="w-full h-auto md:h-[250px] sm:h-[200px] lg:h-[200px] "
                  alt=""
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
                value={product.productName}
                onChange={handleInputProductName}
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
                value={product.price}
                onChange={handleInputPrice}
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
              onChange={handleInputCategory}
            >
              {optionsCategory.map((option) => {
                return (
                  <option
                    key={option.value}
                    className="font-win text-sm font-light"
                    value={option.label}
                  >
                    {option.label}
                  </option>
                );
              })}
              ;
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
              value={product.description}
              onChange={handleInputDescription}
            ></textarea>
          </div>
          <div className="flex gap-4 pt-5">
            <button
              type="submit"
              className="bg-[#331FA8] px-2 py-2 w-24 mb-4 rounded-md text-white font-win font-light"
            >
              Kirim
            </button>
            <Link
              to="/productPage"
              className="bg-[#331FA8] px-2 py-2 w-24 mb-4 rounded-md text-center text-white font-win font-light"
            >
              Kembali
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
