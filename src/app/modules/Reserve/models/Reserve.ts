import { model, Model } from 'mongoose'

import IReserve from '../DTO/IReserve'
import reserveSchema from '../schemas/ReserveSchema'

export type ReserveModel = Model<IReserve>

const Reserve: ReserveModel = model<IReserve, ReserveModel>(
    'Reserve',
    reserveSchema
)

export default Reserve