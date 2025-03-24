import React from "react";
import { useRouter } from "next/router";
import { usePaintings } from "../../hooks/usePaintings";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import paintingAnimation from "../../assets/painting-animation.json";

// Add dynamic import for Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const CategoryPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const { paintings, loading, error } = usePaintings();

  // Filter paintings by category
  const categoryPaintings = paintings?.filter(
    (p) => p.category.toLowerCase() === slug?.toString().toLowerCase()
  );

  const categoryTitle = slug
    ? slug.toString().charAt(0).toUpperCase() + slug.toString().slice(1)
    : "";

  const handleAddToCart = (painting: any, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking the add to cart button
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-32 h-32">
          <Lottie
            animationData={paintingAnimation}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="py-[60px] lg:py-[120px] px-4 lg:px-8 bg-gradient-to-br from-[#F8F7FF] via-[#FCFAFF] to-[#FFFFFF]">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          {categoryTitle} Paintings
        </h1>

        <hr className="border-gray-300 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryPaintings?.map((painting) => (
            <div
              key={painting.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden animate-shopSlideUp hover:-translate-y-2 transition-transform duration-300"
              onClick={() => router.push(`/paintings/${painting.id}`)}
            >
              <div className="relative aspect-[4/3] overflow-hidden cursor-pointer">
                <img
                  src={painting.imageUrl}
                  alt={painting.title}
                  className="w-full h-full object-contain bg-gray-50 p-4"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 cursor-pointer hover:text-custom-purple">
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
                    className="inline-block uppercase relative bg-custom-purple text-white px-6 py-3 rounded shadow-md text-sm
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
                      hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
                    onClick={(e) => handleAddToCart(painting, e)}
                  >
                    <span className="relative z-10">ADD TO CART</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {categoryPaintings?.length === 0 && (
          <p className="text-center text-gray-600">
            No paintings found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
