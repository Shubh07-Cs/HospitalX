import { useEffect } from 'react'
import { ArrowLeft, SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/ui/button.jsx'
import { Container } from '../components/ui/container.jsx'
import { Section } from '../components/ui/section.jsx'
import { hospital } from '../data/hospital.js'

function NotFoundPage() {
  useEffect(() => {
    document.title = `Page not found | ${hospital.name}`
  }, [])

  return (
    <Section className="flex min-h-[65vh] items-center">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <span className="mx-auto flex size-14 items-center justify-center rounded-md bg-medical-soft text-medical-muted-text">
            <SearchX aria-hidden="true" className="size-7" />
          </span>
          <p className="mt-6 text-sm font-semibold tracking-wide text-primary">Error 404</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            We can&apos;t find that page
          </h1>
          <p className="mt-4 leading-relaxed text-medical-secondary-text">
            The link may be incorrect or the page may have moved. You can return to the home page to
            find the information you need.
          </p>
          <ButtonLink className="mt-7" to="/">
            <ArrowLeft aria-hidden="true" />
            Return home
          </ButtonLink>
          <nav
            aria-label="Popular pages"
            className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm"
          >
            <Link
              className="font-medium text-primary underline-offset-4 hover:underline"
              to="/departments"
            >
              Departments
            </Link>
            <Link
              className="font-medium text-primary underline-offset-4 hover:underline"
              to="/doctors"
            >
              Doctors
            </Link>
            <Link
              className="font-medium text-primary underline-offset-4 hover:underline"
              to="/patient-resources"
            >
              Patient resources
            </Link>
            <Link
              className="font-medium text-primary underline-offset-4 hover:underline"
              to="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </Section>
  )
}

export { NotFoundPage }
