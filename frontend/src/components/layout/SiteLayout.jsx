import { useEffect, useRef } from 'react'
import { m, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation, useNavigationType } from 'react-router-dom'
import { Footer } from './Footer.jsx'
import { FloatingActions } from './FloatingActions.jsx'
import { Navbar } from './Navbar.jsx'

function SiteLayout({ children, hospital = {} }) {
  const location = useLocation()
  const navigationType = useNavigationType()
  const shouldReduceMotion = useReducedMotion()
  const mainRef = useRef(null)
  const previousLocationRef = useRef(`${location.pathname}${location.hash}`)

  useEffect(() => {
    const currentLocation = `${location.pathname}${location.hash}`
    if (previousLocationRef.current === currentLocation) return
    previousLocationRef.current = currentLocation
    if (navigationType === 'POP') return

    const anchorId = location.hash.slice(1)
    const anchor = anchorId ? document.getElementById(anchorId) : null
    if (anchor) {
      anchor.focus({ preventScroll: true })
      anchor.scrollIntoView()
      return
    }

    mainRef.current?.focus({ preventScroll: true })
    window.scrollTo(0, 0)
  }, [location.hash, location.pathname, navigationType])

  const {
    name = 'Hospital name',
    description,
    phone,
    emergencyPhone,
    whatsappNumber,
    email,
    address,
    socialLinks,
  } = hospital

  return (
    <div className="flex min-h-screen flex-col">
      <a
        className="sr-only z-[60] rounded-md bg-white p-3 text-primary focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        href="#main-content"
      >
        Skip to main content
      </a>
      <Navbar hospitalName={name} emergencyPhone={emergencyPhone} />
      <main ref={mainRef} id="main-content" className="flex-1" tabIndex={-1}>
        {shouldReduceMotion ? (
          (children ?? <Outlet />)
        ) : (
          <m.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {children ?? <Outlet />}
          </m.div>
        )}
      </main>
      <Footer
        hospitalName={name}
        description={description}
        phone={phone}
        emergencyPhone={emergencyPhone}
        email={email}
        address={address}
        socialLinks={socialLinks}
      />
      <FloatingActions
        phone={phone}
        emergencyPhone={emergencyPhone}
        whatsappNumber={whatsappNumber}
      />
    </div>
  )
}

export { SiteLayout }
