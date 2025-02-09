// store.js
const items = [
    {
        id: 1,
        name: "PS3",
        description: "Plplaystation 3 I bought back when I was living in Astralia containing games and one controller",
        price: "$100",
        date: "10/11/2012",
        image: "../assets/images/play3.png",
        thumbnails: [ 
            "../assets/images/play3.png",
            "../assets/images/play3controller.png",
            "../assets/images/ps3games.png"
        ]
    },
    {
        id: 2,
        name: "Leather Wallet",
        description: "Handmade leather wallet with RFID protection.",
        price: "$45",
        date: "2024-01-10",
        image: "../assets/images/wallet.jpg",
        thumbnails: [
            "../assets/images/wallet1.jpg",
            "../assets/images/wallet2.jpg",
            "../assets/images/wallet3.jpg"
        ]
    }
];

const itemsGrid = document.getElementById('items-grid');

items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `
        <a href="itemDetail.html?id=${item.id}">
            <img src="${item.image}" alt="${item.name}">
        </a>
        <h3 class="item-name">${item.name}</h3>
        <p class="item-desc">${item.description}</p>
        <p class="item-price">${item.price}</p>
        <p class="item-date">${item.date}</p>
        <button class="interested-btn" onclick="window.location.href='itemDetail.html?id=${item.id}'">I'm Interested</button>
    `;
    itemsGrid.appendChild(itemElement);
});
