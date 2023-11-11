# Stage 1: Build frontend
FROM node:14 as build

WORKDIR /app
COPY . ./
RUN NODE_ENV=development npm install
RUN npm run build

# Stage 2: Serve frontend with NGINX
FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
