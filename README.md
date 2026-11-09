# African Royal Elite Civil Group: Company Website

A responsive marketing website for **African Royal Elite Civil Group (ARE Civil)**, a civil construction company based in Mabopane, Gauteng, South Africa. ARE Civil builds French drain systems, retaining walls and roads, and designs every structure around how water is drained away from it.

The site presents the company's four service lines as a structured catalog, with dimensional specifications, pricing guides, cross-section diagrams and a quote request form, so potential clients can understand the work before making contact.

**Live site:** _add your GitHub Pages link here_

---

## Features

- **Structure catalog:** four service lines (French drains, cantilever RC retaining walls, gabion retaining walls, road construction), each with dimensional metrics, materials and cost guides.
- **Detailed service sections:** expanded pages for French drains (exterior and interior sump systems), retaining walls (gabion vs RC comparison) and road construction (build sequence and reference figures).
- **Technical reference:** cross-section diagrams for each structure, including custom SVG drawings.
- **Image lightbox:** click any photo or diagram to view it full size, with keyboard and arrow navigation.
- **Quote request form:** opens a pre-filled email with the client's name, contact details, structure type and project notes.
- **WhatsApp contact:** floating chat button and a direct link with a pre-filled message.
- **Responsive design:** works on desktop, tablet and mobile, with a hamburger menu on smaller screens.
- **Small touches:** scroll reveal animations, active section highlighting in the navigation, and an animated blueprint grid in the hero.

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries)
- Vanilla JavaScript (IntersectionObserver, Canvas API)
- Google Fonts: Archivo, Public Sans, IBM Plex Mono

No frameworks, build tools or dependencies.

## Project Structure

```
├── index.html           Page markup and content
├── css/
│   └── styles.css       All styling and responsive breakpoints
├── js/
│   └── script.js        Navigation, scroll effects, lightbox, quote form
└── assets/
    └── images/          Site photos, diagrams and SVG drawings
```

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Evesprogram/are-civil-website.git
   ```
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server** (Live Server extension), or open `index.html` in any browser.

## Accessibility

- Descriptive `alt` text on every content image
- Keyboard support for the lightbox and mobile menu (Enter, Escape, arrow keys)
- ARIA labels on icon-only buttons
- Respects the `prefers-reduced-motion` setting for animations

## Developer

Designed and developed by **Eva Tsatsi** ([@Evesprogram](https://github.com/Evesprogram)).

## License

Built for African Royal Elite Civil Group. Company name, content and photography belong to the client and are not licensed for reuse.