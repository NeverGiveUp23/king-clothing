import FormInput from "../form-input/form-input";
import Button from "../button/button.component";
import {useState, useContext} from "react";
import {UserContext} from "../../context/user.context";
import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailWithPassword
} from "../../utils/firebase/firebase.utils";
import './sign-in-form.style.scss'

const defaultFormFields = {
    'email': '',
    'password': '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const val = useContext(UserContext);

    const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const {user} = await signInAuthUserWithEmailWithPassword(email, password);
            setCurrentUser(user);
            resetFormFields();
        }catch (e) {
            switch (e.code){
                case 'auth/wrong-password':
                    alert('Incorrect Password');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(e);
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({
            ...formFields,
            [name]: value
        })
    };

    return(
      <div className={'sign-in-container'}>
          <h2>Already have an account?</h2>
          <span>Sign in with your email and password</span>
          <form onSubmit={handleSubmit}>
              <FormInput label={'Email'} type={'email'} required onChange={handleChange} name='email' value={email}/>
              <FormInput label={'Password'} type={'password'} required onChange={handleChange} name='password' value={password}/>
              <div className='buttons-container'>
                  <Button type='submit'>Sign In</Button>
                  <Button onClick={signInWithGoogle} type='button' buttonType={'google'} >
                      Google sign in
                  </Button>
              </div>
          </form>
      </div>
  )
}

export default SignInForm;