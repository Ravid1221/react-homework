import http from "./httpService";
const apiUrl = process.env.REACT_APP_API_URL;

export const getCards = () => http.get(`${apiUrl}/cards/cards`);

export const getMyCards = () => http.get(`${apiUrl}/cards/my-cards`);

export const createCard = async (card) => {
  await http.post(`${apiUrl}/cards`, card);
};
