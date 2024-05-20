# Define the base image
FROM node:20.13.1-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port where the React application will run (usually 3000)
EXPOSE 3000

# Define the default command to run when the container starts
CMD [ "npm", "start" ]