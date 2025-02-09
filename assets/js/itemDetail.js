// itemDetail.js
const urlParams = new URLSearchParams(window.location.search);
const itemId = parseInt(urlParams.get('id'));

const selectedItem = items.find(item => item.id === itemId);

if (selectedItem) {
    document.getElementById('main-image').src = selectedItem.image;
    document.getElementById('item-name').textContent = selectedItem.name;
    document.getElementById('item-desc').textContent = selectedItem.description;
    document.getElementById('item-price').textContent = `Price: ${selectedItem.price}`;
    document.getElementById('item-date').textContent = `Acquired on: ${selectedItem.date}`;

    const thumbnailContainer = document.getElementById('thumbnail-container');
    selectedItem.thumbnails.forEach(thumbnail => {
        const img = document.createElement('img');
        img.src = thumbnail;
        img.alt = `Thumbnail of ${selectedItem.name}`;
        img.onclick = () => document.getElementById('main-image').src = thumbnail;
        thumbnailContainer.appendChild(img);
    });
}
