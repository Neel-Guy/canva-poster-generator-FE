import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import FileUpload from '@/components/FileUpload'

export const Route = createFileRoute('/app')({
  component: LandingPage,
})

function LandingPage() {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      console.log('in dark mode')
    } else {
      console.log('in light mode')
    }
  }, [])
  return (
    <main data-theme="dark" className="view_window flex flex-col gap-10">
      <header className="flex flex-col justify-center items-center gap-2">
        <h1>Poster generator</h1>
        <p className="text-lg text-center font-light">
          Using our pre-generated template and the power of canva APIs, you can
          generate a new poster in a few minutes, without manually changing
          anything.
        </p>
      </header>
      <section className="w-full h-full flex flex-col gap-8">
        <div className="flex flex-row gap-20 flex-wrap w-full justify-center">
          <PlaceholderImage />
          <PlaceholderImage />
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-center items-center gap-4">
            <label htmlFor="templateText">Enter a text for the template</label>
            <input
              id="templateText"
              type="text"
              maxLength={20}
              placeholder="Enter a text for the template"
              className="px-4 py-2.5 text-lg rounded-md text-gray-800 bg-white border border-gray-400 w-100 outline-blue-500"
            />
          </div>
          <div className="w-full flex justify-center items-center gap-4">
            <label>Upload an image</label>
            <FileUpload />
          </div>
        </div>
      </section>
    </main>
  )
}

const PlaceholderImage = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-100 h-80 bg-gray-300 rounded-sm dark:bg-gray-700">
      <svg
        className="w-10 h-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>
  )
}
