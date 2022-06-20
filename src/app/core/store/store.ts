import { Observable } from "rxjs";

export interface Store<T> {
    values(): Observable<T[]>;
    // filter(filter: any): Observable<T[]>;
}
