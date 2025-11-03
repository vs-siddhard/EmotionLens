# Build stage
FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=5000

# Copy built assets and production dependencies
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "dist/index.js"]