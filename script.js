function createObject() {
    // Отримання значення кількості елементів з форми
    const numberOfElements = document.getElementById('numberOfElements').value;

    // Створення об'єкта "Carousel" з довільною кількістю елементів
    const carouselObject = {
        type: 'Carousel',
        elements: []
    };

    for (let i = 1; i <= numberOfElements; i++) {
        carouselObject.elements.push({
            id: i,
            content: `Елемент ${i}`
        });
    }

    // Відправка об'єкта на сервер (використовуючи AJAX або fetch з PHP)
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'saveObject.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Дані успішно відправлені на сервер');
        } else {
            console.error('Помилка відправки даних на сервер');
        }
    };
    xhr.send(JSON.stringify(carouselObject));
}

// Варіант для отримання об'єкта з сервера і відображення на другій сторінці не надано.
