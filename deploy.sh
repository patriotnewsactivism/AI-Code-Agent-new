#!/bin/bash

# AI Code Agent Deployment Script

# Clean previous builds
echo "Cleaning previous builds..."
rm -rf dist

# Build the project
echo "Building the project..."
npm run build

# Verify build was successful
if [ ! -d "dist" ] || [ -z "$(ls -A dist)" ]; then
  echo "Build failed or dist directory is empty"
  exit 1
fi

echo "Build successful. Contents of dist directory:"
ls -la dist

# Create deployment package
echo "Creating deployment package..."
tar -czf ai-code-agent-dist.tar.gz dist

echo "Deployment package created: ai-code-agent-dist.tar.gz"
echo "You can now deploy this package to any web server or hosting platform."

# For Netlify deployment, you would typically just deploy the dist folder
# Netlify automatically handles the deployment of static files

# Optional: If you have a specific deployment target, you can add commands here
# For example, deploying to a remote server via SCP:
# scp ai-code-agent-dist.tar.gz user@server:/path/to/deployment/directory

# Or deploying to AWS S3:
# aws s3 cp ai-code-agent-dist.tar.gz s3://your-bucket-name/

echo "Deployment completed successfully!"