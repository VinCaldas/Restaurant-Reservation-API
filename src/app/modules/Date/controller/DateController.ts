import { Request, Response } from "express";
import { getAllTables } from "../../../utils/getAllTables";
import Date from '../models/Date'

class DateClass{

    public async create(req:Request, res:Response) {
        const { date } = req.body

        const dateObj = {
            date,
            tables: await getAllTables()
        }

        if(!date){
            res.status(422).json("Todos os campos são obrigatórios!")
            return
        }

        try {
            await Date.create(dateObj)
            res.status(201).json('Data cadastrada com sucesso!')

        } catch(error) {
            res.status(500).json({error: error})
        }
    }

    public async get(req:Request, res:Response) {
        try {
            const date = await Date.find()
    
            res.status(200).json(date)
    
        } catch(error) {
            res.status(500).json({error: error})
        }
    }

    public async update(req:Request, res:Response) {
        const date: String = req.params.date
        const num_table = req.params.num_table

        const { reserved } = req.body

        const dataObjectUpdated = {
            reserved
        }


        try {
            const updatedDate = await Date.updateMany({'date': date, 'tables.num_table': num_table}, {'$set': {
                'tables.$.reserved': reserved
            }})

            if(updatedDate.matchedCount){
                res.status(422).json("Data não encontrada!")
                return
            }

            res.status(200).json(dataObjectUpdated)

        } catch(error) {
            res.status(500).json({error: error})
        }
    }
    public async getByDate(req:Request, res:Response) {
        const date = req.params.date

        try {
            const dateResponse = await Date.findOne({date: date})
    
            if(!dateResponse) {
                res.status(422).json("Data não encontrada!")
                return
            }
    
            res.status(200).json(dateResponse)
    
        } catch(error) {
            res.status(500).json({error: error})
        }
    }
}


export const date = new DateClass();





