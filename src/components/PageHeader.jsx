// PageHeader — a page-specific hero banner with an eyebrow label,
// title, and optional description. Used at the top of each dedicated
// page so every page has a consistent, professional header area.
function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-midnight-900 text-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        {eyebrow && (
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-teal-300">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-lg leading-relaxed text-midnight-200">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

export default PageHeader
