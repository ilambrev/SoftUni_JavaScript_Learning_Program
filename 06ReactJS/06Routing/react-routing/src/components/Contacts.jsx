import { useEffect } from "react";

const Contacts = () => {
    useEffect(() => {
        const timeotId = setTimeout(() => {
            console.log('2 seconds');
        }, 200);

        return () => {
            clearTimeout(timeotId);
        }
    }, []);

    return (
        <>
            <h2>Contact Page</h2>

            <label htmlFor="">Title</label><br />
            <input type="text" /><br /><br />
            <label htmlFor="">Description</label><br />
            <textarea name="" id="" cols="30" rows="10"></textarea><br /><br />
            <input type="submit" value="Submit" />

        </>

    );
};

export default Contacts;