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