# Hospital Website — Project Specification

## 1. Project Overview

This project is a professional hospital website being developed for a real hospital client.

The primary objective is to create a **clean, modern, minimal, trustworthy, and professional healthcare website** that provides patients with clear information about the hospital and makes important actions such as booking appointments, contacting the hospital, finding doctors, and accessing patient resources easy.

The initial phase is **UI-first**. The website should look and behave like a polished production website, while hospital-specific content, images, contact information, and backend functionality can use replaceable dummy data until the client provides and approves the final information.

The project should be developed using a professional, maintainable architecture rather than generating the entire website as one large AI-generated implementation.

---

# 2. Primary Goals

The website should:

- Present the hospital professionally and build patient trust.
- Make important information easy to discover.
- Provide clear access to doctors, departments, services, facilities, and treatments.
- Make appointment booking easy.
- Make emergency contact information immediately accessible.
- Work properly across mobile, tablet, and desktop.
- Use consistent design and reusable components.
- Provide smooth but restrained interactions and animations.
- Be structured so that backend functionality can be added without rebuilding the frontend.
- Be maintainable by developers after the initial AI-assisted development.
- Be ready for client review and iterative revisions.

---

# 3. Project Philosophy

This is a **real client project**, not a one-off demo.

Development should follow a professional software-development approach:

```text
Requirements
    ↓
Information / Content Collection
    ↓
Sitemap & User Flows
    ↓
Technical Architecture
    ↓
Design System
    ↓
Reusable Components
    ↓
Page Development
    ↓
Functional Interactions
    ↓
Testing
    ↓
Client Review
    ↓
Revisions
    ↓
Deployment
    ↓
Maintenance
```

Do not skip architecture and planning simply because AI can generate code quickly.

AI should accelerate implementation, not replace engineering decisions.

---

# 4. Repository Architecture

The project uses a monorepo structure:

```text
hospital-website/
│
├── frontend/
│
├── backend/
│
├── docs/
│   ├── PROJECT.md
│   ├── REQUIREMENTS.md
│   ├── CONTENT.md
│   ├── DESIGN.md
│   └── API.md
│
├── .gitignore
└── README.md
```

## Frontend

The `frontend/` directory contains the public-facing React application.

Expected high-level structure:

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── doctors/
│   │   ├── departments/
│   │   ├── services/
│   │   ├── forms/
│   │   └── blog/
│   │
│   ├── pages/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── package.json
```

The exact structure may evolve as development progresses, but unnecessary restructuring should be avoided.

## Backend

The `backend/` directory contains the server/API.

Expected high-level structure:

```text
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   └── server.js
│
├── .env
└── package.json
```

The backend should **not be unnecessarily implemented during the initial UI phase**.

Backend development should begin when the required functionality and data flow are sufficiently defined.

---

# 5. Technology Stack

## Frontend

Primary stack:

- React
- Vite
- React Router
- Tailwind CSS
- shadcn/ui
- Lucide React
- Framer Motion
- React Hook Form
- Zod
- Sonner
- date-fns
- React Day Picker

## Backend

When backend functionality is required:

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

The backend technology should remain separate from the frontend.

## Code Quality

Use:

- ESLint for linting
- Prettier for formatting
- Git for version control

ESLint is the primary linting solution. Do not introduce additional linting systems without a clear project-level reason.

---

# 6. Library-First Development Rule

Do not unnecessarily implement common functionality from scratch.

Before creating a custom solution, determine whether an established library or existing reusable component already solves the requirement.

Examples:

- Routing → React Router
- UI primitives → shadcn/ui
- Icons → Lucide React
- Animations → Framer Motion
- Form handling → React Hook Form
- Validation → Zod
- Toast notifications → Sonner
- Date handling → date-fns
- Calendar/date selection → React Day Picker

However, **do not add a library simply because one exists**.

A dependency should be added only when it provides meaningful value.

Simple browser capabilities should remain simple.

Examples:

```text
Phone → tel:
Email → mailto:
WhatsApp → WhatsApp URL
Social media → normal external link
```

Do not create unnecessary npm dependencies for simple functionality.

---

# 7. Current Development Strategy

The project is initially **frontend/UI focused**.

Use:

- Dummy hospital information
- Dummy doctors
- Dummy departments
- Dummy services
- Dummy packages
- Dummy testimonials
- Dummy blog content
- Placeholder images
- Dummy contact details

All temporary information must be easy to replace.

Do not hardcode temporary information throughout components.

Keep reusable content/data in appropriate data files.

Example:

```text
frontend/src/data/doctors.js
frontend/src/data/departments.js
frontend/src/data/services.js
frontend/src/data/packages.js
frontend/src/data/blogs.js
```

---

# 8. Backend Strategy

The backend should eventually support functionality that genuinely requires server-side processing or persistent data.

Potential backend functionality includes:

- Appointment management
- Patient enquiries
- Career applications
- Doctor data
- Department data
- Blog management
- Authentication if required
- Administrative functionality if required

The initial UI does **not** require all of these to be connected to a real database.

For example, an appointment form can initially:

1. Validate the input.
2. Show a successful submission state.
3. Use temporary/local handling.

Later it can become:

```text
React
   ↓
