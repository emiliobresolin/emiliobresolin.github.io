// assets/js/items.js
const items = [
    {
        id: 1,
        name: "PlayStation 3 Games",
        description: "A bunch of classic games.",
        price: "$150",
        date: "2012-01-15",
        image: "../assets/img/ps3games.png"
    },
    {
        id: 2,
        name: "PlayStation 3 Controller",
        description: "Wireless controller for PS3.",
        price: "$40",
        date: "2012-05-12",
        image: "../assets/img/play3controller.png"
    }
];


// Salvar os itens no localStorage para uso nas outras páginas
localStorage.setItem('items', JSON.stringify(items));
