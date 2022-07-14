import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JsonService } from '../api/json.service';
import { Store } from './store';
import { StoreConfig } from './store-config';

export class JsonStore implements Store<any> {
    protected _list$ = new BehaviorSubject<any[]>([]);
    values$ = this._list$.asObservable();

    constructor(
        private storeConfig: StoreConfig,
        private jsonService: JsonService
    ) {
        jsonService.get<any>(`${storeConfig.path}`).subscribe((data) => {
            console.log(data);
            this._list$.next(data);
        });
    }
}
