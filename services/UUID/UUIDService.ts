import {IUUIDService} from "./IUUIDService";
import {v4 as uuidv4} from "uuid"

export class UUIDService implements IUUIDService {
    constructor() {

    }

    GenerateID(): string {
        return uuidv4()
    }
}