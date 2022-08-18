import express  from "express";

const app = express();
// configurar a view engine com EJS *LINHA OBRIGATORIA*
app.set('view engine', 'ejs')


// configurando rotas
app.get('/', (req, res) => {
    res.send('testando'); 
});

// executando o servidor
app.listen(8080, () => {
    console.log('servidor express rodando');
});

app.get('/sobre', (req, res) => {
    res.send('sobre')
})

app.get('/', (req, res) => {
    const bandas = ['the weekend', 'travis scott', 'gorillaz']
    res.render('paginas/index', {bandas})
})

app.get('/sobre', (req, res) => {
    res.render('paginas/sobre')
})

app.get('/index', (req, res) => {
    res.render('paginas/index')
})

app.get('/contato', (req, res) => {
    res.render('paginas/contato')
})

/* instalando o nodemon -> atualiza o servidor automaticamente
npm install -g nodemon */

/* preparar para receber arquivos HTML
instalação do EJS - npm install ejs */