import mongoose from "mongoose"
import { App } from "./app"
import 'dotenv/config'

mongoose.set('strictQuery', false)

mongoose.connect(`${process.env.MONGO_DB_LINK}`)
.then(() => {
    console.log("Conectado ao Mongoose")
    new App().server.listen(3000)
})
.catch((err) => console.log(err))