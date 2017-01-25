FROM mhart/alpine-node:7
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY index.js /app

EXPOSE 3000

CMD npm start

