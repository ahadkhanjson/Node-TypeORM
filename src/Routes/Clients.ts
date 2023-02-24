import express from 'express';
import { Client } from '../entities/Client';

const router = express.Router();

router.post('/api/client',async (req,res) => {
    const {
        first_name,
        last_name,
        email,
        card_number,
        balance
    } = req.body;

    const client = Client.create({
        first_name,
        last_name,
        email,
        card_number,
        balance
    })

    Client.createQueryBuilder()
   
    await client.save();

    return res.status(200).json({
        client
    })
    
})

export { router as ClientRouter}
