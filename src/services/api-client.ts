import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bb74ce6d52b545b284197b9bf8d0873c'
  }
})