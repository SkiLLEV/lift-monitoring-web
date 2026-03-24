// 1. Оголошуємо змінні глобально
let liftAFloor, cabinA, cabinB, logContainer;

document.addEventListener('DOMContentLoaded', () => {
    // Пошук елементів у DOM
    liftAFloor = document.getElementById('lift-a-floor');
    cabinA = document.getElementById('cabin-a');
    cabinB = document.getElementById('cabin-b'); // Додано для ліфта В
    logContainer = document.getElementById('log-container');
    const settingsForm = document.querySelector('#settings-form');
    const mainTitle = document.querySelector('#main-title');

    // 2. Запуск циклу оновлення даних кожні 3 секунди
    // Викликаємо функцію для обох ліфтів
    setInterval(updateAllLifts, 3000);

    // 3. Обробка форми налаштувань
    if (settingsForm) {
        settingsForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Зупиняємо перезавантаження сторінки

            const formData = new FormData(settingsForm);
            const systemName = formData.get('systemName').trim();
            const maxTemp = formData.get('maxTemp');

            // Валідація
            if (maxTemp < 0 || maxTemp > 100) {
                alert("Помилка: Температура має бути в межах 0-100°C!");
                return;
            }

            // Якщо назва не порожня, оновлюємо заголовок
            if (systemName) {
                mainTitle.textContent = systemName;
                addLog(`Settings updated: Name changed to "${systemName}"`);
            }
        });
    }
});

/**
 * Функція розрахунку позиції кабіни у відсотках (0-95%)
 * @param {number} floor - Номер поверху від 1 до 11
 */
function calculatePosition(floor) {
    // (floor - 1) робить так, щоб 1-й поверх був на 0% (саме дно)
    // Ділимо на 10 (кількість проміжків між 1 та 11 поверхом)
    return ((floor - 1) / 10) * 95;
}

/**
 * Оновлення стану обох ліфтів
 */
function updateAllLifts() {
    if (!liftAFloor || !cabinA || !cabinB) return;

    // --- ЛІФТ А ---
    const newFloorA = Math.floor(Math.random() * 11) + 1;
    liftAFloor.textContent = `${newFloorA} floor`;
    cabinA.style.bottom = `${calculatePosition(newFloorA)}%`;
    addLog(`Lift A moved to floor ${newFloorA}`);

    // --- ЛІФТ B ---
    // Для ліфта B можна згенерувати інший поверх для різноманітності
    const newFloorB = Math.floor(Math.random() * 11) + 1;

    // Шукаємо текстове поле для Ліфта B (третій заголовок h3 у сітці карток)
    const liftBFloorText = document.querySelectorAll('h3')[2];
    if (liftBFloorText) {
        liftBFloorText.textContent = `${newFloorB} floor`;
    }

    // Рухаємо кабіну B
    cabinB.style.bottom = `${calculatePosition(newFloorB)}%`;
    addLog(`Lift B moved to floor ${newFloorB}`);
}

/**
 * Функція створення логів
 */
function addLog(message) {
    if (!logContainer) return;
    const time = new Date().toLocaleTimeString();
    const logEntry = document.createElement('p');
    logEntry.className = 'text-xs text-gray-500 border-b border-gray-100 pb-1';
    logEntry.innerHTML = `<span class="font-mono text-blue-500">${time}</span> — ${message}`;

    logContainer.prepend(logEntry);

    // Обмежуємо кількість логів, щоб сторінка не гальмувала (наприклад, останні 20)
    if (logContainer.children.length > 20) {
        logContainer.removeChild(logContainer.lastChild);
    }
}