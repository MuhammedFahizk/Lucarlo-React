import { LuMenuSquare } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

import Link from "./Link";
import { useState, useContext } from "react";
import CartItemsPage from "./CartItems";
import { useSelector } from "react-redux";
import { AppContext } from "../AppContext";
interface Props {
  value: number;
}
const Nav = ({ value }: Props) => {
  const { CartItems } = useSelector(state => state.cart);
  
  const data = useContext(AppContext);
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isCartOpen, setCart] = useState(false);
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Store", href: "/store" },
    { label: "About", href: "/about" },
  ];
  return (
    <main>
      <nav
        className="flex items-center justify-between p-6 lg:px-24"
        aria-label="Global "
      >
        <section className="flex lg:flex-1 ">
          <LuMenuSquare
            className="text-3xl cursor-pointer lg:hidden"
            onClick={() => setMenu(true)}
          />
          <Link
            href={"/"}
            className="text-xl text-black-500 font-bold items-center"
          >
            LUCARLO.
          </Link>
        </section>
        <section className="hidden lg:flex lg:gap-x-12 justify-center ">
          <div className="flex gap-8 items-center ">
            {navLinks.map((d, i) => (
              <div key={i}>
                <Link
                  href={d.href}
                  className="text-black-400 text-sm hover:text-black lg:block"
                >
                  {d.label}
                </Link>
                {i === value && <hr className="w-9 h-0.5 bg-red-500 my-0 " />}
              </div>
            ))}
          </div>
        </section>

        <div
          className={`fixed h-full w-screen lg:hidden bg-black/50  top-0 right-0 transition-transform duration-300 transform ${
            isSideMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <section className="flex text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56">
            <IoMdClose
              onClick={() => setMenu(false)}
              className="mt-0  text-5xl cursor-pointer"
            />
            {navLinks.map((d, i) => (
              <Link key={i} href={d.href} className="text-black font-bold">
                {d.label}
              </Link>
            ))}
          </section>
        </div>
        <div
          className={`fixed h-full w-screen  bg-black/50  top-0 left-0 transition-transform duration-700 transform ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <section className="flex text-black bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-4/8 overflow-x-auto j  ">
            <div>
              <IoMdClose
                onClick={() => setCart(false)}
                className="m-5  text-5xl cursor-pointer"
              />
            </div>

            <CartItemsPage />
          </section>
        </div>
        <section className=" flex flex-1 justify-end gap-4">
          <button
            type="button"
            className=" items-center   text-sm font-medium text-center text-white "
          >
            <div className="flex items-center">
              <svg
                onClick={() => setCart(true)}
                className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                />
              </svg>
              <span className="inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full ml-1">
                {CartItems.length}
              </span>
            </div>
          </button>

          <img
            width={40}
            className="w-8 h-8 rounded-full"
            src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          />
        </section>
      </nav>
    </main>
  );
};

export default Nav;
