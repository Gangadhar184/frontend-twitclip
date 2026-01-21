import { useState } from "react"
import { ClipForm } from "../components/ClipForm"
import { DownloadResult } from "../components/DownloadResult"


export const Home = () => {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

  return (
    <>
      <ClipForm onSuccess={setDownloadUrl} />
      {downloadUrl && <DownloadResult url={downloadUrl} />}
    </>
  )
}