/* tslint:disable:no-unused-variable */
import {fakeAsync, tick} from '@angular/core/testing';

import { FiltersCmp } from './filters.component';

describe('FiltersCmp', () => {
  describe("when filters change", () => {
    it('should fire a change event after 200 millis', fakeAsync(() => {
      const component = new FiltersCmp((v) => v);

      const events = [];
      component.change.subscribe(v => events.push(v));

      component.filters.controls['title'].setValue('N');
      setTimeout(() => { component.filters.controls['title'].setValue('Ne'); }, 150);
      setTimeout(() => { component.filters.controls['title'].setValue('New'); }, 200);

      expect(events).toEqual([]);

      tick(1000);

      // only one item because of debouncing
      expect(events).toEqual([
        {title: 'New', speaker: null, highRating: false}
      ]);

      component.filters.controls['title'].setValue('New!');

      tick(1000);

      expect(events).toEqual([
        {title: 'New', speaker: null, highRating: false},
        {title: 'New!', speaker: null, highRating: false}
      ]);
    }));
  });
});
