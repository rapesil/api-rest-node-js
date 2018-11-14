# Requisições no terminal

## GET 

### Acessa a rota pagamentos

```bash
curl http://localhost:3000/pagamentos
```

### Consulta um pagamento 
```bash
curl http://localhost:3000/pagamentos/pagamento/9
```

## POST

### Calcula prazo - correio

```bash
curl -X POST -v -H "Content-type: application/json" http://localhost:3000/correios/calcula-prazo -d '{"nCdServico": "40010", "sCepOrigem": "05303030", "sCepDestino":"65066635"}'
```

ou 

```bash
curl -X POST -v -H "Content-type: application/json" http://localhost:3000/correios/calcula-prazo -d @files/correios.json`
```

### Inclui novo pagamento

> Atenção: alterar a forma de pagamento em files/pagamento.json. Opções: payfast ou cartao.

```bash
curl http://localhost:3000/pagamentos/pagamento -X POST  -v -H "Content-type: application/json" -d @files/pagamento.json
```
### Upload de imagem

```bash
curl -X POST http://localhost:3000/upload/imagem -v -H "filename: imagem-copiada" -H "Content-Type: application/octet-stream" --data-binary @files/imagem.jpg
```

## PUT

### Atualiza pagamento (confirma)

> Atenção trocar o XX pelo id desejado

```bash
curl -X PUT http://localhost:3000/pagamentos/pagamento/XX -v
```

## DELETE

### Cancela pagamento

> Atenção trocar o XX pelo id desejado

```bash
curl -X DELETE http://localhost:3000/pagamentos/pagamento/XX -v
```

