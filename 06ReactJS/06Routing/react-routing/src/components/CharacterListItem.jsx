import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CharacterListItem = ({
    id,
    name,
    hair_color,
    eye_color,
    birth_year,
    gender,
}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <ul>
                    <li>hair_color: {hair_color}</li>
                    <li>eye_color: {eye_color}</li>
                    <li>birth_year: {birth_year}</li>
                    <li>gender: {gender}</li>
                </ul>
                <Button as={Link} to={`/characters/${id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
};

export default CharacterListItem;