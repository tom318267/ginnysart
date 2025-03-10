import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(router.pathname);
    }
  }, [router.pathname]); // Ensures this only runs on the client side

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full py-8 relative z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/ginnylogo.svg"
              alt="Logo"
              width={48}
              height={48}
              className="cursor-pointer w-[48px] h-[48px]"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`
              md:flex md:space-x-20
              ${
                isMenuOpen
                  ? "fixed left-0 right-0 top-[88px] bg-white p-6 shadow-lg flex flex-col space-y-6 border-t w-full transform transition-transform duration-300 ease-out translate-y-0"
                  : "hidden md:flex transform transition-transform duration-300 ease-out -translate-y-full md:translate-y-0"
              }
            `}
          >
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} passHref>
                <span
                  className={`relative cursor-pointer text-[14px] md:text-[16px] uppercase font-normal hover:text-custom-purple transition-all group
                    ${
                      activeLink === item.path
                        ? "text-custom-purple font-medium"
                        : ""
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-2 w-full h-[3px] bg-custom-purple transform origin-left transition-transform duration-300 
                    ${activeLink === item.path ? "scale-x-100" : "scale-x-0"} 
                    group-hover:scale-x-100`}
                  ></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
