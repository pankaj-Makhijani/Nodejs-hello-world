FROM public.ecr.aws/m9h7v0h3/node:18-alpine
WORKDIR app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node","index.js"]