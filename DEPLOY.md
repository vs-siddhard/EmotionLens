# Deployment configuration
For instructions on how to deploy EmotionLens, follow the guides below.

## Option 1: Deploy to Render (Recommended)

1. Push your code to GitHub (already done)
2. Go to [Render.com](https://render.com) and sign up/login
3. Click "New +" and select "Web Service"
4. Choose "Build and deploy from a Git repository"
5. Connect your GitHub account if not already connected
6. Select the `EmotionLens` repository
7. Configure the deployment:
   - Name: `emotionlens` (or your preferred name)
   - Root Directory: `EmotionLens` (if that's where your package.json is)
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start`
   - Instance Type: Free (for testing) or Basic for production

The `render.yaml` in the repository will configure most of this automatically.

## Option 2: Deploy using Docker

You can deploy the Docker container to any platform that supports Docker (Render, Fly.io, Railway, or your own server).

### Build and run locally:
```bash
# Build the image
docker build -t emotionlens .

# Run the container
docker run -p 5000:5000 emotionlens
```

### Deploy to Render with Docker:
1. Go to Render.com
2. Choose "New +" → "Web Service"
3. Select your repository
4. Choose "Docker" as the environment
5. The Dockerfile will be automatically detected and used

### Deploy to Fly.io:
```bash
# Install flyctl if you haven't
curl -L https://fly.io/install.sh | sh

# Login to Fly
fly auth login

# Deploy the app
fly launch
fly deploy
```

## Environment Variables

The app needs these environment variables:
- `PORT`: Port to run the server on (default: 5000)
- `NODE_ENV`: Set to 'production' for production deployment