FROM node:alpine as builder

ENV NODE_ENV=production

WORKDIR /app

USER 0
COPY package.json .
COPY package-lock.json .
RUN npm ci --production

USER node
COPY src .
COPY index.js .

FROM node:slim as runner
COPY --from=builder /app /app
USER node
WORKDIR /app
CMD [ "node", "index.js" ]




