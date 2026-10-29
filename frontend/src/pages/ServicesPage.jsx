import { useEffect } from 'react'
import { ArrowRight, HeartPulse, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  ContentPageHeader,
  ContentPreviewNotice,
} from '../components/content/ContentPageHeader.jsx'
import { Badge } from '../components/ui/badge.jsx'
import { ButtonLink } from '../components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader } from '../components/ui/card.jsx'
import { Container } from '../components/ui/container.jsx'
import { EmptyState } from '../components/ui/states.jsx'
import { Section, SectionHeading } from '../components/ui/section.jsx'
import { departments } from '../data/departments.js'
import { hospital } from '../data/hospital.js'
import { services } from '../data/services.js'

const iconByName = {
  activity: HeartPulse,
  heart: HeartPulse,
  users: Stethoscope,
}

function ServicesPage() {
  useEffect(() => {
    document.title = `Services & treatments | ${hospital.name}`
  }, [])

  const categories = [...new Set(services.map((service) => service.category))]

  return (
    <>
      <ContentPreviewNotice />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Services & treatments' }]}
        eyebrow="Care information"
        title="Services and treatments"
        description="Browse the illustrative service categories below. Avdhuth Hospital must confirm its available services and treatment information before publication."
      />
      <Section className="border-b border-border bg-white py-8">
        <Container>
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr]">
            {[
              ['Personalised guidance', 'Understand which care pathway may be relevant to your concern.'],
              ['Connected specialties', 'Move between services and departments with clearer information.'],
              ['Plan with confidence', 'Confirm scope, availability, preparation, and fees with the hospital.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-lg border border-border bg-medical-soft/40 p-5">
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      {services.length ? (
        categories.map((category) => {
          const categoryServices = services.filter((service) => service.category === category)
          return (
            <Section
              key={category}
              className={
                categories.indexOf(category) % 2 === 1
                  ? 'border-y border-border bg-white'
                  : undefined
              }
            >
              <Container>
                <SectionHeading
                  eyebrow="Illustrative category"
                  title={category}
                  description="Examples only; confirm service details and availability with the hospital."
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryServices.map((service) => {
                    const Icon = iconByName[service.icon] ?? Stethoscope
                    const department = departments.find((item) => item.id === service.departmentId)
                    return (
                      <Card key={service.id} className="h-full">
                        <CardHeader>
                          {service.image ? (
                            <img
                              src={service.image}
                              alt={`${service.name} service`}
                              className="aspect-[16/9] w-full rounded-md object-cover"
                            />
                          ) : (
                            <span className="flex size-11 items-center justify-center rounded-md bg-medical-primary-light text-primary">
                              <Icon aria-hidden="true" className="size-5" />
                            </span>
                          )}
                          <Badge variant="secondary" className="mt-3 w-fit">
                            Sample service
                          </Badge>
                          <h3 className="pt-2 font-heading text-lg leading-snug font-medium">
                            {service.name}
                          </h3>
                          <CardDescription>{service.summary}</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto">
                          {department ? (
                            <Link
                              className="inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-primary hover:text-medical-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                              to={`/departments/${department.slug}`}
                            >
                              {department.name}
                              <ArrowRight aria-hidden="true" className="size-4" />
                            </Link>
                          ) : (
                            <span className="text-sm text-muted-foreground">
                              Department to be confirmed
                            </span>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </Container>
            </Section>
          )
        })
      ) : (
        <Section>
          <Container>
            <EmptyState
              title="Service information is being prepared"
              description="Confirmed hospital services will appear here."
            />
          </Container>
        </Section>
      )}
      <Section className="bg-medical-primary py-12 text-white sm:py-14">
        <Container className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-white/75">Need more information?</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Contact the hospital to confirm available care.
            </h2>
          </div>
          <ButtonLink
            to="/contact"
            className="border-white bg-white text-medical-primary hover:bg-medical-primary-light"
          >
            Contact
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </Container>
      </Section>
    </>
  )
}

export { ServicesPage }
