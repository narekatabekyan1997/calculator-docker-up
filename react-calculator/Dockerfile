FROM node:14
WORKDIR /usr/src/react/app
COPY package*.json ./

COPY . .
RUN npm i
CMD ["npm", "run", "start"]
