FROM mhart/alpine-node:latest AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .

EXPOSE 8000
CMD ["serve", "-p", "80", "-s", "."]
