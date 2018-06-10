FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 3000:3000

CMD [ "npm", "start" ]