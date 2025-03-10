import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

interface FirebaseServices {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
  storage: FirebaseStorage;
}

function createFirebaseApp(): FirebaseServices | null {
  if (typeof window === "undefined") return null;

  try {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    };

    const app = !getApps().length
      ? initializeApp(firebaseConfig)
      : getApps()[0];
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app);

    return { app, auth, db, storage };
  } catch (error) {
    console.error("Firebase initialization error:", error);
    return null;
  }
}

const firebase = createFirebaseApp();

export const auth = firebase?.auth;
export const db = firebase?.db;
export const storage = firebase?.storage;
