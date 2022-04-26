FROM node

WORKDIR /myapp

COPY ./package.json .

RUN npm install

COPY index.js .

CMD ["node","index.js"];