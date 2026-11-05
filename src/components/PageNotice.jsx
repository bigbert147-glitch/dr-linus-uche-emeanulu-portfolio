// PageNotice — a concise, professional development notice shown on
// pages where content is being prepared. Unlike ContentPlaceholder
// (which is for small content areas), PageNotice is for a whole
// section or page-level message.
//
// The style is solid (not dashed) to avoid making every page look
// like a collection of empty boxes. It reads as a professional
// "under construction" notice.

function PageNotice({ title, description }) {
  return (
    <div className="rounded-lg border border-midnight-100 bg-white px-6 py-8 shadow-sm">
      <div className="flex items-start gap-4">
        <svg
          className="mt-1 h-6 w-6 flex-shrink-0 text-teal-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0Z"
          />
        </svg>
        <div>
          <p className="mb-1 font-sans text-base font-semibold text-midnight-700">
            {title}
          </p>
          <p className="text-base leading-relaxed text-scholar-slate">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageNotice
