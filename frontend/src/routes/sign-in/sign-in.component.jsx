// import {useEffect} from "react";
// import {getRedirectResult} from "firebase/auth";

import { signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    // }, [])

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await getRedirectResult(auth);
    //         if (response) { // If the user is signed in
    //             const userDocRef = await createUserDocumentFromAuth(response.user); // Create the user document
    //             // Handle the user document reference as needed
    //         }
    //     }
    //     fetchData();
    // }, []);
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


  return (
      <div>
          <h1>Sign In!</h1>
          <button onClick={logGoogleUser}>
              Sign in with google
          </button>
          <SignUpForm />
      </div>
  )
}

export default SignIn;