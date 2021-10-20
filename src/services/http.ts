const apiUrl = process.env.REACT_APP_HTTP_API;
const get = (endpoint: string) => fetch(`${apiUrl}/${endpoint}`);
const post = (endpoint: string, data: object) =>
  fetch(`${apiUrl}/${endpoint}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

export { get, post };
