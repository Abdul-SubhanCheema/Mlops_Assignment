# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory inside `my-app`
WORKDIR /app

# Copy only the package.json from `my-app` folder to install dependencies
COPY my-app/package.json ./

# Install dependencies
RUN npm install  

# Copy the rest of the application files
COPY my-app/. .

# Expose the port your frontend will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 
