FROM node:alpine

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . .

HEALTHCHECK --interval=5s --timeout=10s --retries=3 CMD curl --silent --fail http://localhost/health || exit 1

CMD ["npm","run", "dev"]