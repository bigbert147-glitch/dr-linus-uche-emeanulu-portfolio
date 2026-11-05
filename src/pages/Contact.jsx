import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader.jsx"
import SectionHeading from "../components/SectionHeading.jsx"
import { enquiryCategories } from "../data/contactCategories.js"
import { academicProfiles } from "../data/professionalProfile.js"

const socialProfiles = [
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/share/1M8t1pdyHb/",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/uc_ebuka_/",
  },
  {
    id: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@ucbukashow",
  },
]

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="For academic collaboration, research enquiries, speaking invitations, or professional contact."
      />

      <section className="bg-scholar-paper py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Enquiries"
            title="Enquiry Categories"
            description="Select the category that best matches your enquiry so it can be directed appropriately."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {enquiryCategories.map((category) => (
              <div
                key={category}
                className="rounded-lg border border-midnight-100 bg-white px-4 py-3 font-sans text-sm font-medium text-midnight-700 shadow-sm"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Connect"
            title="How to Reach Dr. Linus"
          />

          <div className="space-y-6">
            <div className="rounded-lg border border-midnight-100 bg-white p-6 shadow-sm">
              <h3 className="mb-3 font-serif text-lg font-semibold text-midnight-800">
                Direct Email Contact
              </h3>

              <p className="mb-4 text-base leading-relaxed text-scholar-slate">
                For academic, research, and professional enquiries, contact
                Dr. Linus using his official email address.
              </p>

              <a
                href="mailto:Macinfor20@gmail.com"
                className="font-sans text-base font-semibold text-teal-600 underline decoration-teal-200 underline-offset-4 hover:text-teal-700"
              >
                Macinfor20@gmail.com
              </a>
            </div>

            <div className="rounded-lg border border-midnight-100 bg-white p-6 shadow-sm">
              <h3 className="mb-3 font-serif text-lg font-semibold text-midnight-800">
                WhatsApp Contact
              </h3>

              <p className="mb-4 text-base leading-relaxed text-scholar-slate">
                For direct communication, you can reach Dr. Linus through
                WhatsApp.
              </p>

              <a
                href="https://wa.me/447435796561"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-teal-600 px-5 py-3 font-medium text-white transition-colors hover:bg-teal-700"
              >
                Message on WhatsApp
              </a>
            </div>

            {academicProfiles.length > 0 && (
              <div className="rounded-lg border border-midnight-100 bg-white p-6 shadow-sm">
                <h3 className="mb-3 font-serif text-lg font-semibold text-midnight-800">
                  Academic & Professional Profiles
                </h3>

                <p className="mb-4 text-base leading-relaxed text-scholar-slate">
                  Explore Dr. Linus&apos;s research and professional background
                  through these platforms.
                </p>

                <ul className="flex flex-wrap gap-5">
                  {academicProfiles.map((profile) => (
                    <li key={profile.id}>
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm font-medium text-teal-600 no-underline hover:text-teal-700"
                      >
                        {profile.label} &rarr;
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-lg border border-midnight-100 bg-white p-6 shadow-sm">
              <h3 className="mb-3 font-serif text-lg font-semibold text-midnight-800">
                Social Media
              </h3>

              <p className="mb-4 text-base leading-relaxed text-scholar-slate">
                Follow Dr. Linus on social media.
              </p>

              <ul className="flex flex-wrap gap-5">
                {socialProfiles.map((profile) => (
                  <li key={profile.id}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm font-medium text-teal-600 no-underline hover:text-teal-700"
                    >
                      {profile.label} &rarr;
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-midnight-100 bg-white p-6 text-center shadow-sm">
              <p className="mb-4 text-base leading-relaxed text-scholar-slate">
                For research collaboration, publication enquiries, or
                speaking invitations, you can also explore Dr. Linus&apos;s
                academic background.
              </p>

              <Link
                to="/about"
                className="font-sans font-medium text-teal-600 no-underline hover:text-teal-700"
              >
                Learn more about Dr. Linus &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
