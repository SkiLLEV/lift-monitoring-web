const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Початковий стан системи
let systemState = {
    liftA: { floor: 1, status: 'Closed' },
    liftB: { floor: 1, status: 'Open' },
    systemName: "Elevator Control Dashboard (Node.js)",
    temperature: 22
};

// Емуляція датчиків: кожні 5 секунд змінюємо дані на сервері
setInterval(() => {
    systemState.liftA.floor = Math.floor(Math.random() * 11) + 1;
    systemState.liftA.status = Math.random() > 0.5 ? 'Open' : 'Closed';

    systemState.liftB.floor = Math.floor(Math.random() * 11) + 1;
    systemState.liftB.status = Math.random() > 0.5 ? 'Open' : 'Closed';

    systemState.temperature = Math.floor(Math.random() * 10) + 20;
    console.log('Дані оновлено:', systemState.liftA.floor, systemState.liftB.floor);
}, 5000);

// GET: Віддаємо статус фронтенду
app.get('/api/status', (req, res) => {
    res.json(systemState);
});

// POST: Приймаємо налаштування від фронтенду
app.post('/api/settings', (req, res) => {
    const { name } = req.body;
    if (name) {
        systemState.systemName = name;
        console.log(`Назву змінено на: ${name}`);
        res.status(200).json({ message: "Налаштування збережено" });
    } else {
        res.status(400).json({ error: "Некоректна назва" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущено на http://localhost:${PORT}`);
});