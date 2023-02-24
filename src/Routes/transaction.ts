import express from 'express';
import { Client } from '../entities/Client';
import { Transactions } from '../entities/Transctions';
import { Any } from 'typeorm';


const router = express.Router();

router.post('/api/client/:clientId/transaction', async (req,res)=>{
     const { clientId   } = req.params;
     const {type , amount } = req.body;

     const client = await Client.findOneBy({ id: parseInt(clientId)})

     if(!client){
        return res.status(404).json({ message : 'Client not found'});
     }

     const transaction = Transactions.create({
        type,
        amount,
        client
        
     });

     await transaction.save();

     if(type==='deposit'){
        client.balance = client.balance + amount;
     }
     else if(type==='withdraw'){
         client.balance = client.balance - amount;
     }

     await client.save();

     return res.status(200).json({ message : "Transaction Addded"  })
})

export { router as TransactionRouter }