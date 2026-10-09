# Hospital Website — Design System & UI Specification

## 1. Design Objective

The hospital website should communicate:

- Trust
- Professionalism
- Safety
- Cleanliness
- Compassion
- Modern healthcare
- Accessibility
- Reliability

The visual direction is:

> **Clean Minimal + Refined Healthcare**

The website should feel like a credible modern hospital rather than a generic corporate website, SaaS landing page, or overly decorative medical template.

The design should be visually impressive through **layout, typography, spacing, imagery, hierarchy, and consistency**, not through excessive effects.

---

# 2. Design Principles

All UI decisions should follow these principles:

### 2.1 Clarity First

Patients should immediately understand:

- What the hospital provides
- Where to find a doctor
- How to book an appointment
- How to contact the hospital
- How to get emergency help

### 2.2 Trust Over Decoration

Healthcare websites require a calm and credible visual language.

Avoid visual decisions that make the website feel:

- childish
- flashy
- experimental
- overly commercial
- cluttered

### 2.3 Consistency

The same design language must be used throughout:

- Buttons
- Cards
- Forms
- Headings
- Spacing
- Icons
- Images
- Navigation
- Page heroes
- CTAs

### 2.4 Reusability

Repeated visual patterns should become reusable components.

### 2.5 Accessibility

Design must remain usable for people with different abilities, screen sizes, and input methods.

### 2.6 Content Before Decoration

Do not add decorative elements that make important information harder to find.

---

# 3. Visual Style

Primary style:

**Clean Minimal**

Supporting style:

**Refined / Premium Healthcare**

The design should use:

- White and very light backgrounds
- Deep medical colors
- Soft neutral surfaces
- Strong typography
- Generous whitespace
- Subtle borders
- Restrained shadows
- Professional imagery
- Simple iconography
- Moderate corner rounding

Avoid:

- Excessive gradients
- Neon colors
- Heavy glassmorphism
- Huge decorative blobs
- Excessive 3D elements
- Excessive shadows
- Excessive rounded containers
- Overuse of illustrations
- Excessive animation

---

# 4. Color System

These colors are the initial design tokens.

They can be adjusted once the client provides official branding.

## Primary

```text id="l6t44a"
Primary:       #0F766E
Primary Dark:  #115E59
Primary Light: #CCFBF1
```

Use primary colors for:

- Main CTA
- Active navigation
- Important links
- Selected states
- Healthcare branding

## Secondary / Accent

```text id="f7p7yv"
Accent:        #0EA5A4
Accent Light:  #ECFEFF
```

Use accents sparingly.

## Text

```text id="8nqvuo"
Primary Text:   #172033
Secondary Text: #475569
Muted Text:     #64748B
```

## Backgrounds

```text id="w5nq1y"
Page Background: #F8FAFC
Surface:         #FFFFFF
Soft Surface:    #F1F5F9
```

## Borders

```text id="i7hm2r"
Border:       #E2E8F0
Border Dark:  #CBD5E1
```

## Status

```text id="y4l0p9"
Success: #16A34A
Warning: #D97706
Error:   #DC2626
Info:    #2563EB
```

## Emergency

Emergency actions should use a distinct red:

```text id="1sukjy"
Emergency: #DC2626
```

Emergency red should be reserved for:

- Emergency call
- Emergency information
- Critical alerts

Do not use emergency red as a general brand color.

---

# 5. Color Usage Rules

Do not use every color everywhere.

Recommended visual hierarchy:

```text id="6x50vu"
Primary color
    ↓
Important actions

Neutral colors
    ↓
Most of the interface

Accent
    ↓
Small highlights

Emergency red
    ↓
Emergency actions only
```

The overall interface should remain predominantly light and calm.

---

# 6. Typography

Use a modern sans-serif font.

Preferred:

**Inter**

Fallback:

