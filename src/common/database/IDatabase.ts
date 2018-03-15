import * as MySQL from "mysql"

export interface IDatabase {
    query(statement: MySQL.Query): Promise<any>
}