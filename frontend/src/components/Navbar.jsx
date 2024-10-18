import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import {
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/orders",
  },
  {
    name: "Cart",
    href: "/cart",
  },
  {
    name: "Check Out",
    href: "/checkout",
  },
];

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentuser = true;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 ">
      <nav className="flex justify-between items-center ">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          <div className="relative w-40 sm:w-72 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              name=""
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
              id=""
              placeholder="Search here... "
            />
          </div>
        </div>
        <div className="relative flex items-center md:space-x-3 space-x-2 ">
          <div>
            {currentuser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full ${
                      currentuser ? "ring-2 ring-blue-500" : ""
                    } `}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 shadow-lg rounded-md z-40 bg-white">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Link
                            className="block px-4 py-2 text-sm hover:bg-grey"
                            to={item.href}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary flex items-center rounded-sm p-1 sm:px-6 px-2"
          >
            <HiOutlineShoppingCart />
            <span className="text-sm font-semibold sm:ml-1 ">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
