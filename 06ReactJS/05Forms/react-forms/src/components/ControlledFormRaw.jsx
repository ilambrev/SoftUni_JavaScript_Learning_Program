import { useState } from "react";

export default function ControlledFormRaw() {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [ageValue, setAgeValue] = useState('');

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setAgeValue(Number(e.target.value));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        confirm(`USER DETAILS\n\nUsername: ${usernameValue}\nPassword: ${passwordValue}\nAge: ${ageValue}`);
        resetFormHandler();
    };

    const resetFormHandler = () => {
        setUsernameValue('');
        setPasswordValue('');
        setAgeValue('');
    };

    return (
        <>

            <h1>Controlled Form Raw</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={usernameValue}
                        onChange={usernameChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={passwordValue}
                        onChange={passwordChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={ageValue}
                        onChange={ageChangeHandler}
                    />
                </div>
                <div>
                    <button>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>

        </>

    );
};