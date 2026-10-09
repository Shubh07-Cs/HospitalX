import { useEffect } from 'react'
import {
  ArrowRight,
  BedDouble,
  CalendarCheck2,
  Clock3,
  CreditCard,
  FileText,
  FlaskConical,
  HeartPulse,
  MapPin,
  Phone,
  ScanSearch,
  ShieldAlert,
} from 'lucide-react'
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
import { diagnostics } from '../data/diagnostics.js'
import { facilities } from '../data/facilities.js'
import { faqs } from '../data/faqs.js'
import { hospital } from '../data/hospital.js'
import { packages } from '../data/packages.js'
import { patientResources } from '../data/patientResources.js'

const facilityIcons = {
  diagnostics: ScanSearch,
  bed: BedDouble,
  hospital: HeartPulse,
  'heart-pulse': HeartPulse,
}

const patientResourceIcons = {
  calendar: CalendarCheck2,
  file: FileText,
  clock: Clock3,
  payment: CreditCard,
}

function FacilitiesPage() {
  useEffect(() => {
    document.title = `Facilities | ${hospital.name}`
  }, [])

  return (
    <>
      <Preview />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Facilities' }]}
        eyebrow="Hospital environment"
        title="Facilities and amenities"
        description="Explore sample facility categories. Avdhuth Hospital must confirm its facilities, services, and availability before publication."
      />
      <Section>
        <Container>
          {facilities.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {facilities.map((facility) => {
                const Icon = facilityIcons[facility.icon] ?? HeartPulse
                return (
                  <Card key={facility.id} className="h-full">
                    <CardContent className="flex h-full flex-col items-start pt-5">
                      <span className="flex size-11 items-center justify-center rounded-md bg-medical-primary-light text-primary">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <Badge variant="outline" className="mt-4">
                        Illustrative facility
                      </Badge>
                      <h2 className="mt-3 text-lg font-semibold">{facility.name}</h2>
                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        {facility.summary}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <EmptyState
              title="Facility information is being prepared"
              description="Confirmed hospital facilities will appear here."
            />
          )}
          <ButtonLink to="/contact" variant="outline" className="mt-7">
            Contact the hospital
            <ArrowRight aria-hidden="true" />
          </ButtonLink>
        </Container>
      </Section>
    </>
  )
}

function DiagnosticsPage() {
  useEffect(() => {
    document.title = `Diagnostics | ${hospital.name}`
  }, [])

  return (
    <>
      <Preview />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Diagnostics' }]}
        eyebrow="Diagnostic information"
        title="Diagnostics and testing"
        description="These are illustrative diagnostic categories only. Confirm available tests, preparation requirements, hours, and results process directly with the hospital."
      />
      <Section>
        <Container>
          {diagnostics.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {diagnostics.map((item) => (
                <Card key={item.id} className="h-full">
                  <CardHeader>
                    <span className="flex size-11 items-center justify-center rounded-md bg-medical-primary-light text-primary">
                      <FlaskConical aria-hidden="true" className="size-5" />
                    </span>
                    <Badge variant="secondary" className="mt-3 w-fit">
                      Sample category
                    </Badge>
                    <h2 className="pt-2 text-lg font-semibold">{item.name}</h2>
                    <CardDescription>{item.summary}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title="Diagnostic information is being prepared"
              description="Confirmed diagnostic services will appear here."
            />
          )}
          <Card className="mt-8 border-medical-primary-light bg-medical-primary-light/40">
            <CardContent className="flex items-start gap-3 py-5">
              <ShieldAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-medical-secondary-text">
                Test availability and preparation can vary. Confirm instructions with a qualified
                healthcare professional or the hospital before attending.
              </p>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  )
}

function PackagesPage() {
  useEffect(() => {
    document.title = `Health packages | ${hospital.name}`
  }, [])

  return (
    <>
      <Preview />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Health packages' }]}
        eyebrow="Preventive health"
        title="Health packages"
        description="Review sample package layouts. Package contents, eligibility, prices, and availability require hospital confirmation."
      />
      <Section>
        <Container>
          {packages.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {packages.map((item) => (
                <Card key={item.id} className="h-full">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit">
                      Illustrative package
                    </Badge>
                    <h2 className="pt-2 text-xl font-semibold">{item.name}</h2>
                    <CardDescription>{item.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex h-full flex-col">
                    <h3 className="text-sm font-semibold">Included tests</h3>
                    {item.includedTests.length ? (
                      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        {item.includedTests.map((test) => (
                          <li key={test}>{test}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2 text-sm text-muted-foreground">
                        Package contents to be confirmed
                      </p>
                    )}
                    <div className="mt-auto border-t border-border pt-4">
                      <p className="text-sm text-muted-foreground">
                        Price:{' '}
                        {item.priceApproved && item.price != null ? item.price : 'To be confirmed'}
                      </p>
                      <ButtonLink to="/contact" variant="outline" className="mt-4">
                        Enquire
                        <ArrowRight aria-hidden="true" />
                      </ButtonLink>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title="Health packages are being prepared"
              description="Approved package details will appear here."
            />
          )}
        </Container>
      </Section>
    </>
  )
}

function PatientResourcesPage() {
  useEffect(() => {
    document.title = `Patient resources | ${hospital.name}`
  }, [])

  const approvedFaqs = faqs.filter((faq) => faq.contentStatus === 'approved')

  return (
    <>
      <Preview />
      <ContentPageHeader
        breadcrumbs={[{ label: 'Patient resources' }]}
        eyebrow="Plan your visit"
        title="Patient resources"
        description="A quick guide to preparing for a hospital visit. Confirm appointment, admission, visiting, and payment details directly with Avdhuth Hospital before travelling."
      />
      <Section className="pt-8 sm:pt-10">
        <Container>
          <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <ShieldAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-amber-800" />
              <div>
                <h2 className="font-semibold text-amber-950">
                  Some visit details are still being confirmed
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-amber-950">
                  The checklists below are prompts for questions to ask, not hospital policies.
                  Confirm the latest information directly with the hospital before making plans.
                </p>
              </div>
            </div>
          </div>

          <nav
            aria-label="Patient resource sections"
            className="mb-8 flex gap-2 overflow-x-auto pb-2"
          >
            {patientResources.map((resource) => (
              <a
                key={resource.id}
                href={`#${resource.slug}`}
                className="inline-flex min-h-10 shrink-0 items-center rounded-md border border-border bg-white px-4 text-sm font-medium text-foreground transition-colors hover:bg-medical-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {resource.title}
              </a>
            ))}
            <a
              href="#frequently-asked-questions"
              className="inline-flex min-h-10 shrink-0 items-center rounded-md border border-border bg-white px-4 text-sm font-medium text-foreground transition-colors hover:bg-medical-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              FAQs
            </a>
          </nav>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="space-y-5">
              {patientResources.map((resource, index) => {
                const Icon = patientResourceIcons[resource.icon] ?? FileText
                return (
                  <section
                    key={resource.id}
                    id={resource.slug}
                    aria-labelledby={`${resource.id}-title`}
                    tabIndex={-1}
                    className="scroll-mt-24"
                  >
                    <Card>
                      <CardContent className="p-5 sm:p-6">
                        <div className="flex items-start gap-4">
                          <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-medical-primary-light text-primary">
                            <Icon aria-hidden="true" className="size-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h2 id={`${resource.id}-title`} className="text-lg font-semibold">
                                {resource.title}
                              </h2>
                              <Badge variant="outline">Details to be confirmed</Badge>
                            </div>
                            <p className="mt-2 leading-relaxed text-medical-secondary-text">
                              {resource.summary}
                            </p>
                            <h3 className="mt-5 text-sm font-semibold">What to confirm</h3>
                            <ul className="mt-2 space-y-2">
                              {resource.checklist.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm leading-relaxed text-medical-secondary-text"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    {index === 0 && (
                      <div className="my-5 flex flex-col gap-3 rounded-lg border border-medical-primary-light bg-medical-primary-light/40 p-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm leading-relaxed text-medical-secondary-text">
                          Need directions or confirmed contact details?
                        </p>
                        <ButtonLink to="/contact" variant="outline" size="sm">
                          Contact and location
                          <ArrowRight aria-hidden="true" />
                        </ButtonLink>
                      </div>
                    )}
                  </section>
                )
              })}
            </div>

            <aside className="space-y-4 lg:sticky lg:top-24">
              <Card>
                <CardContent className="py-5">
                  <h2 className="font-semibold">Quick links</h2>
                  <ul className="mt-3 space-y-1">
                    <li>
                      <Link
                        className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-primary hover:underline"
                        to="/appointment"
                      >
                        Request an appointment
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-primary hover:underline"
                        to="/emergency"
                      >
                        Emergency information
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-primary hover:underline"
                        to="/facilities"
                      >
                        Facilities
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-red-50">
                <CardContent className="py-5">
                  <h2 className="font-semibold text-medical-error">Urgent medical need?</h2>
                  <p className="mt-2 text-sm leading-relaxed text-medical-secondary-text">
                    Do not use the appointment request form for emergencies.
                  </p>
                  <ButtonLink to="/emergency" variant="destructive" size="sm" className="mt-4">
                    Emergency help
                    <ArrowRight aria-hidden="true" />
                  </ButtonLink>
                </CardContent>
              </Card>
            </aside>
          </div>

          <section
            id="frequently-asked-questions"
            aria-labelledby="patient-faq-heading"
            tabIndex={-1}
            className="mt-14 scroll-mt-24"
          >
            <SectionHeading
              eyebrow="Common questions"
              id="patient-faq-heading"
              title="Frequently asked questions"
              description="Answers will be added when the hospital confirms them."
            />
            {approvedFaqs.length ? (
              <div className="space-y-3">
                {approvedFaqs.map((faq) => (
                  <details
                    key={faq.id}
                    className="group rounded-lg border border-border bg-white p-5 open:border-medical-primary-light"
                  >
                    <summary className="cursor-pointer list-none font-semibold outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-between gap-4">
                        {faq.question}
                        <span
                          aria-hidden="true"
                          className="text-xl font-normal text-primary transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="mt-4 border-t border-border pt-4 leading-relaxed text-medical-secondary-text">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            ) : (
              <EmptyState
                title="Hospital-approved answers are coming"
                description="Questions about visiting hours, admission, insurance, and services will be answered here after the hospital confirms its guidance."
              />
            )}
          </section>
        </Container>
      </Section>
    </>
  )
}

function ContactPage() {
  useEffect(() => {
    document.title = `Contact | ${hospital.name}`
  }, [])

  const mapUrl = hospital.address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${hospital.name}, ${hospital.address}`)}`
    : null

  return (
    <>
      <ContentPageHeader
        breadcrumbs={[{ label: 'Contact' }]}
        eyebrow="Get in touch"
        title="Contact Avdhuth Hospital"
        description="Use the confirmed location listing for directions. Phone, email, and operating hours have not yet been confirmed for this website."
      />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="py-6">
              <h2 className="text-xl font-semibold">Location</h2>
              {hospital.address ? (
                <>
                  <p className="mt-4 flex items-start gap-3 leading-relaxed text-medical-secondary-text">
                    <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
                    {hospital.address}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Address shown from the public listing; confirm before travelling.
                  </p>
                  <ButtonLink
                    href={mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                    className="mt-5"
                  >
                    Open map
                    <ArrowRight aria-hidden="true" />
                  </ButtonLink>
                </>
              ) : (
                <p className="mt-3 text-muted-foreground">
                  A confirmed address will be added here.
                </p>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="py-6">
              <h2 className="text-xl font-semibold">Contact details</h2>
              <p className="mt-3 leading-relaxed text-medical-secondary-text">
                Phone, email, WhatsApp, and opening hours are not yet confirmed. We won’t publish
                unverified contact details.
              </p>
              <Badge variant="outline" className="mt-4">
                Awaiting hospital confirmation
              </Badge>
              <p className="mt-5 text-sm text-muted-foreground">
                For an appointment request, you can use the local form preview.
              </p>
              <ButtonLink to="/appointment" className="mt-4">
                Appointment request
                <ArrowRight aria-hidden="true" />
              </ButtonLink>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  )
}

function EmergencyPage() {
  useEffect(() => {
    document.title = `Emergency information | ${hospital.name}`
  }, [])

  return (
    <>
      <ContentPageHeader
        breadcrumbs={[{ label: 'Emergency' }]}
        eyebrow="Urgent help"
        title="Emergency information"
        description="For an immediate emergency in India, call the national emergency number. The hospital’s own emergency phone number is not yet confirmed."
      />
      <Section>
        <Container className="max-w-4xl">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-white text-medical-emergency">
                  <ShieldAlert aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-medical-error">
                    Need emergency help now?
                  </h2>
                  <p className="mt-2 leading-relaxed text-medical-secondary-text">
                    Call India’s emergency response number 112 or go to the nearest emergency
                    facility. Do not use the appointment request form for emergencies.
                  </p>
                </div>
              </div>
              <ButtonLink href="tel:112" variant="destructive" className="shrink-0">
                <Phone aria-hidden="true" />
                Call 112
              </ButtonLink>
            </CardContent>
          </Card>
          <Card className="mt-5">
            <CardContent className="py-5">
              <h2 className="font-semibold">Hospital emergency contact</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Avdhuth Hospital’s emergency phone number and emergency service availability have
                not been verified. Contact information will be added after confirmation.
              </p>
              <Link
                className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                to="/contact"
              >
                View location and contact details
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </CardContent>
          </Card>
        </Container>
      </Section>
    </>
  )
}

function Preview() {
  return <ContentPreviewNotice />
}

export {
  ContactPage,
  DiagnosticsPage,
  EmergencyPage,
  FacilitiesPage,
  PackagesPage,
  PatientResourcesPage,
}
