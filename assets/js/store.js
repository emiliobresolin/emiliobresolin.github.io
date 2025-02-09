// assets/js/store.js
const itemsGrid = document.getElementById('items-grid');

// Use os itens diretamente do items.js
items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');

    // Ajuste o caminho das imagens
    const imagePath = item.image;  // A imagem já deve ter o caminho correto

    itemElement.innerHTML = `
        <a href="itemDetail/index.html?id=${item.id}">
            <img src="${imagePath}" alt="${item.name}">
        </a>
        <h3 class="item-name">${item.name}</h3>
        <p class="item-desc">${item.description}</p>
        <p class="item-price">${item.price}</p>
        <p class="item-date">${item.date}</p>
        <button class="interested-btn" onclick="window.location.href='itemDetail/index.html?id=${item.id}'">I'm Interested</button>
    `;
    itemsGrid.appendChild(itemElement);
});
