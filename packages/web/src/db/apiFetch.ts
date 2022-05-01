import { env } from "app-env";
import { makeFetch } from "utils/fetch";

const apiFetch = makeFetch(env.REACT_APP_API_ENDPOINT, 12000, () => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  return headers;
});

export default apiFetch;
