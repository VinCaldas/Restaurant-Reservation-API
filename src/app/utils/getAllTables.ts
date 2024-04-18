import axios from "axios";

export const getAllTables = async () => {
    const request = axios.get('http://localhost:3000/table')
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log('Error: ', err.message);
    });

    return request;
}