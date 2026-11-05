// ContentPlaceholder — a clearly marked placeholder shown where verified
// content has not yet been approved. It is never presented as real content.
//
// Using a distinct visual style (dashed border, muted background) makes it
// obvious to developers and reviewers that the content is pending.

function ContentPlaceholder({ label, description }) {
  return (
    <div
      className="rounded-lg border-2 border-dashed border-midnight-200 bg-midnight-50/50 px-6 py-8 text-center"
      role="note"
      aria-label="Content awaiting verification"
    >
      <p className="mb-1 font-sans text-sm font-semibold uppercase tracking-wider text-midnight-400">
        {label}
      </p>
      {description && (
        <p className="text-base leading-relaxed text-scholar-slate">
          {description}
        </p>
      )}
    </div>
  )
}

export default ContentPlaceholder
