import { requestClient } from "../utils/request";
const http = requestClient;
http.url = "https://api-exercise-trello.vercel.app/api/v1";
export default http;