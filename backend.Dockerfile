FROM node

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY src src

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]