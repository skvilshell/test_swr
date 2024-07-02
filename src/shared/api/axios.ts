import axios from "axios"
import { CONSTANTS } from "../contants"

const http = axios.create({
   baseURL: CONSTANTS.BASE_URL,
})

const GET = (url: string) => http.get(url).then((res) => res.data)

export { http, GET }
