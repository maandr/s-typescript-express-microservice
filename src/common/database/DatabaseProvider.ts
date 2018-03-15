import { IProvider } from "../injection/IProvider"
import { IDatabase } from "./IDatabase"
import { Database } from "./Database"
import { DatabaseConfigProvider } from "./DatabaseConfigProvider";

export class DatabaseProvider implements IProvider<IDatabase> {

    private static instance: IDatabase = new Database(DatabaseConfigProvider.provide())

    provide(): IDatabase {
        return DatabaseProvider.instance;
    }
}