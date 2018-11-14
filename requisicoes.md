# Requisições no terminal

## POST - calcula prazo correio

```bash
curl -X POST -v -H "Content-type: application/json" http://localhost:3000/correios/calcula-prazo -d '{"nCdServico": "40010", "sCepOrigem": "05303030", "sCepDestino":"65066635"}'
```

ou 

```bash
curl -X POST -v -H "Content-type: application/json" http://localhost:3000/correios/calcula-prazo -d @files/correios.json`
```

POST - novo pagamento 

> Atenção: alterar a forma de pagamento em files/pagamento.json. Opções: payfast ou cartao.

```bash
curl http://localhost:3000/pagamentos/pagamento -X POST  -v -H "Content-type: application/json" -d @files/pagamento.json
```
