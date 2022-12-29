type Photo = {
  id: number;
  alt: string;
  photographer: string;
  liked: boolean;
  src: { tiny: string };
};

export interface IGetPhotosResponse {
  next_page: string;
  page: number;
  total_results: number;
  photos: Photo[];
}
