import React from "react";
import Link from "next/link";

// Using getStaticProps for static optimization
export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <Link href="/" className="text-blue-500 hover:text-blue-700">
        Return to Home
      </Link>
    </div>
  );
}
