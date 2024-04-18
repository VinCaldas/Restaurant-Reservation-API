import { Request, Response } from "express";
import Table from '../models/Table'

class TableClass {

  public async create(req:Request, res:Response) {
        const { num_table, reserved } = req.body

        if(!num_table || reserved === undefined){
            res.status(422).json("Todos os campos são obrigatórios.")
            return
        }

        const table = {
            num_table,
            reserved
        }

        try {
            await Table.create(table)
            res.status(201).json('Mesa cadastrada com sucesso!')

        } catch(error) {
            res.status(500).json({error: error})
        }
    }

    public async get(req:Request, res:Response) {
        try {
            const table = await Table.find()
    
            res.status(200).json(table)
    
        } catch(error) {
            res.status(500).json({error: error})
        }
    }
}

export const table = new TableClass();

