const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const items = [
  {
    id: 'itemA',
    name: 'Item A',
    description: 'Description of Item A',
    price: '$10.00',
    date: '2022-01-01',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 'itemB',
    name: 'Item B',
    description: 'Description of Item B',
    price: '$20.00',
    date: '2022-02-01',
    image: 'https://via.placeholder.com/150'
  },
  // Add more items as needed
];

app.get('/api', (req, res) => {
  const { id } = req.query;
  const item = items.find(i => i.id === id);
  if (item) {
    return res.status(200).json({ ok: true, item });
  } else {
    return res.status(404).json({ ok: false, message: 'Item not found' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
