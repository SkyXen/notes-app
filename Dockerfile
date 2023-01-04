FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=30s \
  CMD healthcheck.js

CMD [ "npm", "run", "dev" ]
 