export const pages = [
  {
    path: 'about',
    title: 'About the hospital',
    description:
      'Learn about Avdhuth Hospital in Chandvad. Hospital history and care information will be added when confirmed.',
  },
  {
    path: 'doctors',
    title: 'Our doctors',
    description:
      'Browse illustrative doctor profiles; clinician details need hospital confirmation.',
  },
  {
    path: 'doctors/:id',
    title: 'Doctor profile',
    parent: { title: 'Our doctors', to: '/doctors' },
    description: 'Doctor profile information will be published after review and approval.',
  },
  {
    path: 'departments',
    title: 'Departments',
    description:
      'Explore illustrative department information pending confirmation by the hospital.',
  },
  {
    path: 'departments/:id',
    title: 'Department details',
    parent: { title: 'Departments', to: '/departments' },
    description:
      'Department services, facilities, and care-team information will be published after confirmation.',
  },
  {
    path: 'services',
    title: 'Services & treatments',
    description: 'Explore sample service categories pending confirmation by the hospital.',
  },
  {
    path: 'appointment',
    title: 'Book an appointment',
    description: 'Request an appointment using the client-side demonstration form.',
  },
  {
    path: 'emergency',
    title: 'Emergency care',
    description:
      'Emergency contact details and instructions will be added here once confirmed by the hospital.',
  },
  {
    path: 'contact',
    title: 'Contact us',
    description: 'Find the listed location and contact information confirmed by the hospital.',
  },
  {
    path: 'facilities',
    title: 'Facilities',
    description: 'Explore illustrative facility categories pending confirmation.',
  },
  {
    path: 'packages',
    title: 'Health packages',
    description: 'Review sample health package layouts pending hospital approval.',
  },
  {
    path: 'diagnostics',
    title: 'Diagnostics',
    description: 'Explore sample diagnostic categories pending hospital confirmation.',
  },
  {
    path: 'pharmacy',
    title: 'Pharmacy',
    description: 'Find information about hospital pharmacy services.',
  },
  {
    path: 'patient-resources',
    title: 'Patient resources',
    description:
      'Find practical visit information; operational details are pending hospital confirmation.',
  },
  {
    path: 'gallery',
    title: 'Gallery',
    description:
      'View hospital photographs when supplied and approved; current images are illustrative placeholders.',
  },
  {
    path: 'blog',
    title: 'Health articles',
    description:
      'Browse sample article drafts pending qualified clinical review and hospital approval.',
  },
  {
    path: 'blog/:slug',
    title: 'Article',
    parent: { title: 'Health articles', to: '/blog' },
    description:
      'This sample article will be published only after clinical review and hospital approval.',
  },
  {
    path: 'testimonials',
    title: 'Patient experiences',
    description: 'Patient stories will be shared here only after approval and consent.',
  },
  {
    path: 'careers',
    title: 'Careers',
    description: 'Explore career opportunities and application information from the hospital.',
  },
  {
    path: 'faq',
    title: 'Frequently asked questions',
    description: 'Find answers to common questions about hospital services and visits.',
  },
  {
    path: 'privacy',
    title: 'Privacy',
    description: 'Privacy information will be published after review and approval.',
  },
  {
    path: 'terms',
    title: 'Terms',
    description: 'Website terms will be published after review and approval.',
  },
]
