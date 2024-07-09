FROM 634976661107.dkr.ecr.eu-west-1.amazonaws.com/node:18-alpine
WORKDIR app
COPY . .
RUN npm install
EXPOSE 80
CMD ["node","index.js"]
