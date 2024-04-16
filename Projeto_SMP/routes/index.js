const express = require('express');

//rotas (quando o servidor for acessado)
const router = express.Router();
router.get('/',(req, res)=>{
    //res.send('Olá mundo!!!');
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send('Olá ' + nome + '\nVocê tem: ' + idade + ' anos de idade');
});

router.get('/sobre',(req, res)=>{
    res.send('Página sobre o projeto');
});

router.get('/post/:id',(req, res)=>{
    let id = req.params.id;
    res.send('ID do post: ' + id);
});

module.exports = router;