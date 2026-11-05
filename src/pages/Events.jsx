import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader.jsx"
import SectionHeading from "../components/SectionHeading.jsx"

function Events() {
  return (
    <>
      <PageHeader
        eyebrow="Events & Speaking"
        title="Events & Speaking Engagements"
        description="Upcoming and past speaking engagements, conferences, and academic events."
      />

      {/* Upcoming events */}
      <section className="bg-scholar-paper py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Upcoming"
            title="Upcoming Events"
          />
          <div className="mx-auto max-w-2xl rounded-lg border border-midnight-100 bg-white p-8 text-center shadow-sm">
            <p className="text-base leading-relaxed text-scholar-slate">
              No upcoming speaking engagements are listed at this time.
              Details of confirmed future events will appear here as they
              are scheduled.
            </p>
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="bg-midnight-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Archive"
            title="Past Events & Speaking Engagements"
            description="A record of conferences, guest lectures, and academic events Dr. Linus has participated in."
          />
          <div className="mx-auto max-w-2xl rounded-lg border border-midnight-100 bg-white p-8 text-center shadow-sm">
            <p className="text-base leading-relaxed text-scholar-slate">
              Records of past speaking engagements and conference
              presentations will be added here as details are documented.
              Dr. Linus&apos;s research has been presented at conferences
              including the British Academy of Management (BAM2019).
            </p>
            <div className="mt-6">
              <Link
                to="/publications"
                className="font-sans font-medium text-teal-600 no-underline hover:text-teal-700"
              >
                View related publications &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Events
