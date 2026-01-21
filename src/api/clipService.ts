import axios from "axios";
import type { ClipRequest, ClipResponse } from "../types/clip";



const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const clipVideo = async (data: ClipRequest): Promise<ClipResponse> => {
    const response = await api.post("/clip",data)
    return response.data;
}