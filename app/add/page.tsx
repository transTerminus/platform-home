// page.tsx
'use client'
import { useState } from 'react'

export default function DataInputPage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCrawl = async () => {
    setLoading(true)
    // Crawling logic will be implemented later
    setLoading(false)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    // File handling logic will be implemented later
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      {/* Warning Banner */}
      <div className="mb-6 flex items-center border-l-4 border-amber-400 bg-amber-50 p-4">
        <svg
          className="mr-3 h-6 w-6 text-amber-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span className="text-amber-700">该功能正在开发中，敬请期待！</span>
      </div>

      <h1 className="mb-6 text-2xl font-bold">数据采集</h1>

      <div className="space-y-8">
        {/* URL Crawling Section */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">网站存档</h2>
          <div className="flex gap-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL"
              className="flex-1 rounded border px-4 py-2"
            />
            <button
              onClick={handleCrawl}
              disabled={loading}
              className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Crawling...' : 'Start Crawl'}
            </button>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="rounded-lg bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">文件上传</h2>
          <input
            type="file"
            onChange={handleFileUpload}
            className="rounded bg-blue-50 py-2 font-semibold file:border-0 file:px-4 file:text-sm"
          />
        </div>
      </div>
    </div>
  )
}
