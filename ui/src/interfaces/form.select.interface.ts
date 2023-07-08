export interface IFormSelection {
    formSelectionData: Array<IFormSelecItem>
}

export interface IFormSelecItem {
    heading: string;
    options: Array<string>;
    canSelectMultiple: boolean;
    key: string | number
}