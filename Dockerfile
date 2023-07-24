FROM node:20-alpine

ADD . /app/

WORKDIR /app

RUN npm install

EXPOSE 8081

CMD ["node", "server.js"]
#ENTRYPOINT ["npm"]

#CMD ["start"]
