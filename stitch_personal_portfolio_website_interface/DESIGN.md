---
name: Editorial Obsidian
colors:
  surface: '#111418'
  surface-dim: '#111418'
  surface-bright: '#36393e'
  surface-container-lowest: '#0b0e12'
  surface-container-low: '#191c20'
  surface-container: '#1d2024'
  surface-container-high: '#272a2e'
  surface-container-highest: '#323539'
  on-surface: '#e1e2e8'
  on-surface-variant: '#e0bfb7'
  inverse-surface: '#e1e2e8'
  inverse-on-surface: '#2e3135'
  outline: '#a88a82'
  outline-variant: '#59413b'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#601400'
  primary-container: '#ef653e'
  on-primary-container: '#541000'
  inverse-primary: '#ab3511'
  secondary: '#cac6c1'
  on-secondary: '#32302d'
  secondary-container: '#4b4945'
  on-secondary-container: '#bcb8b3'
  tertiary: '#ffb878'
  on-tertiary: '#4c2700'
  tertiary-container: '#d37b16'
  on-tertiary-container: '#422200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#872000'
  secondary-fixed: '#e6e2dd'
  secondary-fixed-dim: '#cac6c1'
  on-secondary-fixed: '#1d1b19'
  on-secondary-fixed-variant: '#484643'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#ffb878'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6c3a00'
  background: '#111418'
  on-background: '#e1e2e8'
  surface-variant: '#323539'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Newsreader
    fontSize: 26px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.08em
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  gutter-mobile: 1rem
  gutter-desktop: 2rem
  max-content-width: 1120px
---

## Brand & Style

This design system establishes an architectural, editorial identity crafted for a senior practitioner’s personal portfolio. Rooted in traditional Swiss publishing, contemporary digital craft, and structural restraint, it conveys intellectual authority, meticulous craftsmanship, and uncompromising clarity.

### Personality & Values
- **Architectural & Deliberate:** Every element exists within a calculated cadence. Nothing floats or drifts without an anchor.
- **Literary & Precise:** Content reads like a curated monograph or specimen catalog rather than a self-promotional marketing deck.
- **Radical Restraint:** Distinction is achieved through crisp typographic contrast, strict grid divisions, and hairline rule lines rather than visual novelties or decorative illusions.

### Visual Aesthetic & Movements
The design blends **Constructivist grid discipline** with **High-Modernist Editorial styling**:
- Deep slate and warm stone surfaces replace default pitch black, lending organic warmth and depth without softness.
- Crisp ivory typography produces immaculate readability and razor-sharp typographic edges.
- Electric terracotta provides targeted focal guidance, deployed exclusively to index key artifacts, project dates, and critical interactive calls.
- Total rejection of generic SaaS cliches: strictly no glassmorphism, no gradient blurs, no ambient multi-layered colored glow, and no whimsical rounded forms.

## Colors

The color palette operates as an ink-and-paper system inverted for dark mode. Contrast ratios across all informational tiers systematically exceed WCAG 2.1 AAA benchmarks for reading comfort.

### Primary Color: Terracotta (`#E05A34`)
A saturated, kiln-fired earth tone with high chromatic intensity. Used sparingly for critical interactive indicators, active selection tabs, index bullets, and focused visual pointers. It cuts through deep neutrals without inducing chromatic fatigue.

### Secondary Color: Crisp Ivory (`#F4EFEA`)
An untreated, bleached parchment tone functioning as the primary foreground color. It eliminates the aggressive eye strain of sterile `#FFFFFF` on dark backgrounds while maintaining an ultra-high 13.5:1 contrast ratio against the primary canvas.

### Tertiary Color: Electric Amber (`#FF9E3B`)
A high-energy chromatic signal utilized exclusively for micro-states, live availability tags, subtle hover inflections, and contextual alert metadata.

### Neutral Palette & Surface Foundation
- **Canvas Base (`#111418`):** Deep slate-tinted obsidian base; warm undertones avoid clinical dead black.
- **Surface Elevation 1 (`#181D22`):** Structural card, drawer, and panel backings.
- **Surface Elevation 2 (`#20262D`):** Interactive containers, table row hovers, and input fields.
- **Editorial Border (`#2C343D`):** Hairline structural separation lines (1px solid).
- **Subdued Text / Metadata (`#8E98A4`):** Secondary timestamps, structural captions, and inactive elements, ensuring 4.8:1 minimum contrast.

## Typography

The typographic system fuses three distinct voices into an intentional editorial rhythm:
1. **Newsreader (Display/Headlines):** An authoritative, intellectual serif that evokes physical broadsheet journalism, literary volumes, and exhibition catalogs. Headings are intentionally capped at 32px desktop (26px mobile) to maintain intellectual gravity and reject ostentatious web scale.
2. **Geist (Body Text):** An ultra-refined, low-contrast neutral grotesque engineered for maximum scannability and structural clarity. It handles narrative paragraphs, case study critiques, and UI metadata.
3. **JetBrains Mono (Labels/Pills/Indices):** A calibrated monospaced typeface for all classification metadata, index counters, file tags, project dates, and interface coordinates.

### Typographic Rules
- Headline sizing remains modest; negative space provides prominence rather than exaggerated font size.
- Editorial headers never use pure bold or extrabold weights; emphasis is created via optical italics or scale adjustments.
- All technical metadata, timestamps, categorization tags, and table counters must be uppercase and set in `JetBrains Mono`.

