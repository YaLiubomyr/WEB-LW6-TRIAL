function createCarousel() {
    var numItems = document.getElementById("numItems").value;
    var carouselContainer = document.getElementById("carouselContainer");
    
    // Clear previous content
    carouselContainer.innerHTML = "";

    // Create Carousel
    var carousel = document.createElement("div");
    carousel.className = "carousel";

    // Create Carousel items
    for (var i = 1; i <= numItems; i++) {
        var item = document.createElement("div");
        item.className = "carousel-item";
        item.innerText = "Item " + i;
        carousel.appendChild(item);
    }

    carouselContainer.appendChild(carousel);
}

function saveDataOnServer(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save_data.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Data saved successfully!");
        }
    };

    xhr.send(JSON.stringify(data));
}

function createCarousel() {
    var numItems = document.getElementById("numItems").value;
    var carouselContainer = document.getElementById("carouselContainer");
    
    // Clear previous content
    carouselContainer.innerHTML = "";

    // Create Carousel
    var carousel = document.createElement("div");
    carousel.className = "carousel";

    // Create Carousel items
    for (var i = 1; i <= numItems; i++) {
        var item = document.createElement("div");
        item.className = "carousel-item";
        item.innerText = "Item " + i;
        carousel.appendChild(item);
    }

    carouselContainer.appendChild(carousel);

    // Save data asynchronously
    saveDataOnServer({ numItems: numItems, content: "Your additional data here" });
}

document.addEventListener("DOMContentLoaded", function () {
    fetchDataFromServer();
});

function fetchDataFromServer() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "get_data.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            renderCarousel(data);
        }
    };

    xhr.send();
}

function renderCarousel(data) {
    var carouselContainer = document.getElementById("carouselContainer");

    // Create Carousel
    var carousel = document.createElement("div");
    carousel.className = "carousel";

    // Create Carousel items
    for (var i = 0; i < data.numItems; i++) {
        var item = document.createElement("div");
        item.className = "carousel-item";
        item.innerText = "Item " + (i + 1);
        carousel.appendChild(item);
    }

    carouselContainer.appendChild(carousel);
}

document.addEventListener("DOMContentLoaded", function () {
    fetchDataFromServer(); // Викликаємо спочатку для відображення даних при завантаженні сторінки
    setInterval(fetchDataFromServer, 5000); // Оновлення кожні 5 секунд (можна налаштувати інтервал)
});

function fetchDataFromServer() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "get_data.php", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            renderCarousel(data);
        }
    };

    xhr.send();
}

function renderCarousel(data) {
    var carouselContainer = document.getElementById("carouselContainer");

    // Clear previous content
    carouselContainer.innerHTML = "";

    // Create Carousel
    var carousel = document.createElement("div");
    carousel.className = "carousel";

    // Create Carousel items
    for (var i = 0; i < data.numItems; i++) {
        var item = document.createElement("div");
        item.className = "carousel-item";
        item.innerText = "Item " + (i + 1);
        carousel.appendChild(item);
    }

    carouselContainer.appendChild(carousel);
}
