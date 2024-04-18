import axios from "axios";

export const getAllDates = async () => {
    const request = axios.get('http://localhost:3000/date')
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log('Error: ', err.message);
    });

    return request;
}