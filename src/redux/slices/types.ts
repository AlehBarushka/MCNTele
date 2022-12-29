export type IPhoto = {
  id: number;
  alt: string;
  photographer: string;
  liked: boolean;
  src: { tiny: string };
};

export interface IPhotoDataState {
  isLoading: boolean;
  page: number | undefined;
  photos: IPhoto[];
  error: unknown | null;
}
