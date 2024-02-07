var vitorias = 35
var derrotas = 10

saldoVitorias = calcularVitorias(vitorias,derrotas)
console.log(calcularRank(saldoVitorias))

function calcularVitorias(vit,der){
    valor = vit - der
    return valor
}

function calcularRank(saldoVitorias){
    let valores_min = [11,21,51,81,91]
    let valores_max = [20,50,80,90,100]
    let ranks = ["Bronze","Prata","Ouro","Diamente","Lendário"]
    switch(true){
        case saldoVitorias < valores_min[0]:
            return "O Herói tem de saldo de " + saldoVitorias + " está no nível de Ferro"
            break
        case saldoVitorias > valores_max[4]:
            return "O Herói tem de saldo de " + saldoVitorias + " está no nível de Imortal"
            break
        default:
            for(let i = 0;i<ranks.length;i++){
                if(saldoVitorias >= valores_min[i] && saldoVitorias <= valores_max[i]){
                    return "O Herói tem de saldo de " + saldoVitorias + " está no nível de " + ranks[i]
                    break
                }
            }
    }
}