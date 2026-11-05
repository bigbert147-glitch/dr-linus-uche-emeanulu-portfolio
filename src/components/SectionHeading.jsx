// SectionHeading — reusable section title with an eyebrow label above it.
// Used across homepage sections to keep heading style consistent.
function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-wider text-teal-600">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-semibold text-midnight-800 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-scholar-slate">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
