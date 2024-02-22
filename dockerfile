# Use a Node.js base image with Yarn pre-installed
FROM node:18.6.0-slim

# Set the working directory inside the container
WORKDIR /src
COPY . .
RUN yarn install --ignore-optional --production
RUN yarn add --dev eslint
# Build the Next.js application
RUN yarn build 


# Start the Next.js application
CMD ["yarn", "start"]