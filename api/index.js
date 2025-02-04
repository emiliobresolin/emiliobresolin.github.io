const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  const { data } = req.query;

  return res.status(200).json({ ok: true, data });
});

app.listen(3000);
