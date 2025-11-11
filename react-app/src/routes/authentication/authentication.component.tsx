import './authentication.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

export const AuthComponent = () => {
    return (
        <main className="auth_container">
            <h1 className="visually-hidden">Authentication</h1>
            <SignIn />
            <SignUp />
        </main>
    )
}

export default AuthComponent;