import { getAuth, postAuth, get } from "./http";

const getAllQuaks = async (token: string) => {
  const response = await getAuth("tweets", token);
  const json = await response.json();
  const quaks = json.data;
  return quaks;
};

const createQuak = async (token: string, content: string) => {
  const response = await postAuth("tweets", token, { content });
  const json = await response.json();
  return json;
};

const getQuak = async (id: string) => {
  const response = await get(`tweets/${id}`);
  const json = await response.json();
  return json.data;
};

const deleteQuak = async (token: string, id: string) => {};

export { getAllQuaks, createQuak, deleteQuak, getQuak };