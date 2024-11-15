ejecutarSumar = ()=>{
    let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    console.log("Valor 1: " + valor1 + " -- " + "Valor 2: " + valor2);
    let resultadoSuma;
    resultadoSuma = sumar(valor1, valor2);
    console.log(resultadoSuma);
}

ejecutarRestar = () =>{
    let min = recuperarFloat ("txtValor1");
    let sus = recuperarFloat ("txtValor2");
    let diferencia = restar(min,sus);
    console.log(diferencia);
}

sumar = (sum1, sum2) =>{
    let resultado;
    resultado = sum1 + sum2;
    return resultado;
}

restar = (min, sus) =>{
    let diferencia;
    diferencia = min - sus;
    return diferencia;
}

