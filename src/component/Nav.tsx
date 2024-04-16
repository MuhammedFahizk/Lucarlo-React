import { LuMenuSquare } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import Link from "./Link";
import { useState } from "react";
const Nav = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Store", href: "#" },
    { label: "About", href: "#" },

    
  ];
  return (
    <main>
      <nav className="flex items-center justify-between p-6 lg:px-24" aria-label="Global ">
        <section className="flex lg:flex-1 ">
          <LuMenuSquare className="text-3xl cursor-pointer lg:hidden" onClick={() => setMenu(true)} />
          <Link href={"/"} className="text-xl text-black-500 font-bold items-center">
            LUCARLO.
          </Link>
        </section>
        <section className="hidden lg:flex lg:gap-x-12 justify-center ">

         

          <div className="flex gap-8 items-center ">
          {navLinks.map((d, i) => (
  <div key={i}>
    <Link href={d.href} className="text-black-400 text-sm hover:text-black lg:block">
      {d.label}
    </Link>
    {i === 0 && <hr className="w-9 h-0.5 bg-red-500 my-0 " />}
  </div>
))}

          </div>
        </section>

        <div className={`fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-transform duration-300 transform ${isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <section className="flex text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56">
            <IoMdClose onClick={() => setMenu(false)} className="mt-0  text-5xl cursor-pointer" />
            {navLinks.map((d, i) => (
              <Link key={i} href={d.href} className="text-black font-bold">
                {d.label}
              </Link>
            ))}

            
          </section>
        </div>
        <section className=" flex flex-1 justify-end gap-4">
          <CiShoppingCart className="   text-3xl text-red-400" />
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
