import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Keeb } from './keeb';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const keebs = [
      { id: 1, name: 'Sandglass Ergo' ,price: '$600',mountstyle: 'Gasket Mount'},
      { id: 2, name: 'Aozora',price: '$150',mountstyle:'Sandwich Mount'},
      { id: 3, name: 'Matrix Corsa' ,price: '$500',mountstyle:'Leaf Spring Mount'},
      { id: 4, name: 'Project Adam',price: '$90',mountstyle:'Gasket Mount' },
      { id: 5, name: 'Seigaha',price: '$100',mountstyle:'Tray Mount' },
      { id: 6, name: 'Arc60',price: '$160', mountstyle:'Gasket Mount, Plate Mount, or Plateless' },
      { id: 7, name: 'Bakeneko60',price: '$120',mountstyle:'O Ring Gasket Mount' },
      { id: 8, name: 'Zoom65',price: '$165', mountstyle:'Gasket Mount' },
      { id: 9, name: 'Idobao80 Crystal',price: '$180', mountstyle:'Gasket Mount' }
    ];
    return {keebs};
  }

  genId(keebs: Keeb[]): number {
    return keebs.length > 0 ? Math.max(...keebs.map(keeb => keeb.id)) + 1 : 11;
  }
}