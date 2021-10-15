import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 0, name: '0', headline: 'Headline 0', description: 'Description 0', image: 'waves.jpg', calltoaction: 'call to action' },
      { id: 1, name: '1', headline: 'Headline 1', description: 'Description 1', image: 'wave-at-la-jolla-cove.jpg', calltoaction: 'call to action' },
      { id: 2, name: '2', headline: 'Headline 2', description: 'Description 2', image: 'wave-breaking-on-big-rocks.jpg', calltoaction: 'call to action' },
      { id: 3, name: '3', headline: 'Headline 3', description: 'Description 3', image: 'wave-breaking-on-oceans-beach.jpg', calltoaction: 'call to action' },
      { id: 4, name: '4', headline: 'Headline 4', description: 'Description 4', image: 'wave-near-point-loma.jpg', calltoaction: 'call to action' },
      { id: 5, name: '5', headline: 'Headline 5', description: 'Description 5',
      image: 'waves-and-surfers-near-the-jetty-in-ocean-beach.jpg', calltoaction: 'call to action'  },
      { id: 6, name: '6', headline: 'Headline 6', description: 'Description 6', image: 'waves-at-ocean-beach.jpg', calltoaction: 'call to action'  },
      { id: 7, name: '7', headline: 'Headline 7', description: 'Description 7', image: 'waves.jpg', calltoaction: 'call to action'  },
      { id: 8, name: '8', headline: 'Headline 8', description: 'Description 8', image: 'waves-ocean.jpg', calltoaction: 'call to action'  },
      { id: 9, name: '9', headline: 'Headline 9', description: 'Description 9',
      image: 'waves-seen-from-the-sunset-cliffs-in-san-diego.jpg', calltoaction: 'call to action'  },
    ];
    return {items};
  }

  // Overrides the genId method to ensure that a item always has an id.
  // If the items array is empty,
  // the method below returns the initial number (11).
  // if the items array is not empty, the method below returns the highest
  // id id + 1.
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  }
}
