class TodoModel {
    rowNumber: number;
    rowDescription: string;
    rowAssigned: string;

    constructor(rowNumber: number, rowDescription: string, rowAssigned: string) {
        this.rowAssigned = rowAssigned;
        this.rowNumber = rowNumber;
        this.rowDescription = rowDescription;
    }

    

}