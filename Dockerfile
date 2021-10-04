FROM node:16-alpine as build-stage
RUN mkdir /service
WORKDIR /service
COPY package.json \
  server_dev.js ./
RUN yarn
COPY .babelrc ./
COPY src ./src
COPY server ./server
COPY public ./public
RUN yarn build:server
RUN yarn build:front


FROM node:16-alpine
RUN mkdir /service
WORKDIR /service
COPY --from=build-stage /service/package.json .
RUN yarn install --prod --network-timeout 120000
COPY --from=build-stage /service/dist ./server
COPY --from=build-stage /service/build ./build
EXPOSE 4000

CMD ["npm","run", "server:prod"]