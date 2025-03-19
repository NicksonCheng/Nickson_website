# Use Node.js base image
FROM node:22.14.0 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY website-backend/package.json website-backend/package-lock.json ./website-backend/
RUN cd website-backend && npm install

# Copy project files
COPY website-backend ./website-backend

# Final stage: runtime container
FROM node:22.14.0

WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/website-backend /app/website-backend

# Expose port for backend
EXPOSE 5000

# Start backend
CMD cd website-backend && npx nodemon