```text id="c8l5g4"
Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Typography should prioritize readability.

---

# 7. Typography Hierarchy

## Display / Hero

Large and confident.

Desktop:

```text
48–64px
```

Mobile:

```text
34–42px
```

Use strong weight without making the heading unnecessarily heavy.

## H1

Desktop:

```text
40–52px
```

Mobile:

```text
32–38px
```

## H2

Desktop:

```text
32–40px
```

Mobile:

```text
26–32px
```

## H3

Approximately:

```text
22–28px
```

## Body

Approximately:

```text
16–18px
```

Use comfortable line height.

## Small text

Approximately:

```text
13–14px
```

Use for metadata, labels and secondary information.

---

# 8. Typography Rules

Headings should:

- Be concise
- Have strong hierarchy
- Avoid unnecessary capitalization
- Use readable line lengths

Body text should:

- Be easy to scan
- Avoid very long paragraphs
- Use appropriate line-height

Avoid:

- Decorative fonts
- Excessive italic text
- All-caps paragraphs
- Extremely thin text
- Very small body text

---

# 9. Spacing System

Use an 8px-based spacing system.

Suggested values:

```text id="w8sm76"
4px
8px
12px
16px
24px
32px
40px
48px
64px
80px
96px
120px
```

Spacing should create hierarchy rather than simply filling space.

---

# 10. Page Width

Recommended maximum content width:

```text id="1e6o0q"
1200–1280px
```

Use responsive horizontal padding.

Example:

```text id="8gq7vp"
Mobile: 16–20px
Tablet: 24–32px
Desktop: 32–48px
```

Avoid full-width text blocks that become difficult to read.

---

# 11. Border Radius

Use moderate rounding.

Suggested:

```text id="xiw2p7"
Small:  6px
Medium: 10px
Large: 14px
XL:     18px
```

Cards should generally use:

```text
12–18px
```

Avoid making every element excessively rounded.

---

# 12. Shadows

Use subtle shadows.

Example visual hierarchy:

```text id="2a5b74"
Default card:
Very subtle shadow / border

Interactive card:
Slightly stronger shadow

Modal:
Stronger shadow
```

Do not use large dark shadows.

Borders should often be sufficient instead of shadows.

---

# 13. Buttons

Buttons should be visually clear and consistent.

## Primary Button

Use:

- Primary background
- White text
- Medium rounding
- Comfortable padding

Examples:

```text
Book Appointment
Find a Doctor
Get Directions
```

## Secondary Button

Use:

- White/transparent background
- Primary border
- Primary text

Examples:

```text
Learn More
View Services
View Doctors
```

## Emergency Button

Use emergency red.

Example:

```text
Call Emergency
```

## Button states

Every interactive button should support:

```text
Default
Hover
Focus
Active
Disabled
Loading
```

Do not rely only on color to communicate state.

---

# 14. Cards

Cards should be simple and content-focused.

Recommended structure:

```text id="4d5pr8"
Image/Icon
↓
Title
↓
Short description
↓
Supporting information
↓
Action
```

Avoid:

- Too much text
- Excessive decoration
- Multiple competing CTAs

---

# 15. Doctor Cards

Doctor cards should communicate professional information quickly.

Suggested:

```text id="d1yqkj"
Doctor image
Name
Specialization
Department
Experience
View Profile
Book Appointment
```

The doctor image should be professional and consistent in aspect ratio.

---

# 16. Department Cards

Suggested:

```text id="p2v0h8"
Icon/Image
Department Name
Short Description
View Department
```

Use consistent card dimensions where possible.

---

# 17. Service Cards

Suggested:

```text id="i4a7nq"
Icon/Image
Service Name
Short Description
Learn More
```

Do not force every service card to contain large amounts of information.

---

# 18. Health Package Cards

Package cards should make important information easy to compare.

Include:

- Package name
- Short description
- Tests included
- Price
- Key details
- Book/package CTA

Price should be visually prominent only when approved by the client.

---

# 19. Testimonial Cards

Keep testimonials human and readable.

Suggested:

```text id="zj1c7s"
Rating
Review
Patient name/display name
Optional date
```

Avoid excessive decorative quotation marks.

---

# 20. Blog Cards

Suggested:

```text id="b4q5v2"
Image
Category
Title
Excerpt
Date
Read Article
```

Keep cards visually consistent.

---

# 21. Page Hero

Inner pages should use a consistent page hero.

Example:

```text id="8q8w5g"
Breadcrumb
        ↓
Page Title
        ↓
Short description
        ↓
