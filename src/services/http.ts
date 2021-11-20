const apiUrl = process.env.REACT_APP_HTTP_API;
const get = (endpoint: string) => fetch(`${apiUrl}/${endpoint}`);
const post = (endpoint: string, data: object) =>
  fetch(`${apiUrl}/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
const getAuth = (endpoint: string, token: string) =>
  fetch(`${apiUrl}/${endpoint}`, {
    headers: {
      "x-access-token": token,
    },
  });

const postAuth = (endpoint: string, token: string, data: object) =>
  fetch(`${apiUrl}/${endpoint}`, {
    headers: {
      "x-access-token": token,
    },
    body: JSON.stringify(data),
    method: "POST",
  });

const deleteAuth = (endpoint: string, token: string, data: object) =>
  fetch(`${apiUrl}/${endpoint}`, {
    headers: {
      "x-access-token": token,
    },
    body: JSON.stringify(data),
    method: "DELETE",
  });

const putAuth = (endpoint: string, token: string, data: object) =>
  fetch(`${apiUrl}/${endpoint}`, {
    headers: {
      "x-access-token": token,
    },
    body: JSON.stringify(data),
    method: "PUT",
  });
export { get, post, getAuth, postAuth, deleteAuth, putAuth };
