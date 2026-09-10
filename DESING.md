# Portfolio — Style Reference

> A modern personal portfolio design inspired by the clarity of Linear, the simplicity of ChatGPT, and the precision of Vercel. A mostly neutral interface with a restrained green accent used for interaction, emphasis and identity.

**Theme:** light (primary), and dark

**Style:** minimal, technical, personal

---

## Tokens — Colors

| Name        | Value     | Token                 | Role                          |
| ----------- | --------- | --------------------- | ----------------------------- |
| primary     | `#171717` | `--color-primary`     | primary text and buttons      |
| on primary  | `#ffffff` | `--color-on-primary`  | text on primary               |
| ink         | `#171717` | `--color-ink`         | headings and important text   |
| body        | `#525252` | `--color-body`        | body text                     |
| mute        | `#737373` | `--color-mute`        | secondary text and metadata   |
| canvas      | `#ffffff` | `--color-canvas`      | main background               |
| canvas soft | `#fafafa` | `--color-canvas-soft` | subtle sections               |
| hairline    | `#eaeaea` | `--color-hairline`    | borders and dividers          |
| accent      | `#16a34a` | `--color-accent`      | brand accent and interactions |
| accent deep | `#15803d` | `--color-accent-deep` | accent hover state            |
| accent soft | `#dcfce7` | `--color-accent-soft` | subtle accent backgrounds     |
| error       | `#dc2626` | `--color-error`       | error states                  |
| warning     | `#d97706` | `--color-warning`     | warning states                |

The green accent should be used sparingly for links, active states, buttons, tags, indicators and subtle decorative elements.

---

## Tokens — Typography

### Inter, system-ui, sans-serif · `--font-primary`

* **Weights:** 400, 500, 600, 700
* **Sizes:** 64px, 48px, 36px, 32px, 24px, 20px, 18px, 16px, 14px, 12px
* **Role:** primary interface and editorial typography.

### ui-monospace, SFMono-Regular, Menlo, Monaco, monospace · `--font-mono`

* **Weights:** 400
* **Sizes:** 12px, 13px, 14px
* **Role:** technical metadata, dates, tags and code.

### Type Scale

| Role       | Size | Line Height | Letter Spacing | Token               |
| ---------- | ---: | ----------: | -------------: | ------------------- |
| display-xl | 64px |        68px |         -3.2px | `--text-display-xl` |
| display-lg | 48px |        52px |         -2.4px | `--text-display-lg` |
| heading-lg | 32px |        38px |         -1.4px | `--text-heading-lg` |
| heading-md | 24px |        32px |           -1px | `--text-heading-md` |
| body-lg    | 18px |        30px |              0 | `--text-body-lg`    |
| body-md    | 16px |        26px |              0 | `--text-body-md`    |
| body-sm    | 14px |        21px |              0 | `--text-body-sm`    |
| caption    | 12px |        18px |              0 | `--text-caption`    |

---

## Tokens — Spacing & Shapes

**Density:** spacious

### Spacing Scale

| Name    | Value | Token               |
| ------- | ----: | ------------------- |
| xs      |   8px | `--spacing-xs`      |
| sm      |  12px | `--spacing-sm`      |
| md      |  16px | `--spacing-md`      |
| lg      |  24px | `--spacing-lg`      |
| xl      |  32px | `--spacing-xl`      |
| 2xl     |  48px | `--spacing-2xl`     |
| 3xl     |  64px | `--spacing-3xl`     |
| 4xl     |  96px | `--spacing-4xl`     |
| section | 128px | `--spacing-section` |

### Border Radius

| Name | Value | Token           |
| ---- | ----: | --------------- |
| sm   |   6px | `--radius-sm`   |
| md   |   8px | `--radius-md`   |
| lg   |  12px | `--radius-lg`   |
| pill | 999px | `--radius-pill` |

### Layout

* **Max content width:** 1200px
* **Reading width:** 720px
* **Page padding:** 24px
* **Section gap:** 128px
* **Element gap:** 16px

---

## Components

### nav bar

**Role:** primary site navigation

