import { useState, useMemo } from "react";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PageNotice from "../components/PageNotice.jsx";
import PublicationCard from "../components/PublicationCard.jsx";

import { researchThemes } from "../data/homeContent.js";

import {
  getVerifiedPublications,
  getVerifiedYears,
  publicationTypes,
} from "../data/publications.js";

function Research() {
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const verifiedPubs = useMemo(() => getVerifiedPublications(), []);
  const availableYears = useMemo(() => getVerifiedYears(), []);

  const availableTypes = useMemo(() => {
    const usedTypes = verifiedPubs.map((pub) => pub.type).filter(Boolean);

    return publicationTypes.filter((type) => usedTypes.includes(type));
  }, [verifiedPubs]);

  const filteredPubs = useMemo(() => {
    return verifiedPubs.filter((pub) => {
      if (yearFilter !== "all" && pub.year !== Number(yearFilter)) {
        return false;
      }

      if (typeFilter !== "all" && pub.type !== typeFilter) {
        return false;
      }

      const query = searchQuery.trim().toLowerCase();

      if (query) {
        const searchText = [
          pub.title || "",
          pub.authors || "",
          pub.venue || "",
          pub.abstract || "",
        ]
          .join(" ")
          .toLowerCase();

        if (!searchText.includes(query)) {
          return false;
        }
      }

      return true;
    });
  }, [verifiedPubs, searchQuery, yearFilter, typeFilter]);

  const hasActiveFilters =
    searchQuery.trim() !== "" || yearFilter !== "all" || typeFilter !== "all";

  function handleReset() {
    setSearchQuery("");
    setYearFilter("all");
    setTypeFilter("all");
  }

  return (
    <>
      <PageHeader
        eyebrow="Research & Publications"
        title="Research Interests & Academic Publications"
        description="Explore Dr. Linus Uche Emeanulu&apos;s research themes and verified academic publications."
      />

      {/* Research overview */}
      <section className="bg-scholar-paper py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading eyebrow="Overview" title="Research Direction" />

          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-base leading-relaxed text-scholar-slate">
              Dr. Linus&apos;s research spans operational risk management, knowledge
              management, leadership, organisational behaviour, and higher
              education. His work is grounded in the study of small and
              medium-sized enterprises, particularly in the Nigerian context,
              and extends to student experience in UK universities.
            </p>

            <p className="text-base leading-relaxed text-scholar-slate">
              The research themes below are derived from the topics of his
              verified publications and professional profile. They reflect areas
              present in his published work rather than a formal research
              statement.
            </p>
          </div>
        </div>
      </section>

      {/* Research themes */}
      <section className="bg-midnight-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Research Areas"
            title="Research Themes"
            description="Five connected research areas drawn from Dr. Linus&apos;s published work."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchThemes.map((theme) => (
              <article
                key={theme.id}
                className="rounded-lg border border-midnight-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-2 font-serif text-xl font-semibold text-midnight-700">
                  {theme.title}
                </h3>

                <p className="text-base leading-relaxed text-scholar-slate">
                  {theme.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Academic publications */}
      <section className="bg-scholar-paper py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Academic Work"
            title="Publications"
            description="Browse verified research publications, conference papers, and book chapters."
          />

          {verifiedPubs.length === 0 ? (
            <PageNotice
              title="Publication list is being prepared"
              description="Verified publication records will appear here once they are available."
            />
          ) : (
            <>
              {/* Search and filters */}
              <div className="mb-8 rounded-lg border border-midnight-100 bg-white p-4 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex-1">
                    <label htmlFor="research-search" className="sr-only">
                      Search publications
                    </label>

                    <input
                      id="research-search"
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search by title, author, or keyword..."
                      className="w-full rounded-md border border-midnight-200 px-4 py-2.5 font-sans text-base text-midnight-800 placeholder:text-midnight-300 focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="research-year" className="sr-only">
                      Filter by year
                    </label>

                    <select
                      id="research-year"
                      value={yearFilter}
                      onChange={(event) => setYearFilter(event.target.value)}
                      className="w-full rounded-md border border-midnight-200 px-4 py-2.5 font-sans text-base text-midnight-800 focus:border-teal-500"
                    >
                      <option value="all">All Years</option>

                      {availableYears.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="research-type" className="sr-only">
                      Filter by publication type
                    </label>

                    <select
                      id="research-type"
                      value={typeFilter}
                      onChange={(event) => setTypeFilter(event.target.value)}
                      className="w-full rounded-md border border-midnight-200 px-4 py-2.5 font-sans text-base text-midnight-800 focus:border-teal-500"
                    >
                      <option value="all">All Types</option>

                      {availableTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

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

                <p
                  className="mt-3 font-sans text-sm text-midnight-400"
                  aria-live="polite"
                >
                  {filteredPubs.length}{" "}
                  {filteredPubs.length === 1 ? "publication" : "publications"}
                  {hasActiveFilters && " matching your search"}
                </p>
              </div>

              {/* Publication records */}
              {filteredPubs.length > 0 ? (
                <div className="grid gap-6">
                  {filteredPubs.map((pub) => (
                    <PublicationCard key={pub.id} publication={pub} />
                  ))}
                </div>
              ) : (
                <div
                  className="rounded-lg border border-midnight-100 bg-white px-6 py-12 text-center shadow-sm"
                  role="status"
                >
                  <h3 className="mb-2 font-serif text-xl font-semibold text-midnight-700">
                    No publications found
                  </h3>

                  <p className="mb-6 text-base leading-relaxed text-scholar-slate">
                    No publications match your current search or filters.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-md bg-teal-600 px-5 py-2.5 font-sans text-sm font-medium text-white hover:bg-teal-700"
                  >
                    Clear search and filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Research;
