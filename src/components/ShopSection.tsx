import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { usePaintings } from "../hooks/usePaintings";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Image from "next/image";
import paintingAnimation from "../assets/painting-animation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const selectClassName = `
  p-2 pl-3 pr-8 text-sm w-[7.5rem] border border-custom-purple rounded-md 
  focus:outline-none focus:ring-0 focus:border-2 focus:border-custom-purple
  appearance-none bg-white bg-[url('/images/chevron-down.svg')] bg-no-repeat bg-[center_right_0.5rem] bg-[length:16px_16px]
  md:w-40 md:pl-4 md:pr-10 md:bg-[center_right_1rem]
`;

const ShopSection: React.FC = () => {
  const dispatch = useDispatch();
  const { paintings, loading, error } = usePaintings();
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [category, setCategory] = useState("all");
  const router = useRouter();

  const categories = [...new Set(paintings.map((p) => p.category))];

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

  const handlePaintingClick = (paintingId: string) => {
    router.push(`/paintings/${paintingId}`);
  };

  const filteredPaintings = paintings
    .filter((painting) => {
      if (
        category !== "all" &&
        painting.category.toLowerCase() !== category.toLowerCase()
      )
        return false;

      const price = Number(painting.price);
      switch (priceRange) {
        case "under100":
          return price < 100;
        case "100-200":
          return price >= 100 && price <= 200;
        case "over200":
          return price > 200;
        default:
          return true;
      }
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "priceLow":
          return Number(a.price) - Number(b.price);
        case "priceHigh":
          return Number(b.price) - Number(a.price);
        case "name":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-32 h-32">
          <Lottie animationData={paintingAnimation} loop autoplay />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-12 text-red-600">{error}</div>;
  }

  return (
    <section className="py-16 px-4 lg:px-8 bg-gradient-to-br from-[#F8F7FF] via-[#FCFAFF] to-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col px-4 lg:px-8 md:flex-row md:items-center md:justify-between mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 md:mb-0 text-center md:text-left">
            Available Paintings
          </h1>

          <div className="w-full md:w-auto overflow-x-auto">
            <div className="flex gap-2 md:gap-4 items-center min-w-[500px]">
              <select
                className={selectClassName}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat.toLowerCase()}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>

              <select
                className={selectClassName}
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="under100">Under $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="over200">Over $200</option>
              </select>

              <select
                className={selectClassName}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort By</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="name">Name</option>
              </select>

              <span className="text-sm text-gray-600 whitespace-nowrap">
                {filteredPaintings.length} paintings
              </span>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mb-12 mx-4 lg:mx-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-8">
          {filteredPaintings.map((painting) => (
            <div
              key={painting.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => handlePaintingClick(painting.id)}
              >
                <Image
                  src={painting.imageUrl}
                  alt={painting.title}
                  fill
                  className="object-contain bg-gray-50 p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h2
                  className="text-xl font-semibold text-gray-800 mb-2 cursor-pointer hover:text-custom-purple"
                  onClick={() => handlePaintingClick(painting.id)}
                >
                  {painting.title}
                </h2>
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(painting);
                    }}
                  >
                    <span className="relative z-10">ADD TO CART</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
