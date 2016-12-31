import {Filters} from "./model";

export function createFiltersObject({title, speaker, highRating}: {title: string, speaker: string, highRating: false}): Filters {
  const minRating = highRating ? 9 : 0;
  return {speaker, title, minRating};
}
