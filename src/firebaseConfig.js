// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// aclaro que servicio de firebase uso, en este caso firestore
import { getFirestore } from 'firebase/firestore'
// traigo mi base de datos

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH,
  projectId: import.meta.env.VITE_PROJECT,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// aclaro que servicio de firebase uso, en este caso firestore
const db = getFirestore(app);

// servivio de base de datos de la palicacion

export { db };
// cada vez que lo quiera usar, hago un import de mi base de datos (q la guardé en db)
