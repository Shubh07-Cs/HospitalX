# Hospital Website — Content & Data Specification

## 1. Purpose

This document defines the content structure, data requirements, placeholder strategy, and content rules for the hospital website.

The hospital is a real client, but final hospital-specific information has not yet been fully provided.

Therefore:

- Dummy content may be used during UI development.
- Placeholder content must be easy to replace.
- Client-provided information becomes the source of truth.
- No invented information should be presented as verified hospital information.
- Content should be separated from UI components wherever practical.

---

# 2. Content Sources

Content can come from three sources:

### 1. Client-Approved Content

Highest priority.

Examples:

- Official hospital name
- Doctor information
- Hospital address
- Services
- Facilities
- Prices
- Testimonials
- Official policies

This information should be used exactly or appropriately rewritten with client approval.

### 2. Temporary Placeholder Content

Used only while designing/developing.

Examples:

```text
Hospital Name
Dr. Example Name
Department Name
+91 XXXXX XXXXX
info@examplehospital.com
```

Placeholder data should be centralized and clearly replaceable.

### 3. AI-Generated Supporting Copy

AI may generate:

- Placeholder descriptions
- UI microcopy
- Section headings
- Temporary article excerpts
- Temporary descriptions

AI-generated medical or hospital claims must **not** be treated as official content without client review.

---

# 3. Content Storage Strategy

During the frontend prototype stage, reusable content should be stored in:

```text
frontend/src/data/
```

Suggested files:

```text
data/
├── hospital.js
├── doctors.js
├── departments.js
├── services.js
├── facilities.js
├── packages.js
├── diagnostics.js
├── testimonials.js
├── blogs.js
├── gallery.js
├── careers.js
├── faqs.js
└── patientResources.js
```

Not all files need to be created immediately.

Create them when the corresponding feature is implemented.

---

# 4. Hospital Information

The hospital entity should eventually contain:

```text
Hospital
├── name
├── legalName (if required)
├── logo
├── tagline
├── shortDescription
├── fullDescription
├── establishedYear
├── address
├── city
├── state
├── postalCode
├── country
├── phone
├── emergencyPhone
├── email
├── emergencyEmail (if applicable)
├── website
├── openingHours
├── emergencyHours
├── latitude
├── longitude
├── mapUrl
├── whatsapp
├── socialLinks
├── vision
├── mission
├── values
├── achievements
└── statistics
```

Only fields actually supplied/required should be displayed.

---

# 5. Hospital Branding

Required client assets:

- Official logo
- Logo variations if available
- Favicon
- Brand colors
- Typography preferences if defined
- Official photography
- Brand guidelines if available

Until these are received, use the temporary design system defined in `DESIGN.md`.

Do not permanently design around placeholder branding if the client later supplies official brand guidelines.

---

# 6. Doctors

Each doctor should have a structured record.

Recommended structure:

```js
{
  id: "doctor-001",
  name: "Dr. Example Name",
  image: "/images/doctors/doctor-001.jpg",
  specialization: "Cardiology",
  departmentId: "cardiology",
  qualifications: [
    "MBBS",
    "MD"
  ],
  experience: "15+ years",
  bio: "Temporary biography.",
  expertise: [
    "Example area"
  ],
  availability: {
    days: [],
    timings: []
  },
  languages: [],
  appointmentAvailable: true
}
```

## Required client information

For each doctor:

- Full name
- Professional photograph
- Specialization
- Department
- Qualifications
- Experience
- Biography
- Areas of expertise
- Availability
- Languages, if the hospital wants to display them

Do not invent qualifications or experience.

---

# 7. Departments

Each department should have:

```js
{
  id: "department-001",
  name: "Cardiology",
  slug: "cardiology",
  shortDescription: "...",
  description: "...",
  image: "...",
  icon: "...",
  services: [],
  doctorIds: [],
  facilities: [],
  faqs: []
}
```

## Required content

- Department name
- Short description
- Detailed description
- Services/treatments
- Doctors
- Facilities
- Department-specific FAQs where applicable

The final department list must come from the client.

---

# 8. Services & Treatments

Each service should have:

```js
{
  id: "service-001",
  name: "Example Service",
  slug: "example-service",
  category: "Example Category",
  shortDescription: "...",
  description: "...",
  image: "...",
  departmentId: "department-001",
  relatedDoctorIds: []
}
```

Potential content:

- Service name
- Category
- Description
- Treatment/procedure information
- Related department
- Related doctors
- Related facilities
- Patient information where officially approved

Medical information must be reviewed by the client before production.

---

# 9. Facilities

Each facility can have:

```js
{
  id: "facility-001",
  name: "ICU",
  shortDescription: "...",
  description: "...",
  image: "...",
  features: []
}
```

Potential facilities:

- ICU
- Operation theatres
- Emergency department
- Patient rooms
- Private rooms
- Diagnostic facilities
- Laboratory
- Imaging
- Pharmacy
- Waiting areas
- Other hospital-specific facilities

