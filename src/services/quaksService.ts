import { getAuth, postAuth, get, putAuth, deleteAuth } from "./http";

const getAllQuaks = async (token: string) => {
  const response = await getAuth("tweets", token);
  const json = await response.json();
  const quaks = json.data;
  return quaks;
};

const createQuak = async (token: string, content: string) => {
  const response = await postAuth("tweets", token, { content });
  const json = await response.json();
  return json.data;
};

const getQuak = async (id: string) => {
  const response = await get(`tweets/${id}`);
  const json = await response.json();
  return json.data;
};

const likeQuak = async (token: string, tweetId: string) => {
  const response = await postAuth("tweets/likes", token, { like: 1, tweetId });
  const json = await response.json();
  return json;
};

const commentQuak = async (token: string, tweetId: string, comment: string) => {
  const response = await postAuth("tweets/comments", token, {
    tweetId,
    comment,
  });
  const json = await response.json();
  return json;
};

const deleteQuak = async (token: string, tweetId: string) => {
  const response = await deleteAuth("tweets", token, { tweetId });
  const json = await response.json();
  return json;
};

export { getAllQuaks, createQuak, deleteQuak, getQuak, commentQuak, likeQuak };
