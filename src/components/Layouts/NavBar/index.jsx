import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import "./styles.css";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <>
      <div className="sticky top-0 w-full z-50 flex py-2 px-12 justify-between items-center lg:shadow-md bg-white">
        <div className="flex items-center h-10">
          <img
            className="h-full rounded-full"
            src="https://i.pinimg.com/564x/2b/31/f2/2b31f25a2616c2dff313afe4adcf149b.jpg"
            alt=""
          />
          <a href="#" className="cursor-pointer hover:text-blue-400 font-bold text-black ml-3">
            Bach Dai
          </a>
        </div>
        <div className=" hidden lg:flex items-center">
          <Link
            smooth
            duration={500}
            to="/#home"
            className="leading-normal font-bold py-7 px-4"
          >
            HOME
          </Link>
          <Link
            smooth
            duration={500}
            to="/#aboutMe"
            className="leading-normal font-bold py-7 px-4"
          >
            ABOUT
          </Link>
          <Link
            smooth
            duration={500}
            to="/#project"
            className="leading-normal font-bold py-7 px-4"
          >
            PROJECT
          </Link>
          <Link
            smooth
            duration={500}
            to="/#contact"
            className="leading-normal font-bold py-7 px-4"
          >
            CONTACT
          </Link>
        </div>
        <div className=" lg:hidden flex items-center">
          <Link smooth duration={500} to="/#sectionId" onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </Link>
        </div>
      </div>
      {mobileDrawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="sticky z-50 left-0 top-[56px] w-full bg-white"
        >
          <Link
            smooth
            duration={500}
            to="/#home"
            className="leading-normal block w-full font-bold hover:bg-slate-200 border-t-[1px] border-solid border-[#eee] py-7 px-4"
          >
            HOME
          </Link>
          <Link
            smooth
            duration={500}
            to="/#aboutMe"
            className="leading-normal block w-full font-bold hover:bg-slate-200 border-t-[1px] border-solid border-[#eee] py-7 px-4"
          >
            ABOUT
          </Link>
          <Link
            smooth
            duration={500}
            to="/#project"
            className="leading-normal block w-full font-bold hover:bg-slate-200 border-t-[1px] border-solid border-[#eee] py-7 px-4"
          >
            PROJECT
          </Link>
          <Link
            smooth
            duration={500}
            to="/#contact"
            className="leading-normal block w-full font-bold hover:bg-slate-200 border-t-[1px] border-solid border-[#eee] py-7 px-4"
          >
            CONTACT
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default NavBar;
