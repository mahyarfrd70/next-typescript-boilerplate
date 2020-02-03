FROM node:10.15-stretch
WORKDIR /shop
COPY ./package.json ./
RUN ls
RUN npm install
COPY ./next.config.js ./
COPY ./server.js ./
COPY ./next-env.d.ts ./
COPY ./types ./types
COPY ./tsconfig.json ./
COPY ./.babelrc ./
CMD ["npm" , "run" , "dev"]