FROM node:lts-buster-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "dev" ]

HEALTHCHECK CMD curl --fail http://localhost:5000 || exit 1  
 