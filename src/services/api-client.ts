import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8a28e40d8f5c4cd3bfcd5764e83e7d77',
  },
})
