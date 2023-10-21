import { useState } from "react";
import { FiMenu, FiSmartphone, FiPackage, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={` ${
          isOpen ? "w-64 lg:w-72 md:z-0 md:relative" : "w-24 relative"
        } duration-500 h-screen bg-[#715EEA] p-1 absolute z-40 pt-8`}
      >
        <div className="bg-[#331FA8] w-9 h-9 z-40 -right-3 cursor-pointer top-7 flex justify-center items-center  rounded-md absolute">
          <FiMenu
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          />
        </div>
        <div
          className={`${
            !isOpen && "justify-center flex-wrap px-0 gap-0"
          } flex items-center gap-4 justify-start px-3 py-1 `}
        >
          <FiSmartphone className="cursor-pointer duration-500 text-[#331FA8] text-3xl" />
          <h1
            className={`${
              !isOpen && "scale-0 h-0 w-0"
            } duration-500 font-logo origin-left text-white font-medium text-lg`}
          >
            KlePhone.
          </h1>
        </div>

        <div className="pt-6 ">
          <ul className="flex flex-col gap-3">
            <Link
              to="/"
              className={`${
                !isOpen && "justify-center px-0 gap-0"
              }  hover:bg-[#331FA8] py-1  px-3 flex justify-start items-center  gap-4 rounded-md `}
            >
              <FiHome className="text-white text-3xl" />
              <li
                className={`${
                  !isOpen && "scale-0 h-0 w-0"
                } duration-500 text-white font-win text-sm font-light flex`}
              >
                Home
              </li>
            </Link>

            <Link
              to="/productPage"
              className={`${
                !isOpen && "justify-center px-0 gap-0"
              }  hover:bg-[#331FA8] py-1  px-3 flex justify-start items-center  gap-4 rounded-md `}
            >
              <FiPackage className="text-white text-3xl" />
              <li
                className={`${
                  !isOpen && "scale-0 h-0 w-0"
                } duration-500 text-white font-win text-sm font-light flex`}
              >
                Produk
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
