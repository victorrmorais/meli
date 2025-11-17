import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Rota para buscar produto pelo nome (simples)
app.get('/produto', (req, res) => {
  const query = req.query.q || '';

  // Produto fixo apenas para demonstração
  const produto = {
    titulo: `Produto encontrado: ${query}`,
    descricao: 'Apple Ipod touch 5G - 16GB Negro Igual A Nuevo Completo Unico!',
    preco: 1.980
  };

  res.json(produto);
});


app.listen(3001, () => {
console.log('Backend rodando na porta 3001');
});