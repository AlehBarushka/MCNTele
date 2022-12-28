export interface IGetPhotosRequest {
  page?: number;
  perPage?: number;
}

type Photo = {
  id: number;
  alt: string;
  photographer: string;
  src: { small: string };
};

export interface IGetPhotosResponse {
  next_page: string;
  page: number;
  total_results: number;
  photos: Photo[];
}
