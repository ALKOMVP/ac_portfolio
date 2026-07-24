import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { portfolioNavLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const onPortfolio = location.pathname.startsWith("/portfolio");

  useEffect(() => {
    setToggle(false);
  }, [location.pathname, location.hash]);

  const mainLinks = [
    { to: "/", label: "Apps", end: true },
    { to: "/portfolio", label: "Portfolio", end: false },
  ];

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Alan &nbsp;<span className="sm:block hidden">| Web Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {mainLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium`
                }
                onClick={() => setActive(link.label)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {onPortfolio &&
            portfolioNavLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/portfolio#${link.id}`}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] font-medium`}
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {mainLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : "text-secondary"} font-poppins font-medium text-[16px]`
                    }
                    onClick={() => {
                      setToggle(false);
                      setActive(link.label);
                    }}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              {onPortfolio &&
                portfolioNavLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/portfolio#${link.id}`}
                      className={`${
                        active === link.title ? "text-white" : "text-secondary"
                      } font-poppins font-medium text-[16px]`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
