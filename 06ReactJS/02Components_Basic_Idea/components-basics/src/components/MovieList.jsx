import Movie from "./Movie";
import Heading from "./Heading";

export default function MovieList(props) {
    return (
        <div className="movie-list">
            <Heading>{props.headingText}</Heading>

            <ul>
                <li><Movie movieData={props.movies[0]} /></li>
                <li><Movie movieData={props.movies[1]} /></li>
                <li><Movie movieData={props.movies[2]} /></li>
            </ul>
        </div>
    );
}