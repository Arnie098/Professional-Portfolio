# Arnieque Amaba — Developer Portfolio

A single-page personal portfolio for **Arnieque Amaba**, a Backend / Full-Stack Developer.
Built with React and Vite, showcasing projects, experience, skills, and a contact form.

## Tech Stack

- **React 19** + **Vite 7** (JavaScript / JSX)
- **Bootstrap 5.3** for layout, plus per-component CSS in `src/assets/components/Css/`
- **Framer Motion** for animations
- **Font Awesome** for icons
- **EmailJS** for the contact form

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project Structure

```
index.html                     # entry HTML (theme set via data-theme="dark")
src/
  main.jsx                      # React root
  App.jsx                       # composes the page sections
  index.css                     # global styles + light/dark theme variables
  App.css                       # app-level layout
  assets/
    components/                 # section components (Header, Info, About,
      Css/                      #   ExperienceSection, Project, Skills, etc.)
    images/                     # project screenshots
public/
  ArniePortFolioResume.docx     # downloadable resume (linked from About)
```

The page renders a linear set of sections: Header → Info → About → Experience →
Projects → Skills → Education → Contact → Footer.

## Configuration

The contact form uses EmailJS. The service ID, template ID, and public key are
configured in `src/assets/components/Contact.jsx`. The EmailJS public key is safe
to expose client-side; restrict allowed domains in the EmailJS dashboard for a
public deployment.
