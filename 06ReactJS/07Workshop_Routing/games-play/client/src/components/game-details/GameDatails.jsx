import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/AuthContext";

const commentFormInitialState = {
    username: '',
    comment: '',
};

export default function GameDetails() {
    const { email } = useContext(AuthContext);
    const [game, setGame] = useState({});
    const [commentFormValues, setCommentFormValues] = useState(commentFormInitialState);
    const [comments, setComments] = useState([]);
    const { gameId } = useParams();

    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame);

        commentService.getAll(gameId)
            .then(setComments);
    }, [gameId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const newComment = await commentService.create(
            gameId,
            commentFormValues.comment,
        );

        setComments(state => [...state, { ...newComment, owner: { email } }]);
        resetCommentFormHandler();
    };

    const changeHandler = (e) => {
        let value = e.target.value

        setCommentFormValues(state => ({
            ...state,
            [e.target.name]: value,
        }));
    };

    const resetCommentFormHandler = () => {
        setCommentFormValues(commentFormInitialState);
    };

    return (

        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div className="buttons">
                    <a href="#" class="button">Edit</a>
                    <a href="#" class="button">Delete</a>
                </div> */}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form itemID="comment-form" className="form" onSubmit={addCommentHandler}>
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={commentFormValues.comment}
                        onChange={changeHandler}
                    >
                    </textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section >

    );
};