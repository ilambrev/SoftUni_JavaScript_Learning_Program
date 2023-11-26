import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const BASE_URL = 'https://swapi.dev/api';

const CharacterDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

    console.log(location);

    useEffect(() => {
        fetch(`${BASE_URL}/people/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Not found');
                }

                return res.json();
            })
            .then(setCharacter)
            .catch((error) => {
                navigate('/characters'); // redirect
            });
    }, [id]);

    return (
        <>

            <h1>{character.name}</h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, excepturi veritatis accusantium officia eaque quaerat in beatae assumenda libero ad vero. Architecto omnis ex magnam sint! Tempore, fugit incidunt eos, omnis quisquam error sunt tenetur deleniti veniam quas laborum facere fuga eligendi. Sint accusantium, esse totam veniam voluptatem dolorem nam.</p>

        </>
    );
};

export default CharacterDetails;