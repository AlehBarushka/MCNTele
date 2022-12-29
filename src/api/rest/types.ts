type Photo = {
  id: number;
  alt: string;
  photographer: string;
  liked: boolean;
  src: { tiny: string };
};

export interface IGetPhotosResponse {
  page: number;
  photos: Photo[];
}
