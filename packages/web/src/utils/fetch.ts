type CustomFetch = (
  input: string,
  init?: RequestInit & { method: "get" | "post" | "patch" | "put" | "delete" }
) => Promise<any>;

export function makeFetch(
  baseEndpoint: string,
  timoutMs: number,
  getHeaders: () => HeadersInit
): CustomFetch {
  return async (input, init) => {
    const fetchController = new AbortController();
    const timeoutId = setTimeout(() => fetchController.abort(), timoutMs);

    const options = {
      headers: getHeaders(),
      ...init,
      signal: fetchController.signal,
    };

    const response = await fetch(baseEndpoint + input, options);

    if (!response.ok) {
      let message: string | null = null;
      try {
        const data = await response.json();
        message = data.message;
      } catch (error) {}

      throw new ResponseError(message ?? "Unknown error", response);
    }

    const data = await response.json();

    clearTimeout(timeoutId);
    return data;
  };
}

export class ResponseError extends Error {
  response: Response;

  constructor(message: string, response: Response) {
    super(message);
    this.response = response;
  }
}
