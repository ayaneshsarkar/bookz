FROM node:14.17.3-alpine3.14

RUN addgroup web && adduser -S  -G web web
USER web

WORKDIR /web

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]