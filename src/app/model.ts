export interface Talk {
  id: number;
  title: string;
  speaker: string;
  yourRating: number;
  rating: number;
}

export interface Filters {
  speaker: string;
}

export interface Model {
  talks: Talk[];
}
