# Збірка (Build)
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Відкриваємо порт Vite
EXPOSE 5173

# Запускаємо в режимі розробки з доступом ззовні
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]