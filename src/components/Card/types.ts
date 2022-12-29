export interface ICardProps {
  id: number;
  uri: string;
  description: string;
  isLiked: boolean;
  resetSorting: () => void;
}
