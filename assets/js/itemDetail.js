// assets/js/itemDetail.js
const urlParams = new URLSearchParams(window.location.search);
const itemId = parseInt(urlParams.get('id'));

// Encontre o item correspondente no array items
const selectedItem = items.find(item => item.id === itemId);

// Atualize o conteúdo da página com os detalhes do item
if (selectedItem) {
    document.getElementById('main-image').src = selectedItem.image;
    document.getElementById('item-name').textContent = selectedItem.name;
    document.getElementById('item-desc').textContent = selectedItem.description;
    document.getElementById('item-price').textContent = `Price: ${selectedItem.price}`;
    document.getElementById('item-date').textContent = `Acquired on: ${selectedItem.date}`;
} else {
    console.log("Item não encontrado.");
}
