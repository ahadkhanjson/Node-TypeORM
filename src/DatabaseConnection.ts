import { DataSource } from "typeorm"
import { Client } from "./entities/Client"
import { Banker } from "./entities/Banker"
import { Transactions } from "./entities/Transctions"
export const DataBaseConnection = ()=>{
    return  new DataSource({
        type:"mssql",
        host: "localhost",
        port:1433,
        username:"augurs",
        password:"123456",
        database:"TestDb",
        entities:[Client , Banker , Transactions ],
        synchronize:true,
        extra: {
            trustServerCertificate: true,
          }
    })
}