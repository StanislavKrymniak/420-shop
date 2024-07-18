import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-in.styles.scss'


export const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div className="sign-in_container">
            <h1>Sign-In</h1>
            <button onClick={logGoogleUser}>sign in with google</button>
        </div>
    )
}



export default SignIn


