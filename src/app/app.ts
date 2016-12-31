import {Talk, Model, Filters} from "./model";

export class App {
  model: Model = {
    filters: {speaker: null, title: null, minRating: 0},
    talks: [
      {
        "id": 898,
        "title": "Are we there yet?",
        "speaker": "Rich Hickey",
        "yourRating": null,
        "rating": 9.1
      },
      {
        "id": 777,
        "title": "The Value of Values",
        "speaker": "Rich Hickey",
        "yourRating": null,
        "rating": 8.5
      },
      {
        "id": 466,
        "title": "Simple Made Easy",
        "speaker": "Rich Hickey",
        "yourRating": null,
        "rating": 8.2
      },
      {
        "id": 322,
        "title": "Growing a Language",
        "speaker": "Guy Steele",
        "yourRating": null,
        "rating": 8.9
      }
    ]
  };

  get talks(): Talk[] {
    const filters = this.model.filters;
    return this.model.talks.filter(t => {
      const titlePass = filters.title ? t.title.indexOf(filters.title) > -1 : true;
      const speakerPass = filters.speaker ? t.speaker.indexOf(filters.speaker) > -1 : true;
      const ratingPass = t.rating >= filters.minRating;
      return titlePass && speakerPass && ratingPass;
    });
  }

  rateTalk(talk: Talk, rating: number): void {
    talk.yourRating = rating;
  }

  watch(talk: Talk): void {
    console.log("Watching", talk);
  }
}
