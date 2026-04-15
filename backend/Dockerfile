# Використовуємо легкий образ Node.js
FROM node:18-alpine

# Робоча папка всередині контейнера
WORKDIR /app

# Копіюємо файли залежностей
COPY package*.json ./
RUN npm install

# Копіюємо весь код сервера
COPY . .

# Відкриваємо порт 3000
EXPOSE 3000

# Команда для запуску
CMD ["node", "server.js"]