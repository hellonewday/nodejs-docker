FROM node:14-alpine
WORKDIR /src/server

RUN apt-get update

RUN apt-get install ca-certificates

COPY package*.json ./

RUN npm install --only=production

RUN npm install -g pm2

COPY . .

EXPOSE 3002

CMD [ "pm2-runtime", "start", "server.js", "-i", "max" ]
