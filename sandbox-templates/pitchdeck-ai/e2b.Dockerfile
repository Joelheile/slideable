FROM node:20-slim

# Install app dependencies
WORKDIR /home/user/app
COPY . /home/user/app
RUN npm install

# Build the React app for production
RUN npm run build

# Install a simple HTTP server to serve the build
RUN npm install -g serve

# Expose the default port
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]
