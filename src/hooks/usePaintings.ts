import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export interface Painting {
  id: string;
  title: string;
  artist: string;
  price: number;
  imageUrl: string;
  dimensions: string;
  category: string;
  description: string;
  available: boolean;
}

export const usePaintings = () => {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "paintings"));
        const paintingsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Painting[];
        setPaintings(paintingsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching paintings:", err);
        setError("Failed to load paintings");
        setLoading(false);
      }
    };

    fetchPaintings();
  }, []);

  return { paintings, loading, error };
};
