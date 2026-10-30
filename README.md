# Sentinel landing page

The public marketing page for Sentinel. It's a separate project from the Sentinel app.

## Run it

```bash
npm install
npm run dev
```

It opens on http://localhost:5174.

## Link to the app

The "Start a scan" and sign-in buttons point to the app's login page. The default is
`http://localhost:5173/login`. To point them somewhere else, set `VITE_APP_URL` in a `.env.local` file:

```bash
VITE_APP_URL=https://app.example.com/login
```

## Build

```bash
npm run build
```

The output goes to `dist/`.