Only display facilities that actually exist or are explicitly provided as planned/available services.

---

# 10. Health Packages

Each package should contain:

```js
{
  id: "package-001",
  name: "Comprehensive Health Checkup",
  shortDescription: "...",
  description: "...",
  tests: [],
  price: null,
  duration: "...",
  eligibility: "...",
  bookingAvailable: true
}
```

Possible information:

- Package name
- Description
- Tests included
- Price
- Duration
- Eligibility
- Preparation instructions
- Booking process

Prices and medical instructions must be client-approved.

---

# 11. Diagnostic & Laboratory Services

Each diagnostic service/test may contain:

```js
{
  id: "test-001",
  name: "Example Test",
  category: "Laboratory",
  description: "...",
  preparation: "...",
  availability: "...",
  price: null
}
```

Potential categories:

- Blood tests
- Imaging
- Radiology
- Pathology
- Cardiac diagnostics
- Other client-approved diagnostic services

Do not invent preparation instructions or prices.

---

# 12. Pharmacy

If applicable:

```js
{
  name: "Hospital Pharmacy",
  description: "...",
  location: "...",
  timings: [],
  phone: "...",
  services: []
}
```

Potential information:

- Pharmacy location
- Opening hours
- Contact
- Services
- Availability information if officially provided

Do not make unsupported claims about medication availability.

---

# 13. Patient Resources

Patient resources should be organized into categories.

## Admission

Possible fields:

- Admission overview
- Required documents
- Process steps
- Contact information

## Visiting Hours

- General visiting hours
- Department-specific restrictions
- Visitor guidelines

## Insurance / TPA

- Accepted insurance providers
- TPA partners
- Contact process
- Required documents

## FAQs

Each FAQ:

```js
{
  id: "faq-001",
  category: "Appointments",
  question: "...",
  answer: "..."
}
```

FAQ answers must be client-approved before production.

---

# 14. Gallery

Gallery content should support categories.

Possible categories:

```text
Hospital
Facilities
Doctors
Medical Team
Events
Infrastructure
Other
```

Each image may contain:

```js
{
  id: "gallery-001",
  src: "/images/gallery/example.jpg",
  alt: "Hospital reception area",
  title: "Hospital Reception",
  category: "Hospital"
}
```

Every meaningful image should have useful alt text.

---

# 15. Blog / Health Articles

Each article should contain:

```js
{
  id: "article-001",
  slug: "example-health-article",
  title: "Example Health Article",
  excerpt: "...",
  image: "...",
  category: "Health Awareness",
  author: "...",
  publishedAt: "...",
  content: "...",
  tags: []
}
```

Potential categories:

- Health Awareness
- Preventive Care
- Nutrition
- Lifestyle
- Hospital News
- Medical Technology
- Patient Education

## Medical content rule

Health articles should be reviewed and approved by the hospital/client before publication.

AI may help draft articles, but AI-generated medical content must not automatically be treated as medical advice or official hospital guidance.

---

# 16. Testimonials

Each testimonial:

```js
{
  id: "testimonial-001",
  name: "Patient Example",
  rating: 5,
  text: "Placeholder testimonial.",
  date: "2026-01-01"
}
```

During development, use obvious placeholders.

For production:

- Use genuine approved testimonials.
- Obtain any required permission from patients.
- Do not fabricate patient experiences.
- Do not use personally identifying information without appropriate approval.

---

# 17. Careers

Each job opening may contain:

```js
{
  id: "job-001",
  title: "Staff Nurse",
  department: "Nursing",
  location: "Hospital Location",
  employmentType: "Full-time",
  description: "...",
  responsibilities: [],
  requirements: [],
  postedAt: "...",
  applicationOpen: true
}
```

Possible application fields:

- Name
- Email
- Phone
- Position
- Resume
- Message

Resume storage and processing require backend infrastructure and must not be implemented insecurely.

---

# 18. Contact Information

Centralize contact information rather than repeating it throughout components.

Example:

```js
export const hospitalContact = {
  phone: "+91XXXXXXXXXX",
  emergency: "+91XXXXXXXXXX",
  email: "info@example.com",
  whatsapp: "+91XXXXXXXXXX",
  address: "Hospital Address",
  timings: "Mon–Sun: 24 Hours",
  mapUrl: ""
};
```

Once the client provides official information, update the centralized source.

---

# 19. Social Media

Structure:

```js
{
  instagram: "",
  facebook: "",
  youtube: "",
  linkedin: "",
  twitter: ""
}
```

Only display platforms that have official client-approved accounts.

---

# 20. Homepage Content Structure

The homepage should consume content from reusable data sources.

Suggested content:

