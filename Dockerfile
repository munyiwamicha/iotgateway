FROM node:16-alpine

ADD . /app/

WORKDIR /app

RUN npm install

EXPOSE 8759

CMD ["node", "server.js"]
#ENTRYPOINT ["npm"]

#CMD ["start"]
