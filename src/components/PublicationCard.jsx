// PublicationCard — displays a single verified publication record.
// Only fields that exist and are verified are shown, so incomplete
// but adequately verified records do not break the interface.
//
// When both a DOI and a source URL exist, both links are shown
// so visitors can access the DOI record and the publisher page.

function PublicationCard({ publication }) {
  const { title, authors, year, venue, type, abstract, doi, url } = publication

  // Build the DOI link URL using the standard doi.org prefix.
  const doiUrl = doi ? `https://doi.org/${doi}` : null

  return (
    <article className="rounded-lg border border-midnight-100 bg-white p-6 shadow-sm">
      {/* Type badge — shown only when the type field exists */}
      {type && (
        <span className="mb-3 inline-block rounded-full bg-teal-50 px-3 py-1 font-sans text-xs font-medium text-teal-700">
          {type}
        </span>
      )}

      {/* Title — always prominent */}
      <h3 className="mb-2 font-serif text-xl font-semibold leading-snug text-midnight-800">
        {title}
      </h3>

      {/* Authors and year — shown when available */}
      {(authors || year) && (
        <p className="mb-2 font-sans text-base text-scholar-slate">
          {authors}
          {authors && year && " "}
          {year && <span className="font-medium">({year})</span>}
        </p>
      )}

      {/* Venue — shown when available */}
      {venue && (
        <p className="mb-3 font-sans text-sm italic text-midnight-500">
          {venue}
        </p>
      )}

      {/* Abstract — shown only when verified and available */}
      {abstract && (
        <p className="mb-4 text-base leading-relaxed text-scholar-slate">
          {abstract}
        </p>
      )}

      {/* Links — DOI and source URL shown separately when both exist.
          rel="noopener noreferrer" opens links safely in a new tab. */}
      {(doiUrl || url) && (
        <div className="flex flex-wrap gap-4">
          {doiUrl && (
            <a
              href={doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium text-teal-600 no-underline hover:text-teal-700"
            >
              DOI: {doi}
              <span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true"> &rarr;</span>
            </a>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium text-teal-600 no-underline hover:text-teal-700"
            >
              View publisher page
              <span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true"> &rarr;</span>
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default PublicationCard
