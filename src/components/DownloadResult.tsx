export const DownloadResult = ({ url }: { url: string }) => (
  <div className="bg-green-900 p-4 rounded text-center space-y-2">
    <p>✅ Video ready</p>

    <a
      href={url}
      className="underline text-green-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Video
    </a>

    <p className="text-sm text-gray-300">
      ⏳ Link expires in 10 minutes
    </p>
  </div>
)
