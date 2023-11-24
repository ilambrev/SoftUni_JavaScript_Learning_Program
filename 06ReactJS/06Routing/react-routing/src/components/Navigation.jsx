import { Link } from 'react-router-dom'

const Navigation = () => {
    return (

        <nav>
            {/* 
            <a href="/">Home </a>
            <a href="/about">About </a>
            <a href="/contacts">Contacts </a>
            */}

            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/contacts">Contacts </Link>
        </nav>

    );
};

export default Navigation;