import { makeGetRequest } from "../makeRequest";
import { IGetPhotosResponse } from "./types";

export const getPhotos = async (page: number = 1) => {
  const query = `?query=landscape&locale=ru-RU&page=${page}}`;

  return makeGetRequest<IGetPhotosResponse>(query);
};
