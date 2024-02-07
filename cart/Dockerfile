FROM node:21-alpine3.18

WORKDIR /cart

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4003

CMD [ "npm", "run", "watch" ]