FROM node

USER node
WORKDIR /opt/web/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
# CMD [ "npm", "run", "dev" ]
CMD [ "/bin/bash", "/opt/web/app/cmd/start.sh" ]


