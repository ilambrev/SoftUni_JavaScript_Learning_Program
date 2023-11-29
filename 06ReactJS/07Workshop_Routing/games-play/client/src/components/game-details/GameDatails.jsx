import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentService";

const commentFormInitialState = {
    username: '',
    comment: '',
};

export default function GameDetails() {
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
            commentFormValues.username,
            commentFormValues.comment,
        );

        setComments(state => [...state, newComment]);
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
                        {comments.map(({ _id, username, text }) => (
                            <li key={_id} className="comment">
                                <p>{username}: {text}</p>
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
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={commentFormValues.username}
                        onChange={changeHandler}
                    />
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