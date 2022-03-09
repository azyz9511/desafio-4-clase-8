const express = require('express');
const productosRouter = require('./routers/productos');

const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// llamada del index.html en la raiz
app.use(express.static(__dirname));
app.use('/api/productos',productosRouter);

const server = app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${server.address().port}`);
});
server.on('error', error => console.log(error));