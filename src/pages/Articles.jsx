import PageHeader from "../components/PageHeader.jsx"
import SectionHeading from "../components/SectionHeading.jsx"

function Articles() {
  return (
    <>
      <PageHeader
        eyebrow="Articles"
        title="Articles & Professional Writing"
        description="Articles, essays, and professional writing by Dr. Linus, organised by category."
      />

      {/* Articles list area */}
      <section className="bg-scholar-paper py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Articles"
            title="Published Writing"
            description="Articles and professional writing by Dr. Linus will be listed here as they are published."
          />
          <div className="mx-auto max-w-2xl rounded-lg border border-midnight-100 bg-white p-8 text-center shadow-sm">
            <p className="text-base leading-relaxed text-scholar-slate">
              No articles are listed yet. Verified articles and professional
              writing by Dr. Linus will appear here once they have been
              reviewed and added. Each entry will display a title, category,
              date, summary, and a link to read the full content.
            </p>
          </div>
        </div>
      </section>

      {/* Category preview */}
      <section className="bg-midnight-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Categories"
            title="Article Categories"
            description="Writing will be organised under the following categories as articles are added."
          />
          <div className="flex flex-wrap justify-center gap-3">
            {["Research", "Commentary", "Professional", "Editorial"].map(
              (category) => (
                <span
                  key={category}
                  className="rounded-full border border-midnight-200 bg-white px-4 py-1.5 font-sans text-sm font-medium text-midnight-500"
                >
                  {category}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Articles
