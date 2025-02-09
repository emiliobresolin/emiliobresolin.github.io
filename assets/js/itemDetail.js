// assets/js/itemDetail.js
const urlParams = new URLSearchParams(window.location.search);
const itemId = parseInt(urlParams.get('id'));

// Encontre o item correspondente no array items
const selectedItem = items.find(item => item.id === itemId);

// Atualize o conteúdo da página com os detalhes do item
if (selectedItem) {
    // Corrige o caminho da imagem para itemDetail
    document.getElementById('main-image').src = selectedItem.image.replace('../', '../../');  // Caminho ajustado para voltar dois níveis
    document.getElementById('item-name').textContent = selectedItem.name;
    document.getElementById('item-desc').textContent = selectedItem.description;
    document.getElementById('item-price').textContent = `Price: ${selectedItem.price}`;
    document.getElementById('item-date').textContent = `Acquired on: ${selectedItem.date}`;
    document.getElementById('item-full-desc').textContent = selectedItem.fullDescription;  // A chave fullDescription deve estar no seu array de itens
} else {
    console.log("Item não encontrado.");
}


