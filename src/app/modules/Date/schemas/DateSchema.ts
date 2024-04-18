import { Schema } from 'mongoose'

import IDate from '../DTO/IDate'
import { DateModel } from '../models/Date';

const dateSchema = new Schema<IDate, DateModel>({
    date: { type: String },
    tables: { type: [{num_table: Number, reserved: Boolean}] }
})

export default dateSchema;