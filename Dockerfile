# Use official Node.js image
FROM node:22

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port your app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
