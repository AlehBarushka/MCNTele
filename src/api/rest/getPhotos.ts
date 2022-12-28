import { makeGetRequest } from "../makeRequest";
import { IGetPhotosRequest, IGetPhotosResponse } from "./types";

export const getPhotos = async ({
  page = 1,
  perPage = 15,
}: IGetPhotosRequest) => {
  const query = `?query=landscape&locale=ru-RU&page=${page}&per_page=${perPage}`;

  return makeGetRequest<IGetPhotosResponse>(query);
};
