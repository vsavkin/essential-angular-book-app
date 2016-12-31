export interface Talk {
  id: number;
  title: string;
  speaker: string;
  yourRating: number;
  rating: number;
}

export interface Filters {
  speaker: string;
  title: string;
  minRating: number;
}

export interface Model {
  talks: Talk[];
  filters: Filters;
}
