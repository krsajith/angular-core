import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { JsonService } from '../api/json.service';
import { BasicApiStore } from './basic-api-store';
import { JsonStore } from './json-store';

import { Store } from './store';
import { StoreConfig } from './store-config';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stateObjects: { [k: string]: any } = {};

  stateQuery: { [k: string]: string } = {};

  stores: Map<string, Store<any>> = new Map();
  
  storeConfigs!:{ [k: string]: StoreConfig };

  constructor(private jsonService: JsonService,private apiService:ApiService) {
    jsonService.get<{ [k: string]: StoreConfig }>('/assets/application/config/stores.json').subscribe(data => {
      this.storeConfigs=data;
    });
  }

  getState<T extends Store<any>>(name: string): T {
    if (!this.stores.has(name)) {
      switch(this.storeConfigs[name].storeType) {
        case 'JsonStore':
          this.stores.set(name, new JsonStore(this.storeConfigs[name],this.jsonService));
          break;
        case 'ApiStore':
          this.stores.set(name, new BasicApiStore(this.storeConfigs[name],this.apiService));
      }
      
    }
    return this.stores.get(name) as T;
  }
}
