import { Observable } from "rxjs";
import { ApiService } from "../api/api.service";
import { Store } from "./store";
import { StoreConfig } from "./store-config";

export class BasicApiStore implements Store<any> {
    values!: Observable<any[]>;
    constructor(private storeConfig:StoreConfig,apiService:ApiService) {

    }
}
