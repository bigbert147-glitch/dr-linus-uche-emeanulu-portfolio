import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="mb-4 font-serif text-5xl font-semibold text-midnight-800">
        Page Not Found
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-scholar-slate">
        The page you are looking for does not exist or may not have been
        published yet.
      </p>
      <Link
        to="/"
        className="inline-block rounded-lg bg-teal-600 px-6 py-3 font-sans font-medium text-white no-underline transition-colors hover:bg-teal-700"
      >
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound
