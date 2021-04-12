FROM node:14-alphine

WORKDIR /src/client

COPY package.json ./

RUN npm install --only=production && npm run build && npm install -g serve 

COPY . . 

EXPOSE 3000

CMD ["serve","-s","build"]