export interface ClipRequest {
  tweetUrl: string
  start?: string
  end?: string
}

export interface ClipResponse {
  downloadUrl: string
}
