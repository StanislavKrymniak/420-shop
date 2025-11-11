import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver,
    UserCredential
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs,QueryDocumentSnapshot } from "firebase/firestore";
import { Category } from "../../store/categories/categories.types";

const firebaseConfig = {
    apiKey: "AIzaSyChfWIumlUBs1nkXKEgvOMwMTUdw9Ypsx4",
    authDomain: "shop-f0991.firebaseapp.com",
    projectId: "shop-f0991",
    storageBucket: "shop-f0991.appspot.com",
    messagingSenderId: "421465187627",
    appId: "1:421465187627:web:84764293d0b690abb9116e"
};
  

  
const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider()

GoogleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, GoogleProvider)


export const db = getFirestore()

export type ObjectToAdd = {
    title: string
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
    collectionKey:string,
    objectsToAdd: T[]
  ):Promise<void> => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
  
    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data() as Category)
}

export type additionalInformation = {
    displayName?: string
}

export type UserData = {
    createdAt: Date
    displayName: string
    email: string 
}

export const createUserDocumentFromAuth = async (
    userAuth: User, additionalInformation = {} as additionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userDocRef)
    console.log('does user already exists? :',userSnapshot.exists())

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()
        console.log('creating user for the first time')

        try {
            await setDoc(userDocRef, {
                displayName, 
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log(error)
        }
    }

    return userSnapshot as QueryDocumentSnapshot<UserData>
}  

export const createAuthUserWithEmailAndPassword = async (email:string, password:string) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email:string, password: string) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)


export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve,reject) => {
        const unsubscribe = onAuthStateChanged(
            auth, 
            (userAuth) => {
                unsubscribe()
                resolve(userAuth)
            },
            reject
        )
    })
}