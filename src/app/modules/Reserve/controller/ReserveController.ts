import axios from "axios";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { createNewDate } from "../../../utils/createNewDate";
import { getAllDates } from "../../../utils/getAllDates";
import { getAllTables } from "../../../utils/getAllTables";
import { getDate } from "../../../utils/getDate";
import { updateTableAvailability } from "../../../utils/updateTableAvailability";
import Reserve from '../models/Reserve'

class ReserveClass{

  public async create(req:Request, res:Response) {
        const { name,
            phone,
            cpf,
            qty_people,
            num_table,
            date,
            hour } = req.body

        const id = new mongoose.Types.ObjectId();

        let selectedDate = await getDate(date)

        let allTablesOfSelectedDate: any = []
        let selectedTable = []
    
        if (!selectedDate){

            selectedDate = await createNewDate(date);

        }

    
        allTablesOfSelectedDate = selectedDate.tables
        selectedTable = allTablesOfSelectedDate.filter((table: any) => {
            return table.num_table == num_table
        })
    
        const tableAvailability = selectedTable[0].reserved
    
        if(tableAvailability === true){
            res.status(422).json("Mesa já selecionada nesta data. Selecione uma mesa disponível!")
            return
        }

        if(!name || !qty_people || !phone){
            res.status(422).json("Todos os campos são obrigatórios.")
            return
        }

        const reserve = {
            id,
            name,
            phone,
            cpf,
            qty_people,
            num_table,
            date,
            hour
        }

        try {
            await Reserve.create(reserve)

            await updateTableAvailability(date, num_table, true)

            res.status(201).json('Reserva cadastrada com sucesso!')

        } catch(error) {
            res.status(500).json({error: error})
        }
    }

    public async getAll(req:Request, res:Response) {
        try {
            const reserve = await Reserve.find()
    
            res.status(200).json(reserve)
    
        } catch(error) {
            res.status(500).json({error: error})
        }
    }

    public async getById(req:Request, res:Response) {
        const id = req.params.id

        try {
            const reserve = await Reserve.findOne({_id: id})
    
            if(!reserve) {
                res.status(422).json("Reserva não encontrada!")
            }
    
            res.status(200).json(reserve)
    
        } catch(error) {
            res.status(500).json({error: error})
        }
    }

    public async delete(req:Request, res:Response) {
        const id = req.params.id

        const reserve = await Reserve.findOne({_id: id})

        if(!reserve) {
            res.status(422).json("Reserva não encontrada!")
            return
        }

        try {
            await Reserve.deleteOne({ _id: id })

            updateTableAvailability(reserve.date, reserve.num_table, false)

            res.status(200).json({ message: 'Reserva cancelada com sucesso!' })

        } catch(error) {
            res.status(500).json({error: error})
        }
    }
}


export const reserve = new ReserveClass();





