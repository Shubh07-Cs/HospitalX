import { HeartPulse, Mail, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { Container } from "../ui/container.jsx"
import {
  footerNavigation,
  patientNavigation,
} from "./siteNavigation.js"
import { getTelephoneHref } from "./contactLinks.js"

function Footer({
  hospitalName = "Hospital name",
  description = "Hospital information and approved content will be added here.",
  phone,
  emergencyPhone,
  email,
  address,
  socialLinks = [],
}) {
  const phoneHref = getTelephoneHref(phone)
  const emergencyHref = getTelephoneHref(emergencyPhone)

  return (
    <footer className="border-t border-border bg-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8 lg:py-16">
        <div>
          <Link
            className="inline-flex items-center gap-3 rounded-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            to="/"
            aria-label={`${hospitalName} home`}
          >
            <span className="flex size-10 items-center justify-center rounded-md bg-medical-primary-light text-primary">
              <HeartPulse aria-hidden="true" className="size-6" />
            </span>
            <span className="font-semibold">{hospitalName}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <FooterLinks title="Explore" links={footerNavigation} />
        <FooterLinks title="Patient resources" links={patientNavigation} />

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {phoneHref && (
              <li>
                <a
                  className="inline-flex items-center gap-2 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  href={phoneHref}
                >
                  <Phone aria-hidden="true" className="size-4 shrink-0" />
                  {phone}
                </a>
              </li>
            )}
            {emergencyHref && (
              <li>
                <a
                  className="inline-flex items-center gap-2 font-medium text-medical-emergency hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-emergency"
                  href={emergencyHref}
                >
                  <Phone aria-hidden="true" className="size-4 shrink-0" />
                  Emergency: {emergencyPhone}
                </a>
              </li>
            )}
            {email && (
              <li>
                <a
                  className="inline-flex items-center gap-2 break-all hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  href={`mailto:${email}`}
                >
                  <Mail aria-hidden="true" className="size-4 shrink-0" />
                  {email}
                </a>
              </li>
            )}
            {address && (
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                <span>{address}</span>
              </li>
            )}
            {socialLinks.length > 0 && (
              <li className="pt-2">
                <h3 className="text-sm font-semibold text-foreground">Social</h3>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                  {socialLinks.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        className="hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )}
            {!phoneHref &&
              !emergencyHref &&
              !email &&
              !address &&
              socialLinks.length === 0 && (
              <li className="max-w-xs leading-relaxed">
                Contact details will be added after client approval.
              </li>
              )}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {hospitalName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link className="hover:text-primary focus-visible:outline-2 focus-visible:outline-primary" to="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-primary focus-visible:outline-2 focus-visible:outline-primary" to="/terms">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              to={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Footer }
