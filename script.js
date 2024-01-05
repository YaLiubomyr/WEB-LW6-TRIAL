function createCarousel() {
    // Отримуємо значення з форми
    var numberOfElements = document.getElementById("numberOfElements").value;

    // Створюємо об'єкт "Carousel"
    var carouselObject = {
        numberOfElements: numberOfElements,
        // Додайте інші параметри за потреби
    };

    // Використовуйте Ajax або Fetch для взаємодії з сервером (PHP)
    // Відправляємо дані на сервер
    fetch('save_data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(carouselObject),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
