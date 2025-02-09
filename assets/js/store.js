const itemsGrid = document.getElementById('items-grid');

// Recupera os itens do localStorage
const items = JSON.parse(localStorage.getItem('items'));

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
