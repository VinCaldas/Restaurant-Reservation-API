import { Schema } from 'mongoose'

import ITable from '../DTO/ITable'
import { TableModel } from '../models/Table';

const tableSchema = new Schema<ITable, TableModel>({
    num_table: { type: Number },
    reserved: { type: String }
})

export default tableSchema;