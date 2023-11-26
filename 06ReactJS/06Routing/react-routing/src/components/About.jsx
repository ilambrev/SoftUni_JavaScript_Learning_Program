import { Link, Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
            <h2>About Page</h2>
            <nav>
                <Link to="us">About Us</Link><span> | </span>
                <Link to="mission">Mission</Link><span> | </span>
                <Link to="values">Our Values</Link><span> | </span>
            </nav>

            <Outlet />
        </>
    );
};

export default About;