import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = 'https://swapi.dev/api';

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`${BASE_URL}/people/${id}`)
        .then(res => res.json())
        .then(setCharacter)
    }, [id]);

    return (
        <>

            <h1>{character.name}</h1>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, excepturi veritatis accusantium officia eaque quaerat in beatae assumenda libero ad vero. Architecto omnis ex magnam sint! Tempore, fugit incidunt eos, omnis quisquam error sunt tenetur deleniti veniam quas laborum facere fuga eligendi. Sint accusantium, esse totam veniam voluptatem dolorem nam.</p>

        </>
    );
};

export default CharacterDetails;