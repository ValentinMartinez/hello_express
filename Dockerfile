FROM node:14

EXPOSE 8080

WORKDIR /usr/src/app

COPY . .

ENV PORT=8080
ENV BACKEND_MESSAGE="DevOpsWithDocker"

RUN npm install

CMD ["npm","start"]