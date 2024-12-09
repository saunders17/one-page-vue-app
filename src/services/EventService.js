import axios from "axios";

/* Mock Servers

  Mine: https://my-json-server.typicode.com/saunders17/dummy-db
  Touring Vue Router: https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router
    _limit: how many items to return per page
    _page: which page to return (num)

*/

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage, page) {
    const response = apiClient.get(`/events?_limit=${perPage}&_page=${page}`)
    console.log(response)
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}
