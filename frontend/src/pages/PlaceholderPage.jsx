import { useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb.jsx"
import { ButtonLink } from "../components/ui/button.jsx"
import { Card, CardContent } from "../components/ui/card.jsx"
import { Container } from "../components/ui/container.jsx"
import { Section } from "../components/ui/section.jsx"
import { hospital } from "../data/hospital.js"

function PlaceholderPage({ title, description, parent }) {
  useEffect(() => {
    document.title = `${title} | ${hospital.name}`
  }, [title])

  return (
    <Section className="min-h-[60vh]">
      <Container>
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link to="/">Home</Link>} />
            </BreadcrumbItem>
            {parent && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink render={<Link to={parent.to}>{parent.title}</Link>} />
                </BreadcrumbItem>
              </>
            )}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-wide text-primary">
            {hospital.name}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-medical-secondary-text sm:text-lg">
            {description}
          </p>
        </div>

        <Card className="mt-10 max-w-3xl">
          <CardContent className="flex flex-col items-start gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold">This page is being prepared</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Page content will be added in the upcoming development stages.
              </p>
            </div>
            <ButtonLink to="/" variant="outline">
              Return home
              <ArrowRight aria-hidden="true" />
            </ButtonLink>
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}

export { PlaceholderPage }
