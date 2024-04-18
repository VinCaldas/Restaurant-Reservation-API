import { Schema } from 'mongoose'

import IReserve from '../DTO/IReserve'
import { ReserveModel } from '../models/Reserve';

const reserveSchema = new Schema<IReserve, ReserveModel>({
    id_reserve: { type: String },
    name: { type: String },
    phone: { type: String },
    cpf: { type: String },
    qty_people: { type: Number },
    num_table: { type: Number },
    date: { type: String },
    hour: { type: String }
})

export default reserveSchema;