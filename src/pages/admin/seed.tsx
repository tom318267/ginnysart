import React, { useState } from "react";
import { seedPaintings } from "../../utils/seedPaintings";

const SeedPage = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSeed = async () => {
    try {
      setStatus("loading");
      setError(null);
      await seedPaintings();
      setStatus("success");
    } catch (error) {
      console.error("Seeding error:", error);
      setStatus("error");
      setError(
        error instanceof Error ? error.message : "Unknown error occurred"
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin: Seed Database</h1>

      <button
        onClick={handleSeed}
        disabled={status === "loading"}
        className={`inline-block uppercase relative bg-custom-purple text-white px-[40px] py-[20px] rounded-md text-[16px] shadow-md
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-custom-purple before:to-light-purple before:opacity-0 before:transition-opacity before:duration-300 before:rounded-md
          hover:before:opacity-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out overflow-hidden
          ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span className="relative z-10">
          {status === "loading" ? "Seeding..." : "Seed Paintings"}
        </span>
      </button>

      {status === "success" && (
        <p className="mt-4 text-green-600">Successfully seeded paintings!</p>
      )}

      {status === "error" && (
        <p className="mt-4 text-red-600">Error seeding paintings: {error}</p>
      )}

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Debug Information:</h2>
        <p>Open your browser console (F12) to see detailed logs.</p>
      </div>
    </div>
  );
};

export default SeedPage;
