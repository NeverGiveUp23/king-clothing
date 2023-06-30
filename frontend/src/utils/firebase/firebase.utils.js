import { initializeApp } from 'firebase/app';  // this is the function that initializes the firebase app
import { getAuth, signInWithRedirect, signInWithPopup,  GoogleAuthProvider } from 'firebase/auth';  // this is the function that initializes the firebase auth
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';  // this is the function that initializes the firebase firestore

const firebaseConfig = {
    apiKey: "AIzaSyBxVWjWc_CwTaz6vC-3RbT2oWMWmCMJUGY",
    authDomain: "king-clothing-db-36654.firebaseapp.com",
    projectId: "king-clothing-db-36654",
    storageBucket: "king-clothing-db-36654.appspot.com",
    messagingSenderId: "644608344583",
    appId: "1:644608344583:web:d92272bf1498f936d060a2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

// this function is used to create a user document in the firestore database
export const createUserDocumentFromAuth = async (userAuth) => { // userAuth is the object returned from the auth library
    const userDocRef = doc(db, 'users', userAuth.uid); // this is the reference to the user document in the firestore database

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // if the user document does not exist in the firestore database, then create it
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            });
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }

 return userDocRef;
}
