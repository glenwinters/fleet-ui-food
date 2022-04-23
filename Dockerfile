FROM node:16.14 as builder

COPY package.json package-lock.json ./

RUN npm ci --production && npm cache clean --force

COPY . .

RUN ls

RUN npm run build

FROM nginx:1.21 as runner

COPY --from=builder ./build/ /usr/share/nginx/html/