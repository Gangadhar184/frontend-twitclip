export const DownloadResult = ({ url }: { url: string }) => (
  <div className="bg-green-900 p-4 rounded text-center">
    <p className="mb-2">✅ Video ready</p>
    <a
      href={url}
      className="underline text-green-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Video
    </a>
  </div>
)
