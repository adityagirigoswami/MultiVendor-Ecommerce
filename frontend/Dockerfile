# Use official Node image
FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

# Expose port and start app
EXPOSE 3000
CMD ["npm", "start"]
