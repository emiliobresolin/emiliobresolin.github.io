// assets/js/items.js
const items = [
    {
        id: 1,
        name: "PlayStation 3",
        description: "A classic gaming console.",
        price: "$150",
        date: "2020-01-15",
        image: "../assets/img/ps3games.png"
    },
    {
        id: 2,
        name: "PlayStation 3 Controller",
        description: "Wireless controller for PS3.",
        price: "$40",
        date: "2021-05-12",
        image: "../assets/img/play3controller.png"
    }
];

// assets/js/store.js
const itemsGrid = document.getElementById('items-grid');

items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `
        <a href="itemDetail/index.html?id=${item.id}">
            <img src="${item.image}" alt="${item.name}">
        </a>
        <h3 class="item-name">${item.name}</h3>
        <p class="item-desc">${item.description}</p>
        <p class="item-price">${item.price}</p>
        <p class="item-date">${item.date}</p>
        <button class="interested-btn" onclick="window.location.href='itemDetail/index.html?id=${item.id}'">I'm Interested</button>
    `;
    itemsGrid.appendChild(itemElement);
});