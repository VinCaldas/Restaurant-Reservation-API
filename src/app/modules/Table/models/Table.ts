import { model, Model } from 'mongoose'

import ITable from '../DTO/ITable'
import tableSchema from '../schemas/tableSchema'

export type TableModel = Model<ITable>

const Table: TableModel = model<ITable, TableModel>(
    'Table',
    tableSchema
)

export default Table