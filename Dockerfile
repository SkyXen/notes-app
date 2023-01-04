FROM node:alpine

WORKDIR /app

HEALTHCHECK --interval=5s --timeout=10s --retries=3 CMD curl --silent --fail http://localhost/health || exit 1

COPY package*.json .

RUN npm ci

COPY . .

CMD ["npm","run", "dev"]