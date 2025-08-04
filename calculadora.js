const express = require('express');
const app = express();
const port = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.json({ Hello: 'World' });
});

// Rota com parâmetro e query opcional
app.get('/items/:item_id', (req, res) => {
  const item_id = parseInt(req.params.item_id);
  const q = req.query.q || null;
  res.json({ item_id, q });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
