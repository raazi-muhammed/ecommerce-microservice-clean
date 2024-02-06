FROM node:21-alpine3.18

WORKDIR /product

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4002

CMD [ "npm", "run", "watch" ]