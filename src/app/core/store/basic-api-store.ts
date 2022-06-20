import { Observable } from "rxjs";
import { ApiService } from "../api/api.service";
import { Store } from "./store";
import { StoreConfig } from "./store-config";

export class BasicApiStore implements Store<any> {
    
    constructor(private storeConfig:StoreConfig,apiService:ApiService) {

    }
    filter(filter: any): Observable<any> {
        throw new Error("Method not implemented.");
    }

    values(): Observable<any> {
        throw new Error("Method not implemented.");
    }
}
