import * as request from "../lib/request";

const BASE_URL = 'http://localhost:3030/data/games';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    return Object.values(result);
};

export const getOne = async (gameId) => {
    const result = await request.get(`${BASE_URL}/${gameId}`);

    return result;
};

export const getLatest = async () => {
    // let query = new URLSearchParams({
    //     sortBy: `_createdOn%20desc`,
    //     offset: 0,
    //     pageSize: 3,
    // });

    // const result = await request.get(`${BASE_URL}?${query}`);
    const result = await request.get(`${BASE_URL}?sortBy=_createdOn%20desc&offset=0&pageSize=3`);
    
    return result;
};

export const create = async (gameData) => {
    const result = await request.post(BASE_URL, gameData);

    return result;
};

export const edit = async (gameId, gameData) => {
    const result = await request.put(`${BASE_URL}/${gameId}`, gameData);

    return result;
};

export const remove = async (gameId) => request.remove(`${BASE_URL}/${gameId}`);