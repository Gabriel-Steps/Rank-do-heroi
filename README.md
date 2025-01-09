# Sistema de Classificação de Heróis

Este projeto é um sistema simples que calcula o saldo de vitórias e classifica heróis em níveis com base no desempenho.

## Descrição
O sistema recebe o número de vitórias e derrotas de um herói e calcula o saldo de vitórias. Baseando-se nesse saldo, o herói é classificado em um nível entre "Ferro" e "Imortal".

### Lógica de Classificação
- **Ferro**: Saldo de vitórias menor que 11
- **Bronze**: Saldo de vitórias entre 11 e 20
- **Prata**: Saldo de vitórias entre 21 e 50
- **Ouro**: Saldo de vitórias entre 51 e 80
- **Diamante**: Saldo de vitórias entre 81 e 90
- **Lendário**: Saldo de vitórias entre 91 e 100
- **Imortal**: Saldo de vitórias acima de 100

## Estrutura do Código

### Variáveis
- `vitorias`: Número de vitórias do herói.
- `derrotas`: Número de derrotas do herói.

### Funções
1. `calcularVitorias(vit, der)`: Calcula o saldo de vitórias subtraindo as derrotas das vitórias.
2. `calcularRank(saldoVitorias)`: Retorna o nível do herói com base no saldo de vitórias.

## Exemplo de Uso
### Código de Exemplo
```javascript
var vitorias = 35;
var derrotas = 10;

saldoVitorias = calcularVitorias(vitorias, derrotas);
console.log(calcularRank(saldoVitorias));

function calcularVitorias(vit, der) {
    let valor = vit - der;
    return valor;
}

function calcularRank(saldoVitorias) {
    let valores_min = [11, 21, 51, 81, 91];
    let valores_max = [20, 50, 80, 90, 100];
    let ranks = ["Bronze", "Prata", "Ouro", "Diamante", "Lendário"];

    switch (true) {
        case saldoVitorias < valores_min[0]:
            return `O Herói tem saldo de ${saldoVitorias} e está no nível de Ferro.`;
        case saldoVitorias > valores_max[4]:
            return `O Herói tem saldo de ${saldoVitorias} e está no nível de Imortal.`;
        default:
            for (let i = 0; i < ranks.length; i++) {
                if (saldoVitorias >= valores_min[i] && saldoVitorias <= valores_max[i]) {
                    return `O Herói tem saldo de ${saldoVitorias} e está no nível de ${ranks[i]}.`;
                }
            }
    }
}
```

### Saída Esperada
Para as entradas:
- Vitórias: 35
- Derrotas: 10

O sistema exibirá:
```
O Herói tem saldo de 25 e está no nível de Prata.
```

## Tecnologias Utilizadas
- **Linguagem**: JavaScript

## Como Executar o Projeto
1. Copie o código para um arquivo `.js`.
2. Execute o arquivo com Node.js ou utilizando o console do navegador.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
