import { StoreType } from "./stor-type";

export interface StoreConfig {
    storeType:  StoreType;
    baseUrl:    string;
    path:       string;
    keyField:   string;
    labelField: string;
}

