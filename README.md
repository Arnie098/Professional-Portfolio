# Arnieque Amaba — Full Stack Laravel Developer Portfolio

A single-page personal portfolio for **Arnieque Amaba**, a Full Stack Laravel Developer.
Built with React and Vite, showcasing Laravel production work, experience, skills, and a contact form.

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
npm run gateway  # start the local OpenAI-compatible gateway (http://localhost:8787)
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
server/
  index.js                      # OpenAI-compatible gateway entrypoint for Cline
  modelRegistry.js              # public model aliases -> upstream providers/models
  providers/                    # OpenAI and Anthropic adapters
```

The page renders a linear set of sections: Header → Info → About → Experience →
Projects → Skills → Education → Contact → Footer.

## Configuration

The contact form uses EmailJS. The service ID, template ID, and public key are
configured in `src/assets/components/Contact.jsx`. The EmailJS public key is safe
to expose client-side; restrict allowed domains in the EmailJS dashboard for a
public deployment.

## Cline Gateway Setup

The repo now includes a minimal OpenAI-compatible gateway for Cline at
`server/index.js`. It exposes:

- `GET /health`
- `GET /v1/models`
- `POST /v1/chat/completions`

### 1. Configure environment variables

Copy `.env.example` to `.env` and set:

```bash
GATEWAY_API_KEY=your-gateway-token
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key
```

`GATEWAY_API_KEY` protects your local gateway. The provider API keys are only used
server-side.

### 2. Start the gateway

PowerShell example:

```powershell
$env:PORT = "8787"
$env:GATEWAY_API_KEY = "your-gateway-token"
$env:OPENAI_API_KEY = "your-openai-key"
$env:ANTHROPIC_API_KEY = "your-anthropic-key"
npm run gateway
```

### 3. Point Cline at it

Use Cline's `OpenAI Compatible` provider with:

- Base URL: `http://localhost:8787/v1`
- API Key: your `GATEWAY_API_KEY`
- Model: one of the public aliases from `server/modelRegistry.js`

Examples:

- `gpt-5`
- `gpt-5-mini`
- `gpt-4o`
- `claude-sonnet-4`
- `claude-sonnet-4.6`

CLI example:

```bash
cline auth -p openai -k your-gateway-token -b http://localhost:8787/v1
```

### 4. Test the gateway

```bash
curl http://localhost:8787/v1/models \
  -H "Authorization: Bearer your-gateway-token"
```

```bash
curl http://localhost:8787/v1/chat/completions \
  -H "Authorization: Bearer your-gateway-token" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5",
    "messages": [
      { "role": "user", "content": "Say hello from the gateway." }
    ]
  }'
```

## Current Limits

- The gateway returns a Cline-compatible `/v1/models` response and enforces bearer auth.
- Anthropic requests are translated from OpenAI-style chat/tool payloads to Anthropic's
  Messages API and back.
- `stream: true` currently returns a one-shot SSE response rather than token-by-token
  streaming.
- Image/audio inputs and advanced multimodal message content are not implemented yet.
