import React from "react";
import { useRouter } from "next/router";
import { usePaintings } from "../../hooks/usePaintings";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// Import animation data normally
import paintingAnimation from "../../assets/painting-animation.json";

const LoadingAnimation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-32 h-32">
        <Lottie
          animationData={paintingAnimation}
          loop={true}
          autoplay={true}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
          style={{ width: "100%", height: "100%" }}
          initialSegment={[0, 60]}
        />
      </div>
    </div>
  );
};

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { paintings, loading, error } = usePaintings();
  const dispatch = useDispatch();

  // Format category name for display (e.g., "abstract-art" -> "Abstract Art")
  const formatCategoryName = (category: string) => {
    if (!category) return "";
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Filter paintings by category
  const categoryPaintings = paintings.filter(
    (painting) =>
      painting.category.toLowerCase() === slug?.toString().toLowerCase()
  );

  const handleAddToCart = (painting: any) => {
    dispatch(addToCart({ ...painting, quantity: 1 }));
    toast.success(`${painting.title} added to cart`, {
      duration: 2000,
      position: "bottom-right",
      style: {
        background: "#F8F7FF",
        color: "#1a1a1a",
        border: "1px solid #6B46C1",
      },
    });
  };

  // Only show loading when we're actually loading AND don't have any paintings
  if (loading && !paintings.length) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <div className="text-center py-12 text-red-600">{error}</div>;
  }

  return (
    <section className="py-16 px-4 lg:px-8 bg-gradient-to-br from-[#F8F7FF] via-[#FCFAFF] to-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up opacity-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[80px] mb-4">
            {formatCategoryName(slug as string)}
          </h1>
          <p className="text-base lg:text-lg font-light max-w-2xl mx-auto text-black">
            Explore our collection of{" "}
            {formatCategoryName(slug as string).toLowerCase()} paintings, each
            piece carefully crafted to bring beauty and inspiration to your
            space.
          </p>
        </div>

        {categoryPaintings.length === 0 ? (
          <div className="text-center py-12 animate-fade-up-1 opacity-0">
            <p className="text-gray-600">
              No paintings found in this category.{" "}
              <Link href="/shop" className="text-custom-purple hover:underline">
                View all paintings
              </Link>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 px-4 lg:px-8 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPaintings.map((painting, index) => (
              <div
                key={painting.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden animate-shopSlideUp hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={painting.imageUrl}
                    alt={painting.title}
                    className="w-full h-full object-contain bg-gray-50 p-4"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {painting.title}
                  </h2>
                  <p className="text-gray-600 mb-2">By {painting.artist}</p>
                  <p className="text-gray-500 text-sm mb-4">
                    Dimensions: {painting.dimensions}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-800">
                      ${painting.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(painting)}
                      className="inline-block uppercase relative bg-custom-purple text-white px-6 py-3 rounded shadow-md text-sm
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
                        hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
                    >
                      <span className="relative z-10">ADD TO CART</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12 animate-fade-up-3 opacity-0">
          <Link
            href="/shop"
            className="inline-block uppercase relative bg-custom-purple text-white px-[30px] lg:px-[40px] py-[15px] lg:py-[20px] rounded-md shadow-md text-[14px] lg:text-[16px]
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
              hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
          >
            <span className="relative z-10">View All Paintings</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
