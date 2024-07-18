import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyChfWIumlUBs1nkXKEgvOMwMTUdw9Ypsx4",
    authDomain: "shop-f0991.firebaseapp.com",
    projectId: "shop-f0991",
    storageBucket: "shop-f0991.appspot.com",
    messagingSenderId: "421465187627",
    appId: "1:421465187627:web:84764293d0b690abb9116e"
};
  

  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userDocRef)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName, 
                email,
                createdAt
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return userDocRef
}  