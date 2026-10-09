import { useEffect, useRef, useState } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { HeartPulse, Menu, Phone, ShieldAlert, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { Button, ButtonLink } from '../ui/button.jsx'
import { Container } from '../ui/container.jsx'
import { getTelephoneHref } from './contactLinks.js'
import { primaryNavigation } from './siteNavigation.js'

function Navbar({ hospitalName = 'Hospital name', emergencyPhone }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const menuButtonRef = useRef(null)
  const menuRef = useRef(null)
  const emergencyHref = getTelephoneHref(emergencyPhone)

  useEffect(() => {
    let frameId

    function updateScrollState() {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 8)
      })
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', updateScrollState)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !menuRef.current) return
      const focusableElements = menuRef.current.querySelectorAll('a[href], button:not([disabled])')
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    function handleOutsideClick(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handleOutsideClick)
    menuRef.current?.querySelector('a')?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handleOutsideClick)
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm transition-shadow ${
        isScrolled ? 'border-medical-border shadow-sm' : 'border-transparent'
      }`}
    >
      <Container className="flex min-h-18 items-center justify-between gap-5">
        <Link
          className="inline-flex shrink-0 items-center gap-3 rounded-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          to="/"
          aria-label={`${hospitalName} home`}
        >
          <span className="flex size-10 items-center justify-center rounded-md bg-medical-primary-light text-primary">
            <HeartPulse aria-hidden="true" className="size-6" />
          </span>
          <span className="max-w-44 truncate font-semibold leading-tight">{hospitalName}</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  className={({ isActive }) =>
                    `inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-medical-soft hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      isActive
                        ? 'bg-medical-primary-light text-primary'
                        : 'text-medical-secondary-text'
                    }`
                  }
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          {emergencyHref && (
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-semibold text-medical-emergency hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-emergency"
              href={emergencyHref}
            >
              <Phone aria-hidden="true" className="size-4" />
              Call emergency
            </a>
          )}
          <ButtonLink to="/appointment">Book an appointment</ButtonLink>
          {!emergencyHref && (
            <Link
              className="inline-flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-semibold text-medical-emergency hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medical-emergency"
              to="/emergency"
            >
              <ShieldAlert aria-hidden="true" className="size-4" />
              Emergency
            </Link>
          )}
        </div>

        <Button
          ref={menuButtonRef}
          className="xl:hidden"
          size="icon"
          variant="outline"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </Container>

      {menuOpen && (
        <m.div
          id="mobile-navigation"
          ref={menuRef}
          initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-border bg-white shadow-lg xl:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Mobile navigation">
              <ul className="grid gap-1">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      className={({ isActive }) =>
                        `flex min-h-12 items-center rounded-md px-3 text-base font-medium hover:bg-medical-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                          isActive ? 'bg-medical-primary-light text-primary' : 'text-foreground'
                        }`
                      }
                      to={item.href}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-3 grid gap-2 border-t border-border pt-4">
                <ButtonLink to="/appointment" onClick={closeMenu}>
                  Book an appointment
                </ButtonLink>
                <ButtonLink
                  {...(emergencyHref ? { href: emergencyHref } : { to: '/emergency' })}
                  variant="destructive"
                  className="justify-start"
                  onClick={closeMenu}
                >
                  {emergencyHref ? (
                    <Phone aria-hidden="true" />
                  ) : (
                    <ShieldAlert aria-hidden="true" />
                  )}
                  {emergencyHref ? 'Call emergency' : 'Emergency information'}
                </ButtonLink>
              </div>
            </nav>
          </Container>
        </m.div>
      )}
    </header>
  )
}

export { Navbar }
