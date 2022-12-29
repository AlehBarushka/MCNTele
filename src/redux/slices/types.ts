export type IPhoto = {
  id: number;
  alt: string;
  photographer: string;
  liked: boolean;
  src: { tiny: string };
};

export interface IPhotoDataState {
  isLoading: boolean;
  photos: IPhoto[];
  total: number | null;
  error: unknown | null;
}
