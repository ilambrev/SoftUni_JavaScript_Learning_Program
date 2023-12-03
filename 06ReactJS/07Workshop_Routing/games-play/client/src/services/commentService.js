import * as request from "../lib/request";

const BASE_URL = 'http://localhost:3030/data/comments';

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${BASE_URL}?${query.toString()}`);

    return result;
};

export const create = async (gameId, text) => {
    const newComment = await request.post(BASE_URL, {
        gameId,
        text,
    });

    return newComment;
};