import { useState, useMemo } from "react"
import PageHeader from "../components/PageHeader.jsx"
import PageNotice from "../components/PageNotice.jsx"
import PublicationCard from "../components/PublicationCard.jsx"
import {
  getVerifiedPublications,
  getVerifiedYears,
  publicationTypes,
} from "../data/publications.js"

function Publications() {
  // ── State: search query, year filter, and type filter ───────────
  // useState lets the component remember the current search text and
  // filter selections. When any of these change, the component
  // re-renders and the results update automatically.
  const [searchQuery, setSearchQuery] = useState("")
  const [yearFilter, setYearFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  // Get verified publications and available filter options.
  // useMemo caches these so they are only recalculated when the
  // underlying data changes (not on every keystroke).
  // JS / ADVANCED — LEARN LATER
  // useMemo is a React hook that remembers a computed value. It runs
  // the function inside it only when the dependencies in the second
  // argument change. Here there are no dependencies ([]), so it runs
  // once. This avoids recalculating the verified list on every render.
  const verifiedPubs = useMemo(() => getVerifiedPublications(), [])
  const availableYears = useMemo(() => getVerifiedYears(), [])
  const availableTypes = useMemo(() => {
    // Only show types that have at least one verified publication
    const usedTypes = verifiedPubs.map((pub) => pub.type).filter(Boolean)
    const uniqueTypes = [...new Set(usedTypes)]
    return publicationTypes.filter((type) => uniqueTypes.includes(type))
  }, [verifiedPubs])

  // ── Filtering logic ─────────────────────────────────────────────
  // Apply search and filters together. This runs whenever the search
  // text, year filter, or type filter changes.
  // JS / ADVANCED — LEARN LATER
  // useMemo here depends on [verifiedPubs, searchQuery, yearFilter,
  // typeFilter]. When any of those change, the filter runs again and
  // the component re-renders with the new results.
  const filteredPubs = useMemo(() => {
    return verifiedPubs.filter((pub) => {
      // ── Year filter ──
      if (yearFilter !== "all" && pub.year !== Number(yearFilter)) {
        return false
      }

      // ── Type filter ──
      if (typeFilter !== "all" && pub.type !== typeFilter) {
        return false
      }

      // ── Search filter ──
      // Case-insensitive search across title, authors, venue, and abstract.
      // trim() removes leading and trailing spaces from the search text.
      const query = searchQuery.trim().toLowerCase()
      if (query) {
        const searchText = [
          pub.title || "",
          pub.authors || "",
          pub.venue || "",
          pub.abstract || "",
        ]
          .join(" ")
          .toLowerCase()

        if (!searchText.includes(query)) {
          return false
        }
      }

      return true
    })
  }, [verifiedPubs, searchQuery, yearFilter, typeFilter])

  // Check whether any filter or search is currently active
  const hasActiveFilters =
    searchQuery.trim() !== "" || yearFilter !== "all" || typeFilter !== "all"

  // Reset all filters and search
  function handleReset() {
    setSearchQuery("")
    setYearFilter("all")
    setTypeFilter("all")
  }

  // ── Empty dataset state ─────────────────────────────────────────
  // If no verified publications exist, show a notice instead of the
  // search interface. This avoids showing a nonfunctional search bar
  // as though it were ready.
  if (verifiedPubs.length === 0) {
    return (
      <>
        <PageHeader
          eyebrow="Publications"
          title="Academic Publications"
          description="A searchable list of Dr. Linus's verified publications with links to original records."
        />
        <section className="bg-scholar-paper py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <PageNotice
              title="Publication list is being prepared"
              description="Verified publication records will appear here once they have been checked against original sources and approved by Dr. Linus. The searchable list below will become available once records are added. Each entry will display the title, authors, year, publication venue, and a link to the original publication page or DOI record."
            />
          </div>
        </section>
      </>
    )
  }

  // ── Publications page with search and filters ───────────────────
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Academic Publications"
        description="A searchable list of Dr. Linus's verified publications with links to original records."
      />

      {/* Search and filter bar */}
      <section className="bg-scholar-paper py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-lg border border-midnight-100 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Search input */}
              <div className="flex-1">
                <label htmlFor="pub-search" className="sr-only">
                  Search publications by title, author, or keyword
                </label>
                <input
                  id="pub-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, author, or keyword..."
                  className="w-full rounded-md border border-midnight-200 px-4 py-2.5 font-sans text-base text-midnight-800 placeholder:text-midnight-300 focus:border-teal-500"
                />
              </div>

              {/* Year filter — populated from verified records */}
              <div>
                <label htmlFor="pub-year" className="sr-only">
                  Filter by publication year
                </label>
                <select
                  id="pub-year"
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="rounded-md border border-midnight-200 px-4 py-2.5 font-sans text-base text-midnight-800 focus:border-teal-500"
                >
                  <option value="all">All Years</option>
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type filter — populated from verified records */}
              <div>
                <label htmlFor="pub-type" className="sr-only">
                  Filter by publication type
                </label>
                <select
                  id="pub-type"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="rounded-md border border-midnight-200 px-4 py-2.5 font-sans text-base text-midnight-800 focus:border-teal-500"
                >
                  <option value="all">All Types</option>
                  {availableTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset button — clears search and filters */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-md border border-midnight-200 px-4 py-2.5 font-sans text-sm font-medium text-midnight-600 hover:bg-midnight-50"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Result count */}
            <p className="mt-3 font-sans text-sm text-midnight-400" aria-live="polite">
              {filteredPubs.length}{" "}
              {filteredPubs.length === 1 ? "publication" : "publications"}
              {hasActiveFilters && " matching your search"}
            </p>
          </div>
        </div>
      </section>

      {/* Publications list */}
      <section className="bg-midnight-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {filteredPubs.length > 0 ? (
            <div className="grid gap-6">
              {filteredPubs.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
              ))}
            </div>
          ) : (
            /* No-results message — shown when search/filters return nothing */
            <div
              className="rounded-lg border border-midnight-100 bg-white px-6 py-12 text-center shadow-sm"
              role="status"
            >
              <p className="mb-2 font-serif text-xl font-semibold text-midnight-700">
                No publications found
              </p>
              <p className="mb-6 text-base leading-relaxed text-scholar-slate">
                No publications match your current search or filters.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-md bg-teal-600 px-5 py-2.5 font-sans text-sm font-medium text-white no-underline hover:bg-teal-700"
              >
                Clear search and filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Publications
