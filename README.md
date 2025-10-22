<content># AI Code Agent

An intelligent coding assistant that can generate, edit, and preview web applications in real-time.

## Features

- 🤖 AI-powered code generation using Gemini API
- 📁 File explorer with folder support and collapsible tree view
- 🔍 File search functionality
- ✏️ Code editor with live editing
- 👁️ Live preview of web applications
- 🐙 GitHub integration simulation
- 📱 Responsive design for mobile and desktop
- 🌙 Dark/light mode toggle
- 📤 Export and import entire projects as JSON files
- ⚙️ Settings panel for configuration
- 📋 Copy to clipboard functionality

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## How to Use

1. Describe what you want to build in the AI Agent panel
2. Click "Run" to generate code
3. Navigate through files using the file explorer
4. Edit files in the code editor
5. Preview your changes in real-time
6. Export your project when finished

## Project Structure

- `src/App.js` - Main application component
- `src/main.jsx` - React entry point
- `index.html` - HTML entry point
- `vite.config.js` - Vite configuration
- `package.json` - Project dependencies and scripts
- `DEPLOYMENT.md` - Deployment instructions
- `FEATURES.md` - Detailed features documentation
- `deploy.sh` - Deployment script

## Technologies

- React 18
- Vite
- Tailwind CSS (CDN)
- Lucide React Icons

## Deployment

The application has been packaged for deployment and can be deployed to various platforms including:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any static web server

See `DEPLOYMENT.md` for detailed instructions.

## Development

To run the development environment:

1. Extract the source code:
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

## Requirements

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## API Integration

The AI agent connects to the Gemini API to process user requests and generate code. The system prompt has been enhanced with additional rules for better code organization and responsiveness.

## UI/UX Improvements

- Better visual hierarchy with consistent spacing
- Improved iconography with Lucide React
- Responsive layout for all screen sizes
- Clear visual feedback for user actions
- Intuitive mobile navigation with tab-based interface
</content>