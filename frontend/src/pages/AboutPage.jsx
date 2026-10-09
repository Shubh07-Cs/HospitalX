import { useEffect } from 'react'
import { ArrowRight, Award, Eye, HeartHandshake, History, MapPin, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb.jsx'
import { ButtonLink } from '../components/ui/button.jsx'
import { Card, CardContent, CardHeader } from '../components/ui/card.jsx'
import { Container } from '../components/ui/container.jsx'
import { Badge } from '../components/ui/badge.jsx'
import { Section, SectionHeading } from '../components/ui/section.jsx'
import { aboutPage } from '../data/about.js'
import { hospital } from '../data/hospital.js'

const statements = [
  { ...aboutPage.vision, icon: Eye },
  { ...aboutPage.mission, icon: Target },
  { ...aboutPage.values, icon: HeartHandshake },
]

function AboutPage() {
  useEffect(() => {
    document.title = `About | ${hospital.name}`
  }, [])

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[38%] bg-medical-primary-light/60 lg:block"
        />
        <Container className="relative py-12 sm:py-16 lg:py-20">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<Link to="/">Home</Link>} />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-5">
                {aboutPage.eyebrow}
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {aboutPage.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-medical-secondary-text sm:text-lg">
                {aboutPage.introduction}
              </p>
            </div>

            <div className="relative flex min-h-64 items-center justify-center overflow-hidden rounded-xl border border-medical-primary-light bg-gradient-to-br from-medical-primary-light via-medical-accent-light to-medical-soft p-6 sm:min-h-80">
              <div
                aria-hidden="true"
                className="absolute -top-12 -right-10 size-52 rounded-full border-[30px] border-white/40"
              />
              <div className="relative max-w-sm rounded-lg border border-white/70 bg-white/90 p-6 text-center shadow-sm">
                <span className="mx-auto flex size-12 items-center justify-center rounded-md bg-medical-primary-light text-primary">
                  <MapPin aria-hidden="true" className="size-6" />
                </span>
                <h2 className="mt-4 text-lg font-semibold">Located in Chandvad</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {aboutPage.location}
                </p>
                <a
                  className="mt-4 inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-primary hover:text-medical-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  href={aboutPage.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View public location listing
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <SectionHeading
            eyebrow="Our story"
            title={aboutPage.history.title}
            description="A clear history helps visitors understand the hospital and the community it serves."
          />
          <Card className="h-fit">
            <CardContent className="flex gap-4 py-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-medical-primary-light text-primary">
                <History aria-hidden="true" className="size-5" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">Hospital history</h3>
                  <Badge variant="outline">{aboutPage.history.status}</Badge>
                </div>
                <p className="mt-2 leading-relaxed text-medical-secondary-text">
                  {aboutPage.history.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section className="border-y border-border bg-white">
        <Container>
          <SectionHeading
            eyebrow="What guides us"
            title="Our vision, mission, and values"
            description="These statements will reflect the hospital's own commitments once confirmed."
            align="center"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {statements.map(({ title, description, status, icon: Icon }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <span className="flex size-11 items-center justify-center rounded-md bg-medical-primary-light text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="pt-2 font-heading text-base leading-snug font-medium">{title}</h3>
                </CardHeader>
                <CardContent className="flex h-full flex-col">
                  <p className="leading-relaxed text-medical-secondary-text">{description}</p>
                  <Badge variant="outline" className="mt-5 w-fit">
                    {status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Care environment"
            title={aboutPage.facilities.title}
            description={aboutPage.facilities.description}
          />
          <Card>
            <CardContent className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-medical-primary-light text-primary">
                  <HeartHandshake aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">Facility information</h3>
                  <p className="mt-1 max-w-2xl leading-relaxed text-muted-foreground">
                    Specific facilities and services will be listed after they are verified with the
                    hospital.
                  </p>
                  <Badge variant="outline" className="mt-3">
                    {aboutPage.facilities.status}
                  </Badge>
                </div>
              </div>
              <ButtonLink to="/facilities" variant="outline">
                Explore facilities
                <ArrowRight aria-hidden="true" />
              </ButtonLink>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section className="border-y border-border bg-medical-page">
        <Container className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Recognition"
              title={aboutPage.achievements.title}
              description={aboutPage.achievements.description}
            />
            <Badge variant="outline">{aboutPage.achievements.status}</Badge>
          </div>
          <Card className="bg-white">
            <CardContent className="flex items-start gap-4 py-6">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-medical-soft text-medical-muted-text">
                <Award aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">Verified milestones</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  No awards or accreditations are listed here until the hospital confirms the
                  details.
                </p>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-xl bg-medical-primary p-6 text-white sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="text-sm font-semibold text-white/75">Avdhuth Hospital · Chandvad</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Find the information you need for your visit.
              </h2>
              <p className="mt-2 max-w-2xl leading-relaxed text-white/80">
                Explore patient resources or contact the hospital for confirmed information.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:shrink-0 sm:flex-row">
              <ButtonLink
                to="/patient-resources"
                className="border-white bg-white text-medical-primary hover:bg-medical-primary-light"
              >
                Patient resources
              </ButtonLink>
              <ButtonLink
                to="/contact"
                variant="outline"
                className="border-white text-white hover:bg-white/10 hover:text-white"
              >
                Contact
                <ArrowRight aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export { AboutPage }
