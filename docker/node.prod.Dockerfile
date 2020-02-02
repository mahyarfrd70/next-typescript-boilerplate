FROM node:10.15-stretch as builder
WORKDIR /shop
COPY ./package.json ./
RUN ls
RUN npm install
COPY ./next.config.js ./
COPY ./server.js ./
COPY ./next-env.d.ts ./
COPY ./customType.d.ts ./
COPY ./tsconfig.json ./
COPY ./.babelrc ./
COPY ./.eslintrc ./
COPY ./.prettierrc ./
COPY ./jest.config.js ./
COPY ./jest.setup.js ./
COPY ./src ./src
COPY ./static ./static
COPY ./pages ./pages
COPY ./__test__ ./__test__
RUN ls -la
RUN npm run build

FROM node:10.15-stretch
WORKDIR /shop
COPY --from=builder ./shop/.next ./.next
COPY --from=builder ./shop/node_modules ./node_modules
COPY --from=builder ./shop/server.js ./
COPY --from=builder ./shop/package.json ./
CMD [ "npm", "start" ]