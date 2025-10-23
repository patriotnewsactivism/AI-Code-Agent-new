# Backend Proxy Setup for AI Code Agent

This document explains how to set up and run the backend proxy server for the AI Code Agent application.

## Why a Backend Proxy?

The backend proxy is necessary to:
1. Keep your Google Gemini API key secure (not exposed in client-side code)
2. Handle API requests from the frontend securely
3. Prevent unauthorized usage of your API key

## Setup Instructions

1. **Get a Google Gemini API Key**
   - Go to [Google AI Studio](https://aistudio.google.com/)
   - Create an API key for Gemini
   - Copy the API key

2. **Configure the API Key**
   - Open the `.env` file in the project root
   - Replace `your_actual_google_api_key_here` with your actual API key:
   ```
   GOOGLE_API_KEY=AIzaSyB4Gz5r87K3R1c2eF3d4e5f6g7h8i9j0kL
   ```

3. **Install Backend Dependencies**
   ```bash
   npm install express node-fetch dotenv
   ```

4. **Build the Frontend**
   ```bash
   npm run build
   ```

5. **Run the Backend Server**
   ```bash
   npm start
   ```
   
   The server will start on port 3000 (or the port specified in your environment variables).

## How It Works

1. The React frontend sends requests to `/api/generate` instead of directly to Google's API
2. The backend proxy receives these requests and forwards them to Google's API with your secure API key
3. The backend proxy returns the response to the frontend
4. Your API key is never exposed to the client

## Environment Variables

- `GOOGLE_API_KEY`: Your Google Gemini API key (required)
- `PORT`: Port for the backend server (optional, defaults to 3000)

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore` to prevent accidental commits
- Always use the backend proxy in production environments