export interface Field {
    name: string;
    type: string;
    label: string;
    value: any;
    store: string;
    required?: boolean;
    order: number;
    controlType: string;
    parentField:string
    joinColumn:string;
    labelField:string
    valueField:string
}
