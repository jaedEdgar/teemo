# from base image node
FROM node:12

RUN mkdir -p /usr/src/app

COPY [ "package*.json", "/usr/src/app/"]

WORKDIR /usr/src/app

RUN npm install

COPY [".", "/usr/src/app/"]

EXPOSE 8080

CMD ["npm","run", "dev"]