import * as MySQL from "mysql"

export interface IDatabase {
    query(statement: string): Promise<any>
}