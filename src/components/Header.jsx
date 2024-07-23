import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Logo from "../assets/logo.png";
import Button from "../ui/Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import Grad from "../assets/svg/ButtonGradient";
import content from "../constants/content.json";

const { navigation, signInLink } = content;

const Header = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prevState) => {
      const newState = !prevState;
      if (newState) {
        disablePageScroll();
      } else {
        enablePageScroll();
      }
      return newState;
    });
  };

  const handleClick = () => {
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/40 lg:backdrop-blur-3xl ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block lg:w-[12rem] w-[8rem] xl:mr-8" href="#hero">
          <img
            src={Logo}
            width={190}
            height={40}
            alt="Logo"
            className="w-[80%] h-auto"
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[3.5rem] sm:top-[4rem] lg:top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) =>
              item.isExternal ? (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-lg sm:text-xl lg:text-xs uppercase text-n-1 transition-colors hover:text-[#9c93f9] ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-4 sm:px-6 py-3 sm:py-4 lg:py-6 lg:-mr-0.25 lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-[#9c93f9] xl:px-10`}
                >
                  {item.title}
                </a>
              ) : (
                <Link
                  key={item.id}
                  to={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-lg sm:text-xl lg:text-xs uppercase text-n-1 transition-colors hover:text-[#9c93f9] ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-4 sm:px-6 py-3 sm:py-4 lg:py-6 lg:-mr-0.25 lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:lg:hover:text-[#9c93f9] xl:px-10`}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>

          <HamburgerMenu />
        </nav>

        <Button className="hidden lg:flex" href={signInLink}>
          Sign in
        </Button>
        <Grad />

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