```text
Hero
├── headline
├── supportingText
├── primaryCTA
├── secondaryCTA
└── image

Quick Actions
├── appointment
├── emergency
├── doctors
├── departments
└── directions

About
├── title
├── description
└── image

Departments
└── department list

Doctors
└── featured doctors

Services
└── featured services

Why Choose Us
└── approved highlights

Facilities
└── featured facilities

Packages
└── featured packages

Testimonials
└── approved testimonials

Blog
└── featured articles

Contact
├── address
├── phone
├── email
├── timings
└── map
```

---

# 21. Content Writing Style

All public-facing copy should be:

- Clear
- Patient-friendly
- Professional
- Concise
- Reassuring
- Easy to scan

Avoid:

- Excessive technical jargon
- Unnecessary marketing language
- Unsupported superlatives
- Fear-based medical messaging
- Guaranteed health outcomes
- Fake statistics
- Overly long paragraphs

Prefer:

> “Specialized cardiac care supported by experienced medical professionals.”

Avoid unsupported claims such as:

> “The best cardiac hospital in the country with a 99% success rate.”

unless the client provides verified evidence and explicitly approves the claim.

---

# 22. Placeholder Content Rules

Placeholder content should look realistic enough for UI testing but remain clearly replaceable.

Example:

```text
Dr. A. Sharma
Senior Consultant — Cardiology
10+ Years Experience
```

is acceptable as temporary UI content.

However, it must not accidentally become production content.

Use centralized files so the replacement process is simple.

---

# 23. Image Rules

## During development

Use:

- Placeholder hospital images
- Placeholder doctor portraits
- Placeholder facility images
- Placeholder gallery images

Images should maintain a consistent visual style.

## Production

Replace placeholders with:

- Client-provided images
- Properly licensed images
- Approved stock images
- AI-generated images where appropriate and approved

Do not use copyrighted images without permission.

---

# 24. Image Organization

Recommended structure:

```text
frontend/public/images/
│
├── hospital/
├── doctors/
├── departments/
├── services/
├── facilities/
├── packages/
├── gallery/
└── blog/
```

Use meaningful filenames.

Prefer:

```text
cardiology-department.jpg
icu-facility.jpg
dr-example-cardiologist.jpg
hospital-reception.jpg
```

instead of:

```text
IMG_1234.jpg
image1.jpg
newfinal.jpg
```

---

# 25. Content Relationships

Where practical, use IDs rather than duplicating information.

Example:

```text
Doctor
    ↓
departmentId
    ↓
Department
```

and:

```text
Service
    ↓
departmentId
    ↓
Department
```

This makes future API/database integration easier.

---

# 26. Future API Compatibility

The data structures should be designed so that local data can eventually be replaced by backend responses.

Current:

```text
Component
   ↓
Local JS data
```

Future:

```text
Component
   ↓
Hook / API service
   ↓
REST API
   ↓
Backend
   ↓
Database
```

Components should not depend on database-specific implementation details.

---

# 27. Client Content Collection Checklist

The client should eventually provide:

## Hospital

- [ ] Official name
- [ ] Logo
- [ ] Tagline
- [ ] Address
- [ ] Phone
- [ ] Emergency number
- [ ] Email
- [ ] Timings
- [ ] Map location
- [ ] WhatsApp
- [ ] Social media
- [ ] History
- [ ] Vision
- [ ] Mission
- [ ] Values
- [ ] Achievements
- [ ] Statistics

## Doctors

- [ ] Doctor names
- [ ] Photos
- [ ] Qualifications
- [ ] Specializations
- [ ] Departments
- [ ] Experience
- [ ] Bios
- [ ] Availability
- [ ] Areas of expertise

## Medical Services

- [ ] Departments
- [ ] Services
- [ ] Treatments
- [ ] Procedures
- [ ] Diagnostics
- [ ] Laboratory tests
- [ ] Facilities
- [ ] Pharmacy

## Patient Information

- [ ] Admission process
- [ ] Visiting hours
- [ ] Insurance/TPA
- [ ] FAQs
- [ ] Patient guidelines

## Marketing / Content

- [ ] Testimonials
- [ ] Gallery
- [ ] Blog articles
- [ ] Health packages
- [ ] Careers/jobs

---

# 28. Content Approval Process

Before production launch:

```text
Client provides content
        ↓
Development team organizes content
        ↓
Website implementation
        ↓
Client reviews
        ↓
Corrections
        ↓
Client approval
        ↓
Production
```

No important factual hospital information should be considered final until approved by the client.

---

# 29. Content Replacement Principle

The website should be built so that replacing dummy content does **not** require redesigning components.

For example:

```text
Dummy doctor
      ↓
Replace data
      ↓
Same DoctorCard
      ↓
Same DoctorDetails page
```

The goal is:

**Change the data, not the UI code.**

---

# 30. Final Content Principle

Content should support the patient's journey:

```text
Discover
   ↓
Understand
   ↓
Trust
   ↓
Choose
   ↓
Contact
   ↓
Book / Visit
```

Every page should have a clear purpose and, where appropriate, a logical next action.

The website should never overwhelm patients with information simply because the information exists. Content should be organized around what a patient needs to know and do.