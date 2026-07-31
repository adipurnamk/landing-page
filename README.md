# Personal Landing Page

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode support and Docker deployment configuration.

## Features

- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔧 TypeScript support
- 🐳 Docker deployment ready
- 🚀 Optimized with Nginx
- ⚡ Built with Vite

## Prerequisites

Make sure you have the following installed:
- Node.js (v18 or higher)
- npm (v8 or higher)
- Docker (optional, for containerized deployment)

## Local Development

1. Install dependencies:
```
bash
npm install
```

2. Start the development server:
```
bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## Building for Production

1. Create a production build:
```
bash
npm run build
```

2. Preview the production build locally:
```
bash
npm run preview
```


## Docker Deployment

1. Build the Docker image:
```
bash
docker build -t landing-page .
```

2. Run the container:
```
bash
docker run -p 8080:80 landing-page
```


The site will be available at `http://localhost:8080`

## Cloudflare Deployment

You can deploy this site to Cloudflare using either **Cloudflare Workers** (to serve the `dist` assets via Wrangler) or **Cloudflare Pages** (static hosting). The repository already includes a `wrangler.json` that points `assets.directory` to `./dist`.

Prerequisites:
- Node.js and npm
- Install the Wrangler CLI and authenticate with your Cloudflare account:

```bash
npm install -g wrangler
wrangler login
# or use npx: npx wrangler whoami
```

Build the production site (outputs `./dist`):

```bash
npm run build
```

Workers (serve `./dist` via Wrangler):

```bash
# build, then publish the Worker (uses assets.directory: ./dist)
npm run build
npx wrangler publish
```

Pages (publish static `./dist` to Cloudflare Pages):

```bash
# build, then publish to Pages (replace <project-name> with your Pages project)
npm run build
npx wrangler pages publish ./dist --project-name <project-name>
```

Optional npm scripts (also added to `package.json`):

```bash
# Publish using Wrangler (Worker)
npm run deploy

# Publish to Cloudflare Pages
npm run pages-deploy
```

Notes:
- If you need custom runtime logic, add a Worker entrypoint and update `wrangler.json` accordingly. The current config publishes static assets from `./dist`.
- For CI/CD, consider adding a GitHub Actions workflow that runs `npm ci && npm run build && npx wrangler publish` on merges to `main`.

## Deploying with Helm on Minikube

Follow these steps to deploy the application using Helm on Minikube:

1. **Start Minikube:**

   ```sh
   minikube start
   ```

2. **Navigate to the Helm chart directory:**

   ```sh
   cd deployment/helm
   ```

3. **Install the Helm chart:**

   ```sh
   helm install landing-page .
   ```

4. **Verify the deployment:**

   ```sh
   kubectl get all
   ```

5. **Access the application:**

   To access the application, you need to forward the port or use Minikube's service tunneling:

   ```sh
   minikube service landing-page
   ```

   This command will open the application in your default web browser.

## Project Structure

```
landing-page/
├── src/
│   ├── components/     # React components
│   ├── assets/        # Static assets (images, fonts)
│   ├── styles/        # Global styles and Tailwind config
│   └── types/         # TypeScript type definitions
├── public/            # Public static files
├── index.html         # Entry HTML file
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── Dockerfile         # Docker configuration
```


## Customization

1. Update the content in `src/data/` to modify the website content
2. Modify the theme in `tailwind.config.js` to change the color scheme
3. Add or modify components in `src/components/`

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.