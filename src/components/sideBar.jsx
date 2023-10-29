import { useState } from "react";
import {
  FiMenu,
  FiSmartphone,
  FiPackage,
  FiHome,
  FiLogOut,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { authService } from "../configs/auth/auth";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div
        className={` ${
          !isOpen ? "w-64  lg:w-72 md:z-0 md:relative" : "w-22 relative"
        } duration-500 h-[100vh] bg-[#715EEA] px-4 absolute z-40 pt-7`}
      >
        <div className="bg-[#331FA8] w-9 h-9 z-50 -right-[17px] cursor-pointer top-7 flex justify-center items-center rounded-md absolute">
          <FiMenu
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl z-20"
          />
        </div>
        <div
          className={`${
            !isOpen
              ? "flex justify-start  px-3 py-1 gap-4"
              : "flex items-center  justify-center px-3 py-1"
          }`}
        >
          <FiSmartphone className="cursor-pointer duration-500 text-[#331FA8] text-3xl" />
          <h1
            className={`${
              isOpen && "scale-0 h-0 w-0"
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
                !isOpen ? "flex justify-start gap-4" : "flex  justify-center"
              } hover:bg-[#331FA8] items-center px-3 py-1 rounded-md`}
            >
              <FiHome className="text-white text-3xl" />
              <li
                className={`${
                  isOpen && "scale-0 h-0 w-0"
                } duration-500 text-white font-win text-sm font-light flex`}
              >
                Home
              </li>
            </Link>

            <Link
              to="/productPage"
              className={`${
                !isOpen ? "flex justify-start gap-4" : "flex  justify-center"
              } hover:bg-[#331FA8] items-center px-3 py-1 rounded-md`}
            >
              <FiPackage className="text-white text-3xl" />
              <li
                className={`${
                  isOpen && "scale-0 h-0 w-0"
                } duration-500 text-white font-win text-sm font-light flex`}
              >
                Produk
              </li>
            </Link>
            <Link
              onClick={() => authService.logOut()}
              className={`${
                !isOpen ? "flex justify-start gap-4" : "flex  justify-center"
              } hover:bg-[#331FA8] items-center px-3 py-1 rounded-md`}
            >
              <FiLogOut className="text-white text-3xl" />
              <li
                className={`${
                  isOpen && "scale-0 h-0 w-0"
                } duration-500 text-white font-win text-sm font-light flex`}
              >
                Log Out
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
