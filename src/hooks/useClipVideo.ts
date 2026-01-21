import { useMutation } from "@tanstack/react-query"
import type { ClipRequest } from "../types/clip"
import { clipVideo } from "../api/clipService"


export const useClipVideo = () => {
    return useMutation({
        mutationFn: (data: ClipRequest) => clipVideo(data)
    })
}