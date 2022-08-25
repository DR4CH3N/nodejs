import Express from "express";
const app = Express();

// configurando o motor de visualização com EJS
app.set('view engine', 'ejs');


// configurando rotas
app.get('/', (req, res) => {
    // res.send('urraah!')
    let bandas = ['the weekend', 'freddie dredd', 'travis scott', 'asap rocky'];
    res.render('index', {bandas});
})

app.get('/sobre', (req, res) => {
    res.render('sobre');
})
app.get('/contato', (req, res) => {
    res.render('contato');
})


// configurando o servidor
app.listen(3000, () => {
    console.log('server express rodando...');
})