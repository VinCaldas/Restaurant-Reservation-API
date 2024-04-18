import axios from "axios";
import { getAllTables } from "./getAllTables";

export const createNewDate = async (date: String) => {
    const allTables = await getAllTables()

    const request = await axios.post('http://localhost:3000/date', {
        date: date,
        tables: allTables
      })
      .then(async function (response) {
        const { data } = await axios.get(`http://localhost:3000/date/${date}`) 
        return data
      })
      .catch(function (error) {
        console.log(error);
      })

    return request;
}