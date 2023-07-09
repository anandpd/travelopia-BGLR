export interface IFormSelection {
    formSelectionData: Array<IFormSelecItem>
}

export interface IFormSelecItem {
    heading: string;
    options: Array<string>;
    canSelectMultiple: boolean;
    key: string | number
}

export interface IMutationData {
    countries: Array<string>,
    intrests: Array<string>,
    travelersCount: string,
    budget: string,
    name: string,
    email: string,
    phn: string,
}