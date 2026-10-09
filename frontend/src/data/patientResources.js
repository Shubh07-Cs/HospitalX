export const patientResources = [
  {
    id: 'before-your-visit',
    slug: 'before-your-visit',
    title: 'Before your visit',
    summary: 'Confirm appointment and visit requirements with the hospital before travelling.',
    checklist: [
      'Confirm your appointment date and time.',
      'Ask the hospital which documents or records to bring.',
      'Check the hospital location and travel arrangements.',
    ],
    icon: 'calendar',
    contentStatus: 'sample',
  },
  {
    id: 'admission-information',
    slug: 'admission',
    title: 'Admission information',
    summary: 'Admission steps and required documents have not yet been confirmed.',
    checklist: [
      'Ask which documents are required for admission.',
      'Confirm any preparation instructions with your care team.',
      'Ask whom to contact if your plans change.',
    ],
    icon: 'file',
    contentStatus: 'sample',
  },
  {
    id: 'visiting-information',
    slug: 'visiting-information',
    title: 'Visiting information',
    summary: 'Visiting hours and visitor guidance will be added after hospital confirmation.',
    checklist: [
      'Confirm current visiting hours before your visit.',
      'Ask about any visitor guidance that applies to your visit.',
      'Check whether visiting arrangements have changed.',
    ],
    icon: 'clock',
    contentStatus: 'sample',
  },
  {
    id: 'insurance-and-payment',
    slug: 'insurance-and-payment',
    title: 'Insurance and payment',
    summary: 'Insurance, TPA, billing, and accepted payment information are not yet confirmed.',
    checklist: [
      'Ask whether your insurance or TPA is accepted.',
      'Confirm what documents your insurer may require.',
      'Ask the hospital about billing and payment options.',
    ],
    icon: 'payment',
    contentStatus: 'sample',
  },
]
