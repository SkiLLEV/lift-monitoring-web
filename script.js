// 1. Оголошуємо змінні глобально, щоб усі функції мали до них доступ
let liftAFloor, cabinA, logContainer;

document.addEventListener('DOMContentLoaded', () => {
    liftAFloor = document.getElementById('lift-a-floor');
    cabinA = document.getElementById('cabin-a');
    logContainer = document.getElementById('log-container');
    const settingsForm = document.querySelector('#settings-form');

    // 3. Запуск циклу оновлення даних кожні 3 секунди
    setInterval(updateLiftData, 3000);

    // 4. Обробка форми налаштувань
    if (settingsForm) {
        settingsForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Зупиняємо перезавантаження сторінки

            const formData = new FormData(settingsForm);
            const systemName = formData.get('systemName');
            const maxTemp = formData.get('maxTemp');

            // Валідація
            if (maxTemp < 0 || maxTemp > 100) {
                alert("Помилка: Температура має бути в межах 0-100°C!");
                return;
            }

            document.querySelector('#main-title').textContent = systemName;
            addLog(`Settings updated: Name changed to ${systemName}`);
        });
    }
});

// Функція оновлення ліфта
function updateLiftData() {
    if (!liftAFloor || !cabinA) return;

    const newFloor = Math.floor(Math.random() * 11) + 1;
    liftAFloor.textContent = `${newFloor} floor`;

    // Візуальний рух кабіни
    const position = (newFloor / 16) * 100;
    cabinA.style.bottom = `${position}%`;

    addLog(`Lift A moved to floor ${newFloor}`);
}

// Функція створення логів
function addLog(message) {
    if (!logContainer) return;
    const time = new Date().toLocaleTimeString();
    const logEntry = document.createElement('p');
    logEntry.className = 'text-xs text-gray-500 border-b border-gray-100 pb-1';
    logEntry.innerHTML = `<span class="font-mono text-blue-500">${time}</span> — ${message}`;
    logContainer.prepend(logEntry);
}