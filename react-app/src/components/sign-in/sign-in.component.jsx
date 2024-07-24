import {  signInWithGooglePopup,createUserDocumentFromAuth,signInUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import { useState } from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import { Button_Type_Classes } from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: ''
}

export const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleChange = (event) => {
        const {name , value} = event.target
        
        setFormFields({...formFields, [name]: value})
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const user = await signInUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            console.log('invalid email or password',error)
        }
    }

    return (
        <div className="sign-in_container">
            <h2 className="sign-in_title">Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput
                    label="Email" 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}
                />
                <FormInput
                    label="Password" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>   
                    <Button type='button' buttonType={Button_Type_Classes.google} onClick={logGoogleUser}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}



export default SignIn


