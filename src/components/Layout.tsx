import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
