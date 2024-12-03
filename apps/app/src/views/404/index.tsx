import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
    <main className="container mx-auto flex w-full flex-1 flex-col p-4 justify-center">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="animate-bounce text-4xl font-bold tracking-tighter sm:text-5xl dark:text-background">
            404
          </h1>
          <p className="text-gray-500">
            I think you're lost. Let's get you back on track.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex h-10 items-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
          Return to website
        </Link>
      </div>
    </main>
  )
}
