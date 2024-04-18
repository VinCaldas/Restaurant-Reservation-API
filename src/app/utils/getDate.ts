import axios from "axios";

export const getDate = (date: String) => {
    const request = axios.get(`http://localhost:3000/date/${date}`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log('Error: ', err.message);
    });

    return request;
}