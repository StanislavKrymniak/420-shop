import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCVAuGx3pJGcdl47QxgF2rpE-LELAKPvJ4",
    authDomain: "ray-shop-a0f26.firebaseapp.com",
    projectId: "ray-shop-a0f26",
    storageBucket: "ray-shop-a0f26.appspot.com",
    messagingSenderId: "652796299086",
    appId: "1:652796299086:web:0011df8f8f80a8259b001f",
    measurementId: "G-B2Y31Q848Y"
  };
  
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)