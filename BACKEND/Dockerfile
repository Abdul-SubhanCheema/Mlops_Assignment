# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json if it exists
COPY package.json ./
COPY package-lock.json ./  

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the backend will run on
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
