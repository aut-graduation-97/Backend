FROM node:alpine as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
USER node
COPY src .
COPY server.js .
COPY app.js .

FROM node:slim as production

ENV NODE_ENV=production

COPY --from=builder /app /app
WORKDIR /app

RUN npm ci --production

USER node

EXPOSE 8080

CMD [ "node", "server.js" ]

FROM node:alpine as development

ENV NODE_ENV=development

COPY --from=builder /app /app
WORKDIR /app

RUN npm install --unsafe-perm=true --allow-root

EXPOSE 8080

CMD ["npm", "run", "dev"]


