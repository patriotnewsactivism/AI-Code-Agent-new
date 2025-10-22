#!/bin/bash

# AI Code Agent Deployment Script

# Build the project
echo "Building the project..."
npm run build

# Create deployment package
echo "Creating deployment package..."
tar -czf ai-code-agent-dist.tar.gz dist

echo "Deployment package created: ai-code-agent-dist.tar.gz"
echo "You can now deploy this package to any web server or hosting platform."

# Optional: If you have a specific deployment target, you can add commands here
# For example, deploying to a remote server via SCP:
# scp ai-code-agent-dist.tar.gz user@server:/path/to/deployment/directory

# Or deploying to AWS S3:
# aws s3 cp ai-code-agent-dist.tar.gz s3://your-bucket-name/

echo "Deployment completed successfully!"