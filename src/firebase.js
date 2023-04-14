import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDd4v9Z7KpiptmfAN7-9-4q6c_506DO_nI",
  
    authDomain: "discord-clone-4941d.firebaseapp.com",
  
    projectId: "discord-clone-4941d",
  
    storageBucket: "discord-clone-4941d.appspot.com",
  
    messagingSenderId: "131427598916",
  
    appId: "1:131427598916:web:b349105eedc9f9d8d3f211"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
