// Слушатель изменения языка
const languageSelect = document.getElementById('languageSelect');
languageSelect.addEventListener('change', changeLanguage);

// Функция для смены языка
function changeLanguage() {
    const lang = languageSelect.value;
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const maxLabel = document.getElementById('maxLabel');
    
    switch (lang) {
        case 'ru':
            title.textContent = 'Твоё рандомное число 🤖';
            description.textContent = 'Выбери максимальное число и нажми, чтобы получить уникальную цифру';
            maxLabel.textContent = 'Максимальное число: ';
            break;
        case 'en':
            title.textContent = 'Your Random Number 🤖';
            description.textContent = 'Choose a maximum number and click to get a unique digit';
            maxLabel.textContent = 'Maximum number: ';
            break;
        case 'uzb':
            title.textContent = 'Tasodifiy son 🤖';
            description.textContent = 'Maksimal sonni tanlang va noyob raqamni olish uchun bosing';
            maxLabel.textContent = 'Maksimal son: ';
            break;
        default:
            break;
    }
}

// Функция для обновления текста с текущим значением ползунка
const slider = document.getElementById('maxNumber');
const maxValueElement = document.getElementById('maxValue');
slider.addEventListener('input', function() {
    maxValueElement.textContent = slider.value;
});

// Функция для генерации случайного числа
function generateRandomNumber() {
    const max = parseInt(slider.value); 
    const randomNumber = Math.floor(Math.random() * max) + 1;
    
    const outputElement = document.querySelector('.output');
    
    // Сбрасываем анимацию
    outputElement.style.animation = 'none';
    outputElement.offsetHeight; // Принудительный рендер
    outputElement.style.animation = 'fadeIn 0.5s forwards';

    outputElement.textContent = randomNumber;
}

// Функция для смены дня и ночи
function toggleDayNight() {
    const body = document.body;
    const isNight = body.classList.contains('night-theme');
    
    if (isNight) {
        body.classList.remove('night-theme');
        body.classList.add('day-theme');
        document.getElementById('toggleDayNight').textContent = '🌙';  // Стикер для ночной темы
    } else {
        body.classList.remove('day-theme');
        body.classList.add('night-theme');
        document.getElementById('toggleDayNight').textContent = '🌞';  // Стикер для дневной темы
    }
}

// Устанавливаем начальную тему как дневную
document.body.classList.add('day-theme');
document.getElementById('toggleDayNight').textContent = '🌙';  // Начальный стикер для ночной темы
