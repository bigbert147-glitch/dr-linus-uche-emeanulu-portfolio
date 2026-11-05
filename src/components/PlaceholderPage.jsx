// PlaceholderPage — shared template for pages awaiting content.
// Each page route uses this until its real content is built in a later stage.
import { Link } from "react-router-dom"

function PlaceholderPage({ title, description }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="mb-4 font-serif text-4xl font-semibold text-midnight-800">
        {title}
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-scholar-slate">
        {description}
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

export default PlaceholderPage
