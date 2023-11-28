import * as request from "../lib/request";

const BASE_URL = 'http://localhost:3030/jsonstore/coments';

export const create = async (gameId, username, text) => {
    const newComment = await request.post(BASE_URL, {
        gameId,
        username,
        text,
    });

    return newComment;
};