const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const port = 8080;
const prisma = new PrismaClient();



app.get('/', (req, res) => {
  res.send("Servidor Backend Global Stuxiom Host localhost");
});

// Aqui van mis llamadas a la base de datos, recuerda modificar esto ya que ira para un servidor global
app.get('/planes', async (req, res) => {
  try {
    const planes = await prisma.planes.findMany();
    res.json(planes);
  } catch (error) {
    console.error("Error al obtener los planes:", error);
    res.status(500).json({ error: 'Error al obtener los planes' });
  }
});
//----------------------------------------------------------

app.listen(port, () => {
  console.log(`ip:${port}`);
});
