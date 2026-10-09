import { MessageCircle, Phone, ShieldAlert } from "lucide-react"
import { cn } from "cn"
import { Link } from "react-router-dom"
import { getTelephoneHref } from "./contactLinks.js"

function FloatingActions({
  phone,
  emergencyPhone,
  whatsappNumber,
  className,
}) {
  const whatsappDigits = whatsappNumber?.replace(/\D/g, "")
  const hasWhatsApp = Boolean(whatsappDigits && whatsappDigits.length >= 8)
  const phoneHref = getTelephoneHref(phone)
  const emergencyHref = getTelephoneHref(emergencyPhone)

  return (
    <aside
      aria-label="Quick contact actions"
      className={cn(
        "fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2 sm:right-6 sm:bottom-6",
        className
      )}
    >
      {hasWhatsApp && (
        <a
          className="inline-flex min-h-12 items-center gap-2 rounded-md bg-medical-success px-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-success"
          href={`https://wa.me/${whatsappDigits}`}
          aria-label="Chat with the hospital on WhatsApp"
        >
          <MessageCircle aria-hidden="true" className="size-5" />
          <span>WhatsApp</span>
        </a>
      )}
      {phoneHref && (
        <a
          className="inline-flex min-h-12 items-center gap-2 rounded-md border border-border bg-white px-4 text-sm font-semibold text-foreground shadow-md transition-colors hover:bg-medical-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          href={phoneHref}
        >
          <Phone aria-hidden="true" className="size-5 text-primary" />
          <span>Call hospital</span>
        </a>
      )}
      {emergencyHref ? (
        <a
          className="inline-flex min-h-12 items-center gap-2 rounded-md bg-medical-emergency px-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-emergency"
          href={emergencyHref}
        >
          <Phone aria-hidden="true" className="size-5" />
          <span>Call emergency</span>
        </a>
      ) : (
        <Link
          className="inline-flex min-h-12 items-center gap-2 rounded-md bg-medical-emergency px-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-emergency"
          to="/emergency"
        >
          <ShieldAlert aria-hidden="true" className="size-5" />
          <span>Emergency help</span>
        </Link>
      )}
    </aside>
  )
}

export { FloatingActions }
