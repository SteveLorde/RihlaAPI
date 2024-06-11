import {IDataSeed} from "./IDataSeed";
import {DataContext} from "../../data/DataContext";

export class DataSeed implements IDataSeed {
    constructor(dataContext : DataContext) {
        this.dataContext = dataContext
    }

    dataContext : DataContext

    SeedData(): boolean {

        return true
    }
}