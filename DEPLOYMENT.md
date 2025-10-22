# Deployment Instructions for AI Code Agent

## Overview
The AI Code Agent application has been successfully built and packaged for deployment. This document provides instructions on how to deploy the application to various platforms.

## Deployment Package
The deployment package `ai-code-agent-dist.tar.gz` contains the built application in the `dist/` directory. This package can be deployed to any static hosting service.

## Deployment Options

### 1. GitHub Pages
1. Create a new repository on GitHub
2. Extract the deployment package:
   ```bash
   tar -xzf ai-code-agent-dist.tar.gz
   ```
3. Navigate to the dist directory:
   ```bash
   cd dist
   ```
4. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Deploy AI Code Agent"
   ```
5. Add the GitHub remote and push:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```
6. Enable GitHub Pages in your repository settings

### 2. Netlify
1. Go to [Netlify](https://netlify.com)
2. Create a new site
3. Drag and drop the `dist` folder or the `ai-code-agent-dist.tar.gz` file to deploy

### 3. Vercel
1. Go to [Vercel](https://vercel.com)
2. Create a new project
3. Import the project or upload the `dist` folder

### 4. AWS S3
1. Create an S3 bucket
2. Enable static website hosting
3. Upload the contents of the `dist` folder to the bucket
4. Set appropriate permissions for public access

### 5. Any Web Server
1. Extract the deployment package:
   ```bash
   tar -xzf ai-code-agent-dist.tar.gz
   ```
2. Copy the contents of the `dist` directory to your web server's public directory

## Running the Deployment Script
We've included a deployment script `deploy.sh` that automates the build process and creates a new deployment package:

```bash
./deploy.sh
```

This script will:
1. Run `npm run build` to build the project
2. Create a new `ai-code-agent-dist.tar.gz` package

## Source Code
The source code is also available in `ai-code-agent.tar.gz` which can be used to recreate the development environment on any machine.

## Requirements for Running from Source
- Node.js (version 14 or higher)
- npm (version 6 or higher)

To run from source:
1. Extract the source package:
   ```bash
   tar -xzf ai-code-agent.tar.gz
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Or build for production:
   ```bash
   npm run build
   ```

## Accessing the Application
After deployment, the application can be accessed through any modern web browser. The main features include:

- AI-powered code generation
- File explorer with folder support
- Code editor
- Live preview
- Export/import functionality