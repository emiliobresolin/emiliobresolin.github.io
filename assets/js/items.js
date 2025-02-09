const items = [
    {
        id: 1,
        name: "PlayStation 3",
        description: "A classic gaming console.",
        fullDescription: "This wireless controller uses Bluetooth for a seamless gaming experience. It has a rechargeable battery and comfortable ergonomic design, with pressure-sensitive buttons and a built-in speaker for added immersion.",
        price: "$150",
        date: "2012-01-15",
        image: "../assets/img/ps3games.png" // Caminho correto em relação a store/index.html
    },
    {
        id: 2,
        name: "PlayStation 3 Controller",
        description: "Wireless controller for PS3.",
        fullDescription: "This wireless controller uses Bluetooth for a seamless gaming experience. It has a rechargeable battery and comfortable ergonomic design, with pressure-sensitive buttons and a built-in speaker for added immersion.",
        price: "$40",
        date: "2012-05-12",
        image: "../assets/img/play3controller.png"
    }
];


// Salvar os itens no localStorage para uso nas outras páginas
localStorage.setItem('items', JSON.stringify(items));
