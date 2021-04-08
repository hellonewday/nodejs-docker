FROM node:14-alpine
WORKDIR /src/app

COPY package*.json ./

RUN npm install --only=production && npm install -g pm2

COPY . .

EXPOSE 3001

CMD [ "pm2-runtime", "start", "server.js", "-i", "max" ]
