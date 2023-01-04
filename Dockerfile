FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=30s \
  CMD curl -f http://localhost:3000/health

CMD [ "npm", "run", "dev" ]
 