import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: "nutrifeed-app-fdcde.firebaseapp.com",
   projectId: "nutrifeed-app-fdcde",
   storageBucket: "nutrifeed-app-fdcde.appspot.com",
   messagingSenderId: "278261515508",
   appId: "1:278261515508:web:87efddee28d693cfa24aa1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
