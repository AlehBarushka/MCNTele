import { apiConfig } from "./config";

export const makeGetRequest = <TResponse>(
  query: string,
  config: RequestInit = {}
): Promise<TResponse> => {
  config.headers = { Authorization: apiConfig.apiKey };

  const url = apiConfig.baseUrl + query;

  return fetch(url, config)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }

      return response.json();
    })
    .then((data) => data as TResponse);
};
