import {Talk, Model, Filters} from "./model";

export class App {
  filters: Filters = {speaker: null};
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
    if (this.filters.speaker) {
      return {
        talks: this.rawModel.talks.filter(t => t.speaker.indexOf(this.filters.speaker) > -1)
      };
    } else {
      return this.rawModel;
    }
  }

  rateTalk(talk: Talk, rating: number): void {
    talk.yourRating = rating;
  }

  watch(talk: Talk): void {
    console.log("Watching", talk);
  }
}
