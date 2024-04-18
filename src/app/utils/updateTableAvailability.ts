import axios from "axios";

export const updateTableAvailability = async (date: String, num_table: Number, availability: Boolean) => {
  const tableUpdate = {
    reserved: availability
  }
  
  const { data } = await axios.patch(`http://localhost:3000/date/${date}/${num_table}`, tableUpdate)

  return data;
}