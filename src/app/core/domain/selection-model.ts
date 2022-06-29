export class SelectionModel<T> {
    private _selectedItems: Array<any> = [];

    test = 'test';

    constructor(private _isMultiple: boolean = false) {
    }

    toggle(value: T): void {
        if (this._selectedItems.includes(value)) {
            this._selectedItems.splice(this._selectedItems.indexOf(value), 1);
        } else {
            this._selectedItems.push(value);
        }
    }
    get selected(): Array<T> {
        return this._selectedItems;
    }
    
    isSelected(value: T): boolean {
        return this._selectedItems.includes(value);
    }
}

