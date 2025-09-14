# pull official base image
FROM node:14-alpine as build

# Set working directory
WORKDIR /app

# copy files to working directory
COPY package*.json ./

# install dependencies 
RUN npm install

# copy local files to working directory
COPY . .

# expose port
EXPOSE 3000

# start app
CMD ["npm", "run", "dev"]
