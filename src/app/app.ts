import {Talk, Model, Filters} from "./model";

export class App {
  filters: Filters = {speaker: null, title: null, minRating: 0};
  rawModel: Model = {
    talks: [
      {
        "id": 898,
        "title": "Are we there yet",
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

  get model(): Model {
    const talks = this.rawModel.talks.filter(t => {
      const titlePass = this.filters.title ? t.title.indexOf(this.filters.title) > -1 : true;
      const speakerPass = this.filters.speaker ? t.speaker.indexOf(this.filters.speaker) > -1 : true;
      const ratingPass = t.rating >= this.filters.minRating;
      return titlePass && speakerPass && ratingPass;
    });
    return {talks};
  }

  rateTalk(talk: Talk, rating: number): void {
    talk.yourRating = rating;
  }

  watch(talk: Talk): void {
    console.log("Watching", talk);
  }
}
