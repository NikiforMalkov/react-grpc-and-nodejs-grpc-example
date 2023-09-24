FROM node:16.14.2-alpine3.15

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci
COPY . .
RUN npm run tsc 

CMD [ "npm", "start" ]
