import axios from 'axios';

const axiosClient = axios.create({
   baseURL: 'http://localhost:4000/api/v1/',
   headers: {
      "Content-Type": "application/json",
      'Accept': "application/json",
   }
})

export default axiosClient;