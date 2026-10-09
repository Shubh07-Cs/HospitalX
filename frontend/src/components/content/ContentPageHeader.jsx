import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb.jsx'
import { Container } from '../ui/container.jsx'

function ContentPageHeader({ breadcrumbs, eyebrow, title, description }) {
  return (
    <section className="border-b border-border bg-white">
      <Container className="py-10 sm:py-14">
        <Breadcrumb className="mb-7">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to="/">Home</Link>} />
            </BreadcrumbItem>
            {breadcrumbs.map((item) => (
              <Fragment key={item.to ?? item.label}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {item.to ? (
                    <BreadcrumbLink render={<Link to={item.to}>{item.label}</Link>} />
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-wide text-primary">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-medical-secondary-text sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  )
}

function ContentPreviewNotice() {
  return (
    <div className="border-b border-amber-200 bg-amber-50">
      <Container className="flex min-h-11 items-center gap-2 py-2 text-xs leading-relaxed text-amber-950 sm:text-sm">
        <span className="shrink-0 rounded bg-amber-100 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide">
          Design preview
        </span>
        <p>
          Content shown on this page is illustrative and requires confirmation by Avdhuth Hospital
          before publication.
        </p>
      </Container>
    </div>
  )
}

export { ContentPageHeader, ContentPreviewNotice }
