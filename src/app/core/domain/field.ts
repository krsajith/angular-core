export interface Field {
    name: string;
    type: string;
    label: string;
    value?: any;
    required?: boolean;
    order?: number;
    controlType?: string;
    options?: { key: string, value: string }[];
}
