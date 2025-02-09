// Verifique se os itens já estão no localStorage
if (!localStorage.getItem('items')) {
    // Se não houver itens no localStorage, salve os dados (primeira vez que a página é carregada)
    const defaultItems = [
        {
            id: 1,
            name: "PlayStation 3",
            description: "A classic gaming console.",
            price: "$150",
            date: "2012-01-15",
            image: "../assets/img/play3.png"
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
    // Salve no localStorage
    localStorage.setItem('items', JSON.stringify(defaultItems));
    console.log("Itens salvos no localStorage!");
}

// Agora você pode acessar os itens do localStorage
const itemsGrid = document.getElementById('items-grid');

// Recupera os itens do localStorage
const itemsFromStorage = JSON.parse(localStorage.getItem('items'));
console.log("Itens carregados do localStorage:", itemsFromStorage);

if (itemsFromStorage && itemsFromStorage.length > 0) {
    itemsFromStorage.forEach(item => {
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
} else {
    console.log("Nenhum item encontrado no localStorage.");
}