Optional supporting visual
```

Do not make every inner-page hero identical if a page benefits from a different layout, but maintain visual consistency.

---

# 22. Breadcrumbs

Use breadcrumbs on deeper pages.

Example:

```text id="e3xv7m"
Home / Departments / Cardiology
```

Breadcrumbs should:

- Be small
- Be readable
- Not dominate the page
- Provide useful navigation

---

# 23. Navbar

The navbar should be:

- Clean
- Stable
- Easy to scan
- Responsive

Desktop:

```text id="qzj3qf"
Logo
│
Primary Navigation
│
Book Appointment
│
Emergency / Contact
```

Avoid putting every possible page in the primary navigation.

Secondary pages should be accessible through dropdowns, Resources, footer, or contextual links.

---

# 24. Sticky Navigation

A sticky header may be used.

If sticky:

- Keep it compact
- Do not cover content
- Use subtle background/shadow after scrolling
- Ensure mobile usability

Do not make the header excessively tall.

---

# 25. Emergency UI

Emergency information is a special design element.

It should be:

- Highly visible
- Easy to understand
- Immediately actionable

Possible treatment:

```text id="5bsh9d"
Emergency?
Call +91 XXXXX XXXXX
[Call Now]
```

The emergency CTA should remain visually distinct without turning the entire site red.

---

# 26. Homepage Layout

Recommended homepage structure:

```text id="w5w7d9"
Navbar
↓
Hero
↓
Quick Actions / Emergency
↓
About Hospital
↓
Departments
↓
Featured Doctors
↓
Services & Treatments
↓
Why Choose Us
↓
Facilities
↓
Health Packages
↓
Testimonials
↓
Health Articles
↓
Contact / Map
↓
Footer
```

The exact order can change based on client content.

---

# 27. Hero Design

The hero should immediately communicate the hospital's identity.

Recommended layout:

```text id="1j6c9y"
Left:
Headline
Supporting copy
Primary CTA
Secondary/Emergency CTA

Right:
Professional hospital/medical image
```

Alternative layouts may be used if they improve the client's content.

Avoid oversized hero sections that push all useful information below the fold.

---

# 28. Section Design

Each major section should have clear hierarchy.

Typical structure:

```text id="vsl7a1"
Small eyebrow
        ↓
Section heading
        ↓
Short supporting description
        ↓
Content
        ↓
