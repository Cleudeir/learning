/* eslint-disable react-hooks/rules-of-hooks */
import { initializeApp } from "firebase/app";
import ToPromise from "../other/ToPromise";
import { getAuth } from "firebase/auth";

async function initFirebase() {
  try {
    console.log("start Firebase");
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    };
    const init = await ToPromise(initializeApp, firebaseConfig);
    let auth = await ToPromise(getAuth, init); 
    return { auth };
  } catch (error) {
    console.error(error);
    throw new Error("Unable to initializeApp");
  }
}

export default initFirebase();