POST /api/appointments
   ↓
Express
   ↓
Validation
   ↓
MongoDB
```

Do not build backend infrastructure merely for the sake of having a backend.

---

# 9. Website Scope

The website should cover the following areas.

## Main Pages

- Home
- About Hospital
- Doctors / Medical Team
- Doctor Details
- Departments & Specialities
- Department Details
- Services & Treatments
- Appointment Booking
- Emergency & Contact
- Patient Enquiry
- Facilities & Infrastructure
- Health Packages / Checkups
- Diagnostic & Laboratory Services
- Pharmacy
- Patient Resources
- Gallery
- Blog / Health Articles
- Blog Article Details
- Testimonials / Patient Reviews
- Careers

## Integrations

- Google Maps / location
- Directions
- WhatsApp
- Phone/call
- Email
- Social media

## Cross-platform requirements

- Mobile
- Tablet
- Desktop

---

# 10. Core User Flows

Important patient journeys should be considered before implementing individual pages.

### Appointment Flow

```text
Home
 ↓
Book Appointment
 ↓
Select Department
 ↓
Select Doctor
 ↓
Select Date
 ↓
Select Time
 ↓
Enter Patient Details
 ↓
Submit
 ↓
Confirmation
```

### Doctor Discovery

```text
Home
 ↓
Doctors
 ↓
Search / Filter
 ↓
Doctor Details
 ↓
Book Appointment
```

### Department Discovery

```text
Home
 ↓
Departments
 ↓
Department Details
 ↓
Services / Doctors
 ↓
Book Appointment
```

### Emergency Flow

```text
Any Important Page
 ↓
Emergency CTA
 ↓
