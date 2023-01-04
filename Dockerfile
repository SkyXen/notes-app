FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

HEALTHCHECK --interval=5s --timeout=10s \
  CMD curl -f http://localhost:3000/notes/health || exit 1

CMD [ "npm", "run", "dev" ]
 