FROM node:14-alphine

WORKDIR /src/client

COPY package.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm","start"]