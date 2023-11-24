import { useEffect, useRef, useState } from "react";
import styles from './ControlledForm.module.css'

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: 'm',
    swimming: false,
    shopping: false,
    running: false,
};

export default function ControlledForm({ formRef }) {
    const usernameInputRef = useRef();
    const isMountedRef = useRef(false);
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    // Executes only on update
    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }

        console.log('Form is updated');
    }, [formValues]);

    const changeHandler = (e) => {
        let value = '';

        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;
            case 'checkbox':
                value = e.target.checked;
                break;
            default:
                value = e.target.value
                break;
        };

        setFormValues(state => ({
            ...state,
            [e.target.name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        let hobbies = Object.entries(formValues).filter(([_, v]) => v === true).map(([k, _]) => k);

        confirm(`USER DETAILS\n\nUsername: ${formValues.username}\nPassword: ${formValues.password}\nAge: ${formValues.age}\nGender: ${formValues.gender}\n\nHOBBIES - ${hobbies.join(', ')}`);

        resetFormHandler();
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const ageValidator = (e) => {
        if (formValues.age < 0 || formValues.age > 120) {
            setErrors(state => ({
                ...state,
                age: 'Age shoud be between 0 and 120!',
            }));


        } else {
            if (errors.age) {
                setErrors(state => ({
                    ...state,
                    age: '',
                }));
            }
        }
    };

    return (
        <>

            <h1>Controlled Form</h1>

            <form ref={formRef} onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        ref={usernameInputRef}
                        type="text"
                        name="username"
                        id="username"
                        value={formValues.username}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formValues.age}
                        onChange={changeHandler}
                        onBlur={ageValidator}
                        className={errors.age && styles.inputError}
                    />
                    {errors.age && (
                        <p className={styles.errorMessage}>{errors.age}</p>
                    )}
                </div>


                <div>
                    <label htmlFor="gender">Gender: </label>
                    <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
                        <option value="f">Female</option>
                        <option value="m">Male</option>
                    </select>
                </div>

                <div>
                    <h3>Hobbies</h3>
                    <label htmlFor="swimming">Swimming </label>
                    <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={changeHandler} />
                    <label htmlFor="shopping"> Shopping </label>
                    <input type="checkbox" name="shopping" id="shopping" checked={formValues.shopping} onChange={changeHandler} />
                    <label htmlFor="running"> Running </label>
                    <input type="checkbox" name="running" id="running" checked={formValues.running} onChange={changeHandler} />
                </div>

                <div>
                    <button disabled={Object.values(errors).some(x => x)}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>

        </>

    );
};