Optional CTA
```

Do not repeat the exact same visual pattern mechanically on every section.

Variation should come from layout while maintaining the same design system.

---

# 29. Forms

Forms should feel calm and easy.

Use:

- Clear labels
- Adequate spacing
- Consistent inputs
- Helpful placeholders
- Inline validation
- Clear required indicators

Avoid:

- Tiny input fields
- Excessive fields
- Poor contrast
- Placeholder-only labels
- Dense layouts on mobile

Appointment forms should feel particularly trustworthy because they involve patient information.

---

# 30. Input Design

Default input:

```text
White background
Subtle border
Moderate radius
16px comfortable text
```

States:

```text id="3ld6rh"
Default
Focus
Filled
Error
Disabled
Success
```

Focus should be clearly visible.

---

# 31. Modal / Dialog

Use modals only when appropriate.

Good uses:

- Image preview
- Appointment confirmation
- Important confirmation
- Additional information

Avoid using modals for basic navigation that could use a normal page.

---

# 32. Gallery Design

Gallery should prioritize imagery.

Possible layout:

```text id="j3g9z9"
Masonry/Grid
↓
Category Filters
↓
Image Preview
```

Maintain consistent spacing.

Avoid overly complicated gallery interactions.

---

# 33. Blog Design

Blog listing should prioritize readability.

Use:

- Clear category
- Strong title
- Short excerpt
- Date
- Professional image

Article page should use a comfortable reading width.

Avoid excessively wide text columns.

---

# 34. Contact Page

The contact page should make contact information immediately usable.

Recommended layout:

```text id="f6h4qp"
Contact Details       Map
────────────────────────────
Phone
Email
Address
Timings
Emergency
WhatsApp
Directions
```

On mobile, stack the information and map.

---

# 35. Footer

The footer should contain:

### Hospital

- Logo
- Short description

### Navigation

- Important pages

### Patient Resources

- Appointment
- Admission
- Insurance
- FAQs

### Contact

- Phone
- Emergency
- Email
- Address

### Social

- Approved social links

### Bottom

- Copyright
- Privacy
- Terms if applicable

Do not overload the footer with every possible link.

The shared shell implementation is in `frontend/src/components/layout`:
`SiteLayout` composes `Navbar`, `Footer`, and `FloatingActions`. The hospital
name, phone numbers, email, address, description, and WhatsApp number are
passed as configuration; omit unapproved details rather than publishing
invented contact information. Emergency actions route to the emergency
information page until an approved emergency phone number is configured.
Navigation paths are wired to the planned page routes and will become active
as those routes are added.

---

# 36. Icons

Use **Lucide React** as the primary icon library.

Preferred icon style:

**Outline / simple**

Icons should:

- Have consistent sizing
- Have consistent stroke weight
- Support the meaning of nearby text

Do not use icons as decoration when they do not add meaning.

Avoid mixing multiple icon libraries unnecessarily.

---

# 37. Imagery

Images are important to hospital credibility.

Preferred imagery:

- Real hospital photographs
- Real doctors/medical team
- Real facilities
- Professional medical environments
- Natural human interactions

During development, use appropriate placeholders.

Avoid:

- Unrelated generic business imagery
- Overly staged medical stock images
- Low-quality images
- Inconsistent image styles

---

# 38. Image Treatment

Images may use:

- Moderate border radius
- Clean cropping
- Consistent aspect ratios
- Subtle overlays where necessary for text readability

Do not place heavy filters over medical photography.

---

# 39. Image Aspect Ratios

Use consistent aspect ratios according to context.

Doctor portraits:

```text
Portrait / approximately 3:4
```

Card images:

```text
Approximately 4:3 or 16:10
```

Hero:

```text
Wide landscape
```

Gallery:

Flexible depending on source image.

Do not distort images.

Use `object-fit: cover` where appropriate.

---

# 40. Responsive Strategy

Design mobile-first.

## Mobile

Priorities:

- Clear hierarchy
- Easy tapping
- Simple navigation
- Short sections
- Comfortable forms
- Important CTA visibility

## Tablet

Use intermediate grid layouts.

## Desktop

Use:

- Multi-column layouts
- Larger imagery
- More whitespace
- Expanded navigation

## Large desktop

Do not simply stretch content indefinitely.

Maintain a maximum content width.

---

# 41. Breakpoint Philosophy

Use the project's Tailwind breakpoints unless there is a specific reason to customize them.

Design should respond to available space rather than being built for only a few specific devices.

Test at:

```text
320px
375px
414px
768px
1024px
1280px
1440px+
```

These are testing references, not rigid design targets.

---

# 42. Mobile Navigation

Mobile menu should:

- Cover or overlay content appropriately
- Have clear close behavior
- Preserve focus accessibility
- Prevent accidental interaction with hidden content
- Provide primary navigation
- Make appointment/contact actions easy to access

Avoid tiny menu links.

---

# 43. Mobile CTA Strategy

On mobile, important actions should remain easy to reach.

Potential actions:

```text
Book Appointment
Call Emergency
WhatsApp
Get Directions
```

A floating action button may be used for WhatsApp or emergency contact, but it must not obstruct content.

---

# 44. Motion Design

Use Framer Motion where it improves the interface.

Recommended durations:

```text id="08vwr4"
Micro interaction: 150–200ms
Standard transition: 200–350ms
Page/section reveal: 300–600ms
```

Avoid long animations.

Use easing that feels natural.

Motion is limited to a short page entrance, one-time section reveals, a mobile
navigation entrance, and subtle hover feedback on hover-capable devices. Do not
animate urgent or clinical information independently. Every animation must
respect `prefers-reduced-motion`; reduced-motion users receive static content
and an immediate mobile-menu open.

---

# 45. Frontend Foundation

The initial reusable design-system implementation lives in `frontend/src`:

- `index.css` defines the healthcare color tokens, Inter typography, global
  focus behavior, reduced-motion support, page container, and section spacing.
- `components/ui` contains the shared buttons, cards, badges, form controls,
  breadcrumbs, skeletons, and loading, empty, and error states.
- `Container`, `Section`, and `SectionHeading` provide consistent page width
  and section hierarchy.

Use the semantic tokens (`background`, `foreground`, `primary`, `muted`,
`border`, and `destructive`) for standard UI. Use the `medical-*` Tailwind
tokens for explicit brand, neutral, status, or emergency color needs. Reserve
emergency red for urgent actions and critical information.

The page container is capped at 1280px with fluid horizontal padding, and
section vertical spacing scales with the viewport. Tailwind's default
responsive breakpoints are retained; build layouts mobile-first and add
intermediate tablet and desktop layouts only when the content needs them.

Respect:

```css
prefers-reduced-motion
```

---

# 45. Hover States

Desktop interactive elements should have subtle hover states.

Examples:

- Slight shadow increase
- Small translate
- Background change
- Border change
- Icon movement

Do not use dramatic transformations.

Mobile should not depend on hover.

---

# 46. Focus States

Every keyboard-accessible interactive element needs a visible focus state.

Focus should not be removed merely because it doesn't match the visual design.

---

# 47. Accessibility Color Rules

Never communicate meaning using color alone.

For example, an error state should include:

- Color
- Error icon where appropriate
- Text message

Emergency information should include clear text such as:

> Emergency

rather than relying only on a red background.

---

# 48. Routing and Page Structure

The React Router page tree lives in `frontend/src/App.jsx`; the shared shell
wraps the home page, all planned content routes, and the not-found route.
Content pages use a consistent placeholder until their stage is implemented.
Use router links for internal navigation so active navigation, browser history,
and client-side route transitions remain consistent. External contact actions
such as `tel:` and `mailto:` remain regular links.
On pushed route changes the shared layout focuses the main content and scrolls
to the top; hash links focus and scroll to their target. Browser back/forward
navigation preserves the browser's restored focus and scroll position. The
footer FAQ link points directly to the FAQ section in Patient Resources. The
mobile menu supports Escape, outside-click dismissal, and keyboard focus
cycling; emergency phone actions use regular telephone links when a confirmed
number exists.

---

# 49. Dark Mode

Dark mode is **not required for the initial client scope**.

Do not implement it unless the client specifically requests it.

Do not introduce dark mode simply because the UI framework supports it.

---

# 50. Decorative Elements

Decorative elements may be used sparingly:

- Soft background shapes
- Subtle lines
- Small gradients
- Medical-inspired abstract shapes

They must never interfere with content.

The design should remain attractive even if all decorative elements are removed.

---

# 51. Design Consistency Rules

Do not:

- Use different button styles on every page.
- Change colors randomly.
- Mix unrelated icon styles.
- Use different card radii without reason.
- Change typography from page to page.
- Introduce a new component when an existing component already fits.
- Create one-off visual patterns without a clear purpose.

---

# 52. Component Reuse

Reusable components should be used for repeated patterns.

Examples:

```text id="8z8u0c"
DoctorCard
DepartmentCard
ServiceCard
PackageCard
BlogCard
TestimonialCard
FacilityCard
```

Data should determine the content, not separate component implementations.

---

# 53. Visual Density

The website should feel spacious but not empty.

Avoid both extremes:

### Too Dense

```text
Text
Text
Card
Card
Card
Button
Button
Image
Text
```

### Too Empty

Large unused spaces with little useful information.

Use whitespace to establish hierarchy.

---

# 54. Medical Trust Signals

Where client-approved information exists, visually emphasize:

- Qualified medical team
- Departments
- Facilities
- Accreditations
- Years of experience
- Hospital statistics
- Patient resources
- Contact accessibility

Never create trust signals that are not supported by client information.

---

# 55. Content and Data Layer

Temporary frontend content lives in `frontend/src/data`. Each domain exports
plain JavaScript data; `data/index.js` provides an optional central export.
The hospital configuration is consumed by the shared layout, route metadata
is consumed by the router, and homepage copy and quick links are consumed by
the home page.

All current records are sample placeholders, not approved hospital facts.
Each record carries `contentStatus: "sample"` (the gallery and homepage mark
their collection). Keep unknown contact details, prices, dates, ratings,
images, availability, and qualifications `null` or empty rather than
fabricating them. Clinical content, package prices, and patient testimonials
must not be presented as real or approved until reviewed and authorized.

Use stable `id`/`slug` values for references between records. For example,
department `doctorIds` and `serviceIds` refer to the matching doctor and
service records; keep those references consistent when replacing the sample
content.

---

# 56. Homepage Preview

The homepage in `frontend/src/pages/HomePage.jsx` consumes the structured
homepage copy and the doctor, department, service, facility, package, blog, and
testimonial collections. It demonstrates the full homepage content sequence
using shared cards, section headings, buttons, and empty states.

Until approved hospital copy is supplied, the page displays a design-preview
notice and identifies illustrative records. Testimonials are hidden unless
both their content and patient consent are approved. Unapproved package prices
are never shown; the map remains a clearly labeled location placeholder until
the hospital address is confirmed. Replace the sample content through the
data modules, not by duplicating it inside the page component.

## About Page

The `/about` page uses `frontend/src/data/about.js` for its copy and sections.
Only the hospital name and location currently have a public listing as a
source; the listing does not provide an official website, phone number, history,
mission, vision, values, facilities, or achievements. Keep those details
explicitly marked as awaiting hospital confirmation, and do not fill them with
invented claims. Replace the pending copy with client-approved content when it
is available.

## Departments, Doctors, and Services

Stages 7–9 are implemented as data-driven pages:

- `/departments` lists the department records; `/departments/:id` resolves by
  stable slug or ID and relates doctors, services, facilities, and department
  FAQs through their data IDs.
- `/doctors` supports text search and a department filter; `/doctors/:id`
  presents qualifications, experience, expertise, availability, and the
  related department when those details exist in the doctor record.
- `/services` groups service records by category and links each service to its
  related department.

Shared doctor cards are used by the homepage, doctor directory, and department
details. These current records are illustrative samples, not verified
Avdhuth Hospital staff, specialties, treatments, or facilities. Keep their
preview notices and do not publish them as approved clinical information.
Department-specific FAQs are shown only when an FAQ record has a matching
`departmentId`; do not infer clinical guidance or relations from general FAQs.

## Appointment Request Preview

The `/appointment` page uses React Hook Form and Zod for client-side validation.
Department selection filters the available sample doctors; choosing a new
department clears a doctor from the previous department. Dates before today
are disabled, and the illustrative time options filter out elapsed times for
today. Submitting simulates a short local loading state and shows a
confirmation that explicitly says no appointment was booked and no data was
transmitted or stored. Do not connect real patient data to this flow until an
approved backend, privacy notice, and hospital appointment process are ready.

## Facilities, Resources, Contact, Gallery, and Blog

The `/facilities`, `/diagnostics`, and `/packages` routes use their matching
data modules; package prices remain hidden unless explicitly approved.
`/patient-resources` presents scannable admission, visit, insurance, and FAQ
sections, with operational details clearly marked for hospital confirmation.
Its checklists are prompts for questions patients can ask, not hospital
requirements; only FAQs explicitly marked `contentStatus: "approved"` are
shown as answers.
`/contact` uses only the currently listed address and leaves unknown phone,
email, and hours unpublished. `/emergency` directs immediate emergencies to
India's emergency response number (112) and does not imply an unverified
hospital emergency service.

`/gallery` uses sample placeholder artwork until approved real images are
provided; the image viewer uses a native modal dialog with close and
previous/next controls. `/blog` and `/blog/:slug` render the article records,
identify them as drafts, and distinguish missing article body content from
approved clinical advice. Article content requires qualified clinical review
and hospital approval before publication.

---

# 54. Page-Specific Visual Direction

## About

Use storytelling and hospital imagery rather than a wall of text.

## Doctors

Prioritize professional profiles and filtering.

## Departments

Use clear categorization.

## Services

Prioritize discoverability and concise explanations.

## Appointment

Prioritize simplicity and trust.

## Emergency

Prioritize speed and visibility.

## Facilities

Prioritize large, high-quality imagery.

## Packages

Prioritize comparison and clarity.

## Diagnostics

Prioritize organization.

## Patient Resources

Prioritize readability and searchability.

## Gallery

Prioritize imagery.

## Blog

Prioritize readability.

## Careers

Prioritize job discoverability and application clarity.

---

# 55. UI State Standards

Interactive components should account for:

```text id="8g9m5m"
Default
Hover
Focus
Active
Disabled
Loading
Success
Error
Empty
```

Not every component requires every state, but applicable states must be considered.

---

# 56. Content-to-Design Relationship

Design should adapt to content.

Do not:

- Truncate important medical information merely to preserve card symmetry.
- Hide important information to make a layout prettier.
- Force long doctor names into awkward layouts.
- Assume all departments have the same