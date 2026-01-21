

import { useState } from "react";
import { useClipVideo } from "../hooks/useClipVideo";

export const ClipForm = ({ onSuccess }: { onSuccess: (url: string) => void }) => {
  const [tweetUrl, setTweetUrl] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  const { mutate, isPending, error } = useClipVideo()

  const submit = () => {
    mutate(
      { tweetUrl, start, end },
      { onSuccess: data => onSuccess(data.downloadUrl) }
    )
  }

  return (
    <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
      <input
        className="w-full p-2 rounded bg-gray-800"
        placeholder="Tweet URL"
        value={tweetUrl}
        onChange={e => setTweetUrl(e.target.value)}
      />

      <div className="flex gap-2">
        <input
          className="w-full p-2 rounded bg-gray-800"
          placeholder="Start (00:10)"
          value={start}
          onChange={e => setStart(e.target.value)}
        />
        <input
          className="w-full p-2 rounded bg-gray-800"
          placeholder="End (00:20)"
          value={end}
          onChange={e => setEnd(e.target.value)}
        />
      </div>

      <button
        onClick={submit}
        disabled={isPending}
        className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
      >
        {isPending ? "Processing..." : "Clip Video"}
      </button>

      {error && <p className="text-red-500">Something went wrong</p>}
    </div>
  )
}