Call / WhatsApp / Directions
```

The emergency action should always remain easy to discover without overwhelming the rest of the design.

---

# 11. Component Architecture

Build reusable components rather than duplicating UI.

Examples:

```text
Navbar
Footer
MobileMenu
EmergencyBar
Button
Card
Input
Select
Modal
SectionHeading
PageHero
DoctorCard
DepartmentCard
ServiceCard
FacilityCard
PackageCard
BlogCard
TestimonialCard
AppointmentForm
EnquiryForm
```

If the same visual pattern appears in multiple places, consider making it reusable.

Do not over-componentize trivial elements that will never be reused.

---

# 12. Data Architecture

Frontend data should be separated from presentation.

For example:

```js
{
  id: 1,
  name: "Dr. Example",
  specialization: "Cardiology",
  department: "Cardiology",
  qualification: "MBBS, MD",
  experience: "15+ years",
  image: "/images/doctors/example.jpg"
}
```

Components should consume this data rather than contain large hardcoded datasets.

This makes it possible to later replace local data with API responses.

---

# 13. Design Direction

The visual identity should communicate:

- Trust
- Safety
- Professionalism
- Calmness
- Modern healthcare
- Accessibility
- Human care

The design should be:

- Minimal
- Clean
- Spacious
- Modern
- Professional
- Visually polished
- Easy to navigate

Avoid:

- Excessive gradients
- Neon colors
- Excessive glassmorphism
- Overly decorative layouts
- Excessive rounded elements
- Excessive animations
- Unnecessary visual clutter

The website should feel like a **credible healthcare institution**, not a generic startup landing page.

Detailed visual rules are maintained in `DESIGN.md`.

---

# 14. Responsive Design

Responsive behavior is not a final-stage addition.

Build with responsiveness in mind from the beginning.

Required targets:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Check:

- Navigation
- Typography
- Cards
- Forms
- Images
- Grids
- Buttons
- Tables if introduced
- Spacing
- Touch interactions

No important content should become inaccessible on smaller screens.

---

# 15. Accessibility

Accessibility is part of implementation, not a final optional improvement.

Use:

- Semantic HTML
- Proper heading hierarchy
- Labels for form controls
- Keyboard-accessible interactions
- Visible focus states
- Appropriate color contrast
- Meaningful alt text
- Accessible buttons/links
- Reduced-motion support where appropriate

Do not use clickable `<div>` elements when a semantic button or link is appropriate.

---

# 16. Animation Philosophy

Animations should improve usability rather than distract from healthcare content.

Acceptable examples:

- Section reveal
- Fade/slide transitions
- Card hover
- Mobile menu transition
- Page transition
- Image interaction

Avoid:

- Constant movement
- Large distracting animations
- Excessive parallax
- Animations around emergency actions
- Long delays before content becomes usable

Respect reduced-motion preferences.

---

# 17. Client Content Rules

The client is the source of truth for hospital-specific facts.

Never invent or publish as factual:

- Hospital statistics
- Number of beds
- Years of operation
- Doctor qualifications
- Medical credentials
- Accreditations
- Treatment success rates
- Pricing
- Emergency numbers
- Hospital timings
- Addresses
- Patient testimonials
- Medical claims

Until approved content is provided, use clearly replaceable dummy content.

Refer to `CONTENT.md` for the required information.

---

# 18. Forms

Forms should be designed professionally even during the prototype stage.

Expected forms include:

- Appointment
- Patient enquiry
- Career/application

Forms should include:

- Clear labels
- Appropriate input types
- Validation
- Error messages
- Loading/submitting state
- Success state
- Disabled state
- Accessible feedback

Use:

```text
React Hook Form
+
Zod
+
Sonner
```

where appropriate.

Do not collect real sensitive patient information during the prototype stage unless the client has explicitly approved the required infrastructure and data handling.

---

# 19. Error, Loading and Empty States

Professional UI should account for states beyond the ideal scenario.

Where relevant, implement:

```text
Loading
Success
Error
Empty
Disabled
Not Found
```

Examples:

- No doctors found
- No blog articles
- Invalid appointment input
- Failed API request
- Missing image
- 404 page

---

# 20. Navigation

Navigation must be consistent throughout the website.

The header should provide access to the most important areas without becoming overcrowded.

Primary navigation should prioritize:

- About
- Departments
- Doctors
- Services
- Facilities
- Resources
- Blog
- Contact

The appointment action should remain prominent.

Emergency contact should be visually distinguishable but not dominate the entire interface.

Mobile navigation should use a proper accessible menu.

---

# 21. SEO and Metadata

The website should eventually include:

- Meaningful page titles
- Meta descriptions
- Semantic HTML
- Proper heading hierarchy
- Descriptive URLs
- Image alt text
- Open Graph metadata where appropriate
- Sitemap
- Robots configuration

SEO implementation should be done after the page structure stabilizes, not before the content architecture is known.

---

# 22. Security Principles

Never commit:

- API keys
- Database credentials
- Authentication secrets
- Private tokens
- Production environment variables

Use `.env` files locally and appropriate environment configuration in deployment.

Validate server-side data when a backend exists.

Never assume frontend validation alone is sufficient.

---

# 23. Git & Version Control

Use Git throughout development.

Commits should represent meaningful changes.

Examples:

```text
chore: initialize frontend
chore: configure eslint
feat: add global navigation
feat: add homepage hero
feat: add doctor listing
feat: add appointment form
fix: correct mobile navigation
fix: resolve form validation issue
refactor: extract reusable doctor card
```

Avoid meaningless commits such as:

```text
update
changes
final
final2
new
test
```

Do not commit:

```text
node_modules/
.env
dist/
```

---

# 24. AI-Assisted Development Rules

AI is an implementation assistant.

AI must:

- Read the project documentation before making architectural changes.
- Follow the existing architecture.
- Reuse existing components.
- Reuse existing libraries.
- Avoid unnecessary dependencies.
- Avoid unnecessary rewrites.
- Preserve working functionality.
- Explain significant architectural changes.
- Keep code readable and maintainable.
- Follow existing naming conventions.
- Check for responsive behavior.
- Check for accessibility basics.
- Avoid inventing client facts.

AI must **not**:

- Rewrite the entire project unnecessarily.
- Replace the chosen stack without approval.
- Introduce duplicate component systems.
- Install libraries without justification.
- Hardcode secrets.
- Invent real hospital information.
- Create a backend feature that has not been required.
- Delete working code simply to implement a new feature.
- Modify unrelated files unnecessarily.

Before making a major architectural change, explain the reason and expected impact.

---

# 25. Development Stages

## Stage 1 — Foundation

- Verify frontend setup
- Verify backend setup
- Configure ESLint
- Configure Prettier
- Configure Git
- Establish folder structure
- Establish routing
- Establish base styling
- Establish design tokens

## Stage 2 — Design System

Create:

- Typography
- Colors
- Buttons
- Inputs
- Cards
- Badges
- Page heroes
- Section headings
- Navigation
- Footer

## Stage 3 — Global Layout

Build:

- Navbar
- Mobile navigation
- Footer
- Emergency CTA
- Global layout
- Page transitions where appropriate

## Stage 4 — Homepage

Build the homepage as the primary visual reference for the rest of the website.

## Stage 5 — Core Hospital Information

Build:

- About
- Departments
- Department details
- Doctors
- Doctor details
- Services
- Facilities

## Stage 6 — Patient Features

Build:

- Appointment
- Patient enquiry
- Emergency/contact
- WhatsApp/call/email actions

## Stage 7 — Additional Content

Build:

- Health packages
- Diagnostics
- Pharmacy
- Patient resources
- Gallery
- Blog
- Testimonials
- Careers

## Stage 8 — Integrations

Add approved:

- Maps
- Directions
- WhatsApp
- Call
- Email
- Social links

## Stage 9 — Backend

Only after backend requirements are confirmed:

- API
- Database
- Persistent appointments
- Enquiries
- Applications
- Authentication/admin features if required

## Stage 10 — QA & Polish

Test:

- Responsive behavior
- Navigation
- Forms
- Validation
- Accessibility
- Loading/error states
- Animations
- Performance
- Console errors
- Production build

## Stage 11 — Client Review

Provide a deployable preview.

Collect client feedback as a structured revision list.

Implement approved revisions.

## Stage 12 — Production Deployment

After final approval:

- Production environment
- Domain
- HTTPS
- Environment variables
- Backend deployment if applicable
- Database configuration if applicable
- Final QA

---

# 26. Definition of Done

A page or feature is not considered complete merely because it renders.

It should satisfy the applicable requirements:

- Correct UI
- Correct navigation
- Responsive layout
- Reusable components
- Correct interaction
- Validation where required
- Loading state where relevant
- Error state where relevant
- Empty state where relevant
- Accessibility basics
- No obvious console errors
- No broken links
- No invented client facts
- Production build succeeds

---

# 27. Decision-Making Priority

When making implementation or design decisions, prioritize in this order:

```text
1. Patient usability
2. Client requirements
3. Accessibility
4. Reliability
5. Maintainability
6. Performance
7. Visual polish
8. Developer convenience
```

Do not sacrifice usability or maintainability merely to make the UI look more impressive.

---

# 28. Source of Truth

Project documentation has different responsibilities:

### `PROJECT.md`
Overall project direction, architecture, engineering rules and development process.

### `REQUIREMENTS.md`
What the client expects the website to contain and do.

### `CONTENT.md`
Hospital-specific information and data structures.

### `DESIGN.md`
Visual language, UI rules and design system.

If documents conflict:

1. Confirm the actual client requirement.
2. Preserve the established architecture unless there is a strong reason to change it.
3. Prefer the more specific requirement over a general assumption.
4. Do not silently make major architectural changes.

---

# 29. Final Project Principle

Build the website as if another professional developer will take over the project tomorrow.

The code should therefore be:

**clear, reusable, predictable, documented, responsive, accessible, and easy to extend.**

AI-generated code is acceptable only when it meets the same engineering standards as manually written code.