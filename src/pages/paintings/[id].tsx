import React from "react";
import { useRouter } from "next/router";
import { usePaintings } from "../../hooks/usePaintings";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import toast from "react-hot-toast";
import { FaShippingFast, FaRegCreditCard, FaShieldAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import paintingAnimation from "../../assets/painting-animation.json";

// Add dynamic import for Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const PaintingDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const { paintings, loading, error } = usePaintings();

  const painting = paintings?.find((p) => p.id === id);

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

  // Add similar paintings feature
  const similarPaintings = paintings
    ?.filter((p) => p.category === painting?.category && p.id !== painting?.id)
    .slice(0, 3);

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

  if (error || !painting) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-600 mb-4">{error || "Painting not found"}</p>
        <Link href="/shop" className="text-custom-purple hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F7FF] via-[#FCFAFF] to-[#FFFFFF] py-16 px-4 lg:px-8">
      <div className="max-w-7xl px-4 lg:px-8 mx-auto">
        <Link
          href="/shop"
          className="inline-flex font-semibold items-center mb-8 text-custom-purple hover:underline"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative w-full aspect-square">
              <Image
                src={painting.imageUrl}
                alt={painting.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {painting.title}
              </h1>
              <p className="text-xl text-gray-600">By {painting.artist}</p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-semibold">Dimensions:</span>{" "}
                {painting.dimensions}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Category:</span>{" "}
                {painting.category}
              </p>
              {painting.description && (
                <p className="text-gray-700">
                  <span className="font-semibold">Description:</span>
                  <br />
                  {painting.description}
                </p>
              )}
              <p className="text-3xl font-bold text-gray-800">
                ${painting.price}
              </p>
            </div>

            <button
              className="w-full md:w-auto inline-block uppercase relative bg-custom-purple text-white px-8 py-4 rounded shadow-md text-lg
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
              hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden"
              onClick={() => handleAddToCart(painting)}
            >
              <span className="relative z-10">Add to Cart</span>
            </button>

            {/* Shopping Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 border-t border-gray-300 pt-8">
              <div className="flex items-center space-x-3">
                <FaShippingFast className="text-2xl text-custom-purple" />
                <div>
                  <h3 className="font-semibold">Free Shipping</h3>
                  <p className="text-sm text-gray-600">On orders over $500</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaRegCreditCard className="text-2xl text-custom-purple" />
                <div>
                  <h3 className="font-semibold">Secure Payment</h3>
                  <p className="text-sm text-gray-600">100% secure payment</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaShieldAlt className="text-2xl text-custom-purple" />
                <div>
                  <h3 className="font-semibold">Money-Back Guarantee</h3>
                  <p className="text-sm text-gray-600">30 day guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Paintings Section */}
        {similarPaintings && similarPaintings.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Similar Paintings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarPaintings.map((similarPainting) => (
                <div
                  key={similarPainting.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() =>
                    router.push(`/paintings/${similarPainting.id}`)
                  }
                >
                  <div className="relative aspect-square">
                    <Image
                      src={similarPainting.imageUrl}
                      alt={similarPainting.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">
                      {similarPainting.title}
                    </h3>
                    <p className="text-gray-600">${similarPainting.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaintingDetail;
