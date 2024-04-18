import { model, Model } from 'mongoose'

import IDate from '../DTO/IDate'
import dateSchema from '../schemas/DateSchema'

export type DateModel = Model<IDate>

const Date: DateModel = model<IDate, DateModel>(
    'Date',
    dateSchema
)

export default Date