## Layout & Spacing

The layout employs a structured 12-column editorial grid bounded by a maximum content container of 1120px, flanked by precise hairline margin gutters. Vertical rhythm is governed by a strict 4px base increment, organized into distinct spatial zones.

### Spatial Hierarchy & Rhythm
- **Micro Spacing (`0.25rem` to `0.75rem`):** Tight cohesion inside atomic elements (tag badges, icon pairings, input field inner padding).
- **Component Spacing (`1rem` to `1.5rem`):** Internal padding for modular grid blocks, cards, and interactive rows.
- **Section Spacing (`3rem` to `4.5rem`):** Deliberate, calm breathing intervals separating portfolio case studies, writing indexes, and biographic timelines.

### Breakpoints & Adaptive Flow
- **Mobile (320px – 767px):** Collapses to a single continuous editorial column. Gutters lock to `1rem` (16px). All structural grid cells convert to full-width stacked blocks linked by continuous horizontal rule separators.
- **Tablet (768px – 1023px):** 6-column hybrid layout with `1.5rem` margins. Metadata indices lock to 2 columns while case narratives occupy 4 columns.
- **Desktop (1024px+):** Full 12-column architectural format with asymmetrical splits (e.g., 4-column sticky biographical index / 8-column scrolling case work).

## Elevation & Depth

This design system completely repudiates skeuomorphic drop shadows, ambient colored blurs, and translucent glassmorphism. Depth is achieved entirely through planar tonal stepping and structural hairline rules.

### The Planar Elevation Tier
- **Tier 0 (Base Canvas - `#111418`):** The foundational substrate of the entire view.
- **Tier 1 (Framed Containers - `#181D22`):** Modular project cards, inspection panels, and grouped content blocks.
- **Tier 2 (Interactive Floating Elements - `#20262D`):** Persistent top utility bars, flyout drawers, tooltips, and contextual dropdowns.

### Structural Hairline Borders
Rather than relying on blurred shadows to indicate surface separation, spatial boundaries are demarcated strictly through `1px solid #2C343D` rules. 

When a Tier 1 card enters a hovered or focused state, its boundary line shifts crisply from `#2C343D` to `#E05A34` (Terracotta) without altering the layout geometry or triggering shadow expansions.

## Shapes

The design system uses a strict **Sharp (`roundedness: 0`)** geometry across all UI primitives. 

### Geometric Rationale
- Radii are locked to `0px`. Card perimeters, tag badges, buttons, form controls, and image viewports are engineered with sharp, pristine 90-degree corners.
- Tag pills are treated as architectural rectangular index tabs rather than organic pill contours.
- The visual tension created by sharp corners reinforces the precision of publication design and mechanical cataloging.

## Components

### Buttons
- **Primary Button:** High-contrast crisp ivory canvas (`#F4EFEA`) with dark slate typography (`#111418`), 0px radius, padding `0.75rem 1.5rem`. Typography set in `JetBrains Mono` (11px, 600 weight, uppercase). Hover state transitions sharply to primary terracotta (`#E05A34`) with crisp ivory text.
- **Secondary / Ghost Button:** Transparent background, `1px solid #2C343D` border, crisp ivory typography. Hover state shifts background to `#181D22` and border to `#8E98A4`.
- **Inline Link Button:** Monospaced link accompanied by an upward-pointing arrow (`↗`), underlined with a `1px` terracotta offset rule that transitions into solid text highlight on focus.

### Chips & Tag Pills
- Sharp rectangular index markers: `0px` radius, padding `0.25rem 0.5rem`.
- Background: `#181D22`; Border: `1px solid #2C343D`.
- Text: `JetBrains Mono` (10px, uppercase, 0.08em letter spacing), text color `#8E98A4`.
- **Active / Accent Tag:** Border shifts to `1px solid #E05A34`, text color shifts to crisp ivory (`#F4EFEA`) with a preceding terracotta square glyph (`■`).

### Lists & Case Indexes
- Structured as continuous tabular ledgers.
- Rows separated by hairline rules (`1px solid #2C343D`).
- Layout: Asymmetric 4-column row containing `[Index / Year]`, `[Client / Project Title]`, `[Discipline / Role]`, and `[Action Indicator]`.
- Hover state: Row background tints seamlessly to `#181D22` with title typography shifting from `#F4EFEA` to italicized terracotta (`#E05A34`).

### Form Inputs & Text Fields
- Sharp input containers with dark canvas background (`#111418`) and `1px solid #2C343D` perimeter.
- Height: 44px; Padding: `0 1rem`.
- Font: `Geist` (14px) for value, `JetBrains Mono` (10px, uppercase) for floating structural label above the field.
- Focus state: Border instantly snaps to `1px solid #E05A34` without outer glow rings.

### Portfolio Cards & Project Frames
- Zero-radius modular blocks backed by `#181D22` with full enclosing hairline borders (`1px solid #2C343D`).
- Image containers feature a subtle duotone treatment or natural color framing bordered internally by a `1px solid #2C343D` separator line dividing imagery from descriptive metadata.
- Card footers feature project taxonomies rendered exclusively in micro monospaced typography.

### Checkboxes & Selection Controls
- Sharp square check indicators (`16px x 16px`), `0px` radius, `1px solid #2C343D` outline.
- Selected state fills solidly with primary terracotta (`#E05A34`) housing a crisp ivory checkmark.