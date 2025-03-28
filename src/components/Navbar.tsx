import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Adjust path as needed

const Navbar = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

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
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/">
            <Link href="/">
              <Link href="/">
                <Image
                  src="/images/vlogo2.png" // Updated path
                  alt="Logo"
                  width={96} // 2x intended display size (48px → 96px)
                  height={96}
                  className="w-12 h-auto" // w-12 = 48px in Tailwind
                  priority // Preload if above the fold
                />
              </Link>
            </Link>
          </Link>

          {/* Mobile Menu Button and Cart Icon Container */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Cart Icon with Badge */}
            <Link href="/cart">
              <div className="cursor-pointer relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-custom-purple text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
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
          </div>

          {/* Navigation Links */}
          <div
            className={`
              md:flex md:space-x-20 md:items-center
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

            {/* Desktop Cart Icon with Badge */}
            <Link href="/cart">
              <div className="hidden md:block cursor-pointer relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-custom-purple text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
