import { DataSource } from "typeorm"
import { Banker } from "./entities/Banker"
import { Client } from "./entities/Client"
import { Transactions } from "./entities/Transctions"
import  express  from "express"
import { ClientRouter } from "./Routes/Clients"
import { BankerRouter } from "./Routes/Banker"
import { TransactionRouter} from "./Routes/Transaction"
import { ConnectBankerToClient } from "./Routes/ConnectBankerToClient"
import { DataBaseConnection } from "./DatabaseConnection"

const app = express();


const main =  async()=>{

    app.use(express.json())
    app.use(ClientRouter);
    app.use(BankerRouter);
    app.use(TransactionRouter);
    app.use(ConnectBankerToClient);

    // const AppDataSource = new DataSource({
    //     type:"mssql",
    //     host: "localhost",
    //     port:1433,
    //     username:"augurs",
    //     password:"123456",
    //     database:"TestDb",
    //     entities:[Client , Banker , Transactions ],
    //     synchronize:true,
    //     extra: {
    //         trustServerCertificate: true,
    //       }
    // })

    // AppDataSource.initialize()
    // .then(()=>{
    //     console.log("DataSource initialized")
    // })
    // .catch((err)=>{
    //     console.log(err)
    //     console.log("Error During DataSource initialization")
    // })

    DataBaseConnection().initialize().then(()=>{
        console.log("DataSource initialized")
    }).catch((err)=>{
        console.log(err)
    })

    app.listen(8085,()=>[
        console.log("Server is Running on port 8085")
    ])
   
}

main()


console.log("index.js")