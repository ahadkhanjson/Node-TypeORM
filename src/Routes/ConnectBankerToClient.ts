import express, { Router } from 'express';
import { Client } from '../entities/Client';
import { Banker } from '../entities/Banker';

const router  = express.Router();

router.put('/api/client/:clientId/banker/:bankerId',async (req,res)=>{

    
    
    const { clientId, bankerId } = req.params;

    const client = await Client.findOneBy({  id: parseInt(clientId)}) 
    const banker = await Banker.findOneBy({ id: parseInt(bankerId)}) 

    if(!banker && !client){
         
        return res.status(404).json({ message:"Either Client or Banker not found"});

    }



   banker!.clients = [
         client!
   ]

   banker?.save();

   


   return res.status(200).json({
     message:"done"
   })

})

export {router as ConnectBankerToClient }
