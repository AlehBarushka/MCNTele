import { apiConfig } from "./config";

export const makeGetRequest = <TResponse>(
  query?: string,
  config: RequestInit = {}
): Promise<TResponse> => {
  config.headers = { Authorization: apiConfig.apiKey };

  const url = apiConfig.baseUrl + query;

  return fetch(url, config)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      if (!response.ok && response.status === 401) {
        throw new Error("Не авторизован");
      }

      throw new Error("Непредвиденная ошибка");
    })
    .then((data) => data as TResponse);
};
