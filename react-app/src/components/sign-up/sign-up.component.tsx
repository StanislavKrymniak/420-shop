import './sign-up.styles.scss'
import { useState, FormEvent, ChangeEvent } from "react";
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../store/user/user.action'
import { AuthError, AuthErrorCodes } from 'firebase/auth';

export const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const SignUp = () => {   
    const [formFields, setFormFields] = useState(defaultFormFields)
    const [error, setError] = useState<string | null>(null);
    const {displayName, email, password , confirmPassword} = formFields
    const dispatch = useDispatch()
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError(null);

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        };

        try {
            dispatch(signUpStart(email,password,displayName))
            resetFormFields()
        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                setError('Email already in use');
            } else {
                setError('An error occurred during sign up');
                console.log(error)
            }
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name , value} = event.target
        setError(null);
        setFormFields({...formFields, [name]: value})
    }
    
    return (
        <section className="sign-up_container" aria-labelledby="sign-up-title">
            <h2 className="sign-up_title" id="sign-up-title">Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} className="sign-up_form">
                {error && <div role="alert" className="form-error">{error}</div>}
                <FormInput
                    label="DisplayName" 
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName}
                    id='signup-displayName'
                />
                <FormInput 
                    label='Email'
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}
                    id='signup-email'
                />
                <FormInput
                    label='Password'
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                    id='signup-password'
                />
                <FormInput 
                    label='Confirm Password'
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword'
                    value={confirmPassword}
                    id='signup-confirmPassword'
                />
                <Button type="submit" >Sign Up</Button>
            </form>
        </section>
    )
}

export default SignUp;