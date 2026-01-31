const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bamba-Job fonctionne sur Railway ! 🚀');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
