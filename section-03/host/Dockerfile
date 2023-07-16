FROM node

WORKDIR /src

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

ENV MONGODB_URI=mongodb://host.docker.internal:27017/host

CMD ["node", "app.js"]