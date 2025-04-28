'use client'

import { useState } from 'react'

function App() {
  const [url, setUrl] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Website Downloader
          </h1>
          <p className="text-lg text-white/80">
            Enter a URL to download website content
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (e.g., https://example.com)"
            className="flex-1 px-4 py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
            onClick={() => {
              // Add your download logic here
              console.log('Downloading:', url)
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
