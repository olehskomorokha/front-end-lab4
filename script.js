// (n mod 10)+1 = (26 mode 10) + 1 = 7;
document.getElementById("element7").onclick = function () {
    var element = document.getElementById("element7");
    // Перевіряємо поточний колір і змінюємо його
    if (element.style.backgroundColor === "red") {
        element.style.backgroundColor = "white";
        element.style.color = "black";
    } else {
        element.style.backgroundColor = "red";
        element.style.color = "white";
    }
};


const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, ol');

elements.forEach((element, index) => {
    element.id = `element-${index + 1}`; 
    element.addEventListener('click', () => {
        if ((index + 1) % 5 === 0) {
            element.classList.toggle('lighted');
        } else {
            element.classList.toggle('highlighted');
        }
    });
    element.addEventListener('dblclick', () => {
        element.classList.remove('highlighted', 'lighted');
    });
});

const image = document.querySelector('img');

// Додати зображення
document.getElementById('add-image').addEventListener('click', () => {
    image.style.width = `500px`;
});

// Збільшити зображення
document.getElementById('increase-image').addEventListener('click', () => {
    image.style.width = `${image.offsetWidth * 1.1}px`;
});

// Зменшити зображення
document.getElementById('decrease-image').addEventListener('click', () => {
    image.style.width = `${image.offsetWidth * 0.9}px`;
});

// Видалити зображення
document.getElementById('remove-image').addEventListener('click', () => {
    image.style.width = `0px` ;
});