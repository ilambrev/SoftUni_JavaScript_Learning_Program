import { useForm } from "../../hooks/useForm";

import { Link } from "react-router-dom";

const LOGIN_FORM_KEYS = {
    EMAIL: 'email',
    PASSWORD: 'password',
};

export default function Login({
    loginSubmitHandler,
}) {
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LOGIN_FORM_KEYS.EMAIL]: '',
        [LOGIN_FORM_KEYS.PASSWORD]: '',
    });

    return (

        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        onChange={onChange}
                        value={values[LOGIN_FORM_KEYS.EMAIL]}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        onChange={onChange}
                        value={values[LOGIN_FORM_KEYS.PASSWORD]}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    );

};