* **backgroundColor:** `{colors.canvas}`
* **textColor:** `{colors.body}`
* **typography:** `{typography.body-sm}`
* **height:** `64px`
* **border:** `{colors.hairline}`

### nav link

* **textColor:** `{colors.body}`
* **hoverColor:** `{colors.ink}`
* **activeColor:** `{colors.accent}`
* **typography:** `{typography.body-sm}`

### button primary

* **backgroundColor:** `{colors.primary}`
* **textColor:** `{colors.on-primary}`
* **typography:** `{typography.body-sm}`
* **rounded:** `{rounded.md}`
* **padding:** `10px 16px`

### button accent

* **backgroundColor:** `{colors.accent}`
* **textColor:** `{colors.on-primary}`
* **typography:** `{typography.body-sm}`
* **rounded:** `{rounded.md}`
* **padding:** `10px 16px`

### button secondary

* **backgroundColor:** `{colors.canvas}`
* **textColor:** `{colors.ink}`
* **borderColor:** `{colors.hairline}`
* **typography:** `{typography.body-sm}`
* **rounded:** `{rounded.md}`
* **padding:** `10px 16px`

### hero

**Role:** introduce the person and establish identity.

* **backgroundColor:** `{colors.canvas}`
* **textColor:** `{colors.ink}`
* **typography:** `{typography.display-xl}`
* **maxWidth:** `900px`
* **padding:** `{spacing.4xl} 0`

Use large typography, short copy and one or two clear actions. Subtle green decorative elements are allowed.

### project card

**Role:** showcase portfolio projects.

* **backgroundColor:** `{colors.canvas}`
* **textColor:** `{colors.ink}`
* **borderColor:** `{colors.hairline}`
* **rounded:** `{rounded.lg}`
* **padding:** `{spacing.lg}`

Hover states may subtly change the border to `{colors.accent}`.

### article card

**Role:** preview blog posts.

* **backgroundColor:** `{colors.canvas}`
* **textColor:** `{colors.ink}`
* **typography:** `{typography.body-md}`
* **padding:** `{spacing.md} 0`
* **border:** `{colors.hairline}`

Prefer editorial rows over heavy card layouts.

### article

**Role:** long-form reading experience.

* **maxWidth:** `720px`
* **textColor:** `{colors.body}`
* **typography:** `{typography.body-lg}`

Headings use the documented heading scale. Code uses `{typography.mono}`.

### tag

* **backgroundColor:** `{colors.accent-soft}`
* **textColor:** `{colors.accent-deep}`
* **typography:** `{typography.caption}`
* **rounded:** `{rounded.pill}`
* **padding:** `4px 10px`

### footer

* **backgroundColor:** `{colors.canvas}`
* **textColor:** `{colors.mute}`
* **typography:** `{typography.body-sm}`
* **border-top:** `{colors.hairline}`
* **padding:** `{spacing.3xl} 0`

---

## Do's and Don'ts

### Do

* Use generous whitespace.
* Prioritize typography and content.
* Use green as a restrained accent.
* Use subtle borders instead of heavy shadows.
* Keep cards simple.
* Use monospace typography for technical details.
* Make interactions subtle and fast.
* Keep blog content highly readable.
* Preserve a strong visual hierarchy.

### Don't

* Do not copy Vercel, Linear or ChatGPT literally.
* Do not use excessive gradients.
* Do not make everything rounded.
* Do not overuse the green accent.
* Do not use excessive shadows.
* Do not create unnecessary decorative elements.
* Do not sacrifice readability for visual effects.
* Do not use Tailwind CSS.
* Do not introduce arbitrary colors outside the token system.

---

## Layout

Use the documented spacing scale and component geometry as the implementation baseline.

The homepage should generally follow:

```text
Navigation
    ↓
Hero
    ↓
Projects
    ↓
Education
    ↓
About / Contact
    ↓
Footer
```

Portfolio pages should prioritize projects and visual work.

Keep layouts responsive, spacious and content-driven.

The overall impression should be **minimal, modern, technical and personal**, with the green accent providing the distinctive visual identity.
