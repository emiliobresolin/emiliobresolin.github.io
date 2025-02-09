// Recupera os itens do localStorage
const items = JSON.parse(localStorage.getItem('items'));

// Pega o ID do item da URL
const urlParams = new URLSearchParams(window.location.search);
const itemId = parseInt(urlParams.get('id'));

// Encontra o item correspondente ao ID
const selectedItem = items.find(item => item.id === itemId);

// Preenche os dados do item na página
if (selectedItem) {
    document.getElementById('main-image').src = selectedItem.image;
    document.getElementById('item-name').textContent = selectedItem.name;
    document.getElementById('item-desc').textContent = selectedItem.description;
    document.getElementById('item-price').textContent = `Price: ${selectedItem.price}`;
    document.getElementById('item-date').textContent = `Acquired on: ${selectedItem.date}`;
}
