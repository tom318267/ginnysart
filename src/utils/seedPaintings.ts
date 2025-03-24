import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const paintings = [
  {
    title: "Sunset Meadow",
    artist: "Virginia Smith",
    price: 80,
    imageUrl: "/images/painting2.jpg",
    dimensions: '24" x 36"',
    category: "landscape",
    description: "A peaceful meadow at sunset with wildflowers",
    available: true,
  },
  {
    title: "Purple Blooms",
    artist: "Virginia Smith",
    price: 200,
    imageUrl: "/images/painting3.jpg",
    dimensions: '18" x 24"',
    category: "floral",
    description: "Vibrant purple flowers in full bloom",
    available: true,
  },
  {
    title: "Ocean Dreams",
    artist: "Virginia Smith",
    price: 300,
    imageUrl: "/images/painting1.jpg",
    dimensions: '30" x 40"',
    category: "abstract",
    description: "Abstract interpretation of ocean waves",
    available: true,
  },
  {
    title: "Bird Painting",
    artist: "Virginia Smith",
    price: 100,
    imageUrl: "/images/painting1.jpg",
    dimensions: '30" x 40"',
    category: "abstract",
    description: "Abstract interpretation of ocean waves",
    available: true,
  },
  {
    title: "Flowers Painting",
    artist: "Virginia Smith",
    price: 100,
    imageUrl: "/images/flowers1.webp",
    dimensions: '30" x 40"',
    category: "floral",
    description: "Beautiful flowers in a vase",
    available: true,
  },
  // Add more paintings as needed
];

export const seedPaintings = async () => {
  if (!db) {
    console.error("Firebase DB is not initialized!");
    throw new Error("Firebase DB is not initialized");
  }

  try {
    console.log("Starting to seed paintings...");
    const paintingsRef = collection(db, "paintings");

    const results = await Promise.all(
      paintings.map(async (painting) => {
        try {
          const docRef = await addDoc(paintingsRef, painting);
          console.log(
            `Added painting: ${painting.title} with ID: ${docRef.id}`
          );
          return docRef;
        } catch (error) {
          console.error(`Failed to add painting ${painting.title}:`, error);
          throw error;
        }
      })
    );

    console.log(`Successfully added ${results.length} paintings!`);
    return results;
  } catch (error) {
    console.error("Error seeding paintings:", error);
    throw error;
  }
};
