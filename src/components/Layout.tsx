import type { ReactNode } from "react"

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
    <div className="w-full max-w-xl space-y-6">
      <h1 className="text-3xl font-bold text-center">ClipX</h1>
      {children}
    </div>
  </div>
)
