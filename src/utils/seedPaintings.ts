import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const paintings = [
  {
    title: "Daffodils",
    price: 80,
    imageUrl: "/images/daffodils.webp",
    dimensions: '11" x 14"',
    category: "landscape",
    description: "Yellow daffodils",
    available: true,
  },
  {
    title: "Daffodil Mix",
    price: 100,
    imageUrl: "/images/daffodilmix.webp",
    dimensions: '14" x 18"',
    category: "floral",
    description: "Mix of daffodils",
    available: true,
  },
  {
    title: "Wimzy",
    price: 100,
    imageUrl: "/images/wimzy2.webp",
    dimensions: '10" x 20"',
    category: "floral",
    description: "Flowers in a vase",
    available: true,
  },
  {
    title: "Hidden Gardens",
    price: 100,
    imageUrl: "/images/hiddengarden.webp",
    dimensions: '18" x 24"',
    category: "floral",
    description: "Garden of flowers",
    available: true,
  },
  {
    title: "Pink Tulips",
    price: 100,
    imageUrl: "/images/pink.webp",
    dimensions: '20" x 16"',
    category: "floral",
    description: "Pink tulips",
    available: true,
  },
  {
    title: "Garden Door",
    price: 100,
    imageUrl: "/images/gardendoor.webp",
    dimensions: '16" x 20"',
    category: "landscape",
    description: "Garden door",
    available: true,
  },
  {
    title: "Garden Gate",
    price: 100,
    imageUrl: "/images/gardengate.webp",
    dimensions: '10" x 20"',
    category: "landscape",
    description: "Garden gate",
    available: true,
  },
  {
    title: "Peonies Flowers",
    price: 100,
    imageUrl: "/images/peonie.webp",
    dimensions: '11" x 14"',
    category: "floral",
    description: "Peonies flowers",
    available: true,
  },
  {
    title: "Purple Tulips",
    price: 100,
    imageUrl: "/images/tulips.webp",
    dimensions: '11" x 14"',
    category: "floral",
    description: "Purple tulips",
    available: true,
  },
  {
    title: "Pots of Flowers",
    price: 100,
    imageUrl: "/images/pots.webp",
    dimensions: '24" x 12"',
    category: "floral",
    description: "Pots of flowers",
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
