
function resposta1(){
    i = 13;
    k = 0;
    soma = 0;
    while(k < i){
        k++;
        soma += k;
    } 
    document.getElementById("resultado1").innerHTML = soma;
}


function resposta2(){
    entrada = document.getElementById("entradaDesafio2").value/1;
    resultado2 = document.getElementById("resultado2");

    if (entrada < 0) 
        return resultado2.innerHTML = `O número ${entrada} não PERTENCE à sequência de Fibonacci.`;
    
    let n1 = 0;
    let n2 = 1;

    while (n1 <= entrada) {
        if (n1 === entrada) {
            return resultado2.innerHTML = `O número ${entrada} PERTENCE a sequência de Fibonacci!`;
        }
        [n1, n2] = [n2, n1 + n2]; 
    }
    return resultado2.innerHTML = `O número ${entrada} não PERTENCE à sequência de Fibonacci.`;
}

function resposta3(){
    // os dados vão vim do arquivo dados.js como um variável
    const data = dados;

    const diasFaturamento = data.filter(d => d.valor> 0);
    const menorFaturamento = diasFaturamento.reduce((acc, curr) =>{
        return (acc.valor < curr.valor)? acc : curr;
    });

    const maiorFaturamento = diasFaturamento.reduce((acc, curr) =>{
        return (acc.valor > curr.valor)? acc : curr;
    });

    const mediaValorFaturamento = diasFaturamento.reduce((acc, curr) => acc + curr.valor, 0)/ diasFaturamento.length;    

    const diasMaioresMedia  = diasFaturamento.filter(d => d.valor > mediaValorFaturamento).length
    document.getElementById("resultado3MenorValor").innerHTML = menorFaturamento.valor
    document.getElementById("resultado3MaiorValor").innerHTML = maiorFaturamento.valor
    document.getElementById("resultado3DiasMaioreMedia").innerHTML = diasMaioresMedia
}

function resposta4(){
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };
    let total = 0;
    for(let f in faturamento){
        total += faturamento[f];

    }
    const resultado4 = document.getElementById("resultado4");
    for(let f in faturamento){
        resultado4.innerHTML += `
                    <tr>
                        <td>${f}</td>
                        <td>R$ ${faturamento[f]}</td>
                        <td>${((faturamento[f]/total) * 100).toFixed(2)} %</td>
                    </tr>
        `
    }
}

function reverterString(e){
    const resultado5 = document.getElementById("resultado5");

    let aux ='' ;

    let valor = e.target.value;
    for(let v of valor){
        aux = v + aux;
    }  
    
    resultado5.innerHTML = aux;
}