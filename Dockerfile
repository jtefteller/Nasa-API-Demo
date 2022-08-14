FROM node:latest

COPY package*.json .
CMD ["npm", "install"]
COPY . .  
EXPOSE 3000
CMD [ "npm", "run", "start" ]