var express = require('express');
var Request = require("request");
var app = express();

app.use(express.json());

app.post('/enviar', function(req, resp){

  var formulario = req.body

    Request.get("https://viacep.com.br/ws/" + formulario.cep + "/json/", (error, response, body) => {
      if(error) {
          return console.dir(error);
      }

      var resposta = JSON.parse(body)

      resposta.titular = formulario.titular
      resposta.rendaPercapita = formulario.renda / formulario.numeroDependentes
      resp.json(resposta);
  });

});

app.listen(3000);
