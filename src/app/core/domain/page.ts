import { Field } from "./field";

export interface Page {
    fields: Field[];
    name?: string;
    title?: string;
    description?: string;
    url?:string
}
