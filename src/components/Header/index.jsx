import longlogo from "../../assets/logos/long-light-logo.svg";
import "./styles.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Header() {

  return (
    <nav className="bg-[#7643E5] px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div>
          <a href="/" className="flex items-center">
            <img
              src={longlogo}
              className="h-6 md:h-9 lg:h-14"
              alt="Text Logo"
            />
          </a>
          <p className="karla-400 text-left text-xs md:text-lg text-[#FFF9F4]">
            est. 2014
          </p>
        </div>

        {/* HAMBURGER NAV BAR ON SMALL SCREEN */}
       <Hamburger />

        {/* NAV BAR ON MD & LG SCREENS */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#7643E5]">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFCE3A] md:p-0 dark:text-[#FFF9F4] "
              >
                Home
              </Link>
            </li>
            <li>
              <HashLink
                to="/#about"
                className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFCE3A] md:p-0 dark:text-[#FFF9F4] "
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#reviews"
                className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFCE3A] md:p-0 dark:text-[#FFF9F4] "
              >
                Reviews
              </HashLink>
            </li>
            {/* <li>
            <HashLink to='#photoGallery' className='block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFCE3A] md:p-0 dark:text-[#FFF9F4] '>Gallery</HashLink>
            </li> */}
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#FFCE3A] md:p-0 dark:text-[#FFF9F4] "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
