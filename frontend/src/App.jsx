import { lazy, Suspense } from 'react'
import { domAnimation, LazyMotion } from 'framer-motion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout.jsx'
import { LoadingState } from './components/ui/states.jsx'
import { hospital } from './data/hospital.js'
import { pages } from './data/pages.js'
import { AboutPage } from './pages/AboutPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { DepartmentsPage, DepartmentDetailPage } from './pages/DepartmentsPage.jsx'
import { DoctorDetailPage, DoctorsPage } from './pages/DoctorsPage.jsx'
import { BlogDetailPage, BlogPage } from './pages/BlogPages.jsx'
import { GalleryPage } from './pages/GalleryPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import {
  ContactPage,
  DiagnosticsPage,
  EmergencyPage,
  FacilitiesPage,
  PackagesPage,
  PatientResourcesPage,
} from './pages/InformationPages.jsx'
import { PlaceholderPage } from './pages/PlaceholderPage.jsx'
import { ServicesPage } from './pages/ServicesPage.jsx'

const AppointmentPage = lazy(() =>
  import('./pages/AppointmentPage.jsx').then((module) => ({
    default: module.AppointmentPage,
  }))
)

const pageByPath = {
  about: <AboutPage />,
  appointment: (
    <Suspense fallback={<LoadingState message="Loading appointment form" />}>
      <AppointmentPage />
    </Suspense>
  ),
  departments: <DepartmentsPage />,
  'departments/:id': <DepartmentDetailPage />,
  doctors: <DoctorsPage />,
  'doctors/:id': <DoctorDetailPage />,
  facilities: <FacilitiesPage />,
  diagnostics: <DiagnosticsPage />,
  packages: <PackagesPage />,
  'patient-resources': <PatientResourcesPage />,
  contact: <ContactPage />,
  emergency: <EmergencyPage />,
  gallery: <GalleryPage />,
  blog: <BlogPage />,
  'blog/:slug': <BlogDetailPage />,
  services: <ServicesPage />,
}

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout hospital={hospital} />}>
            <Route index element={<HomePage />} />
            {pages.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={pageByPath[route.path] ?? <PlaceholderPage {...route} />}
              />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LazyMotion>
  )
}

export default App
