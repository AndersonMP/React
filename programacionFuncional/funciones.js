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

ejecutarOperacion = (operar)=>{
    let valor1 = recuperarEntero("txtValor1");
    let valor2 = recuperarEntero("txtValor2");
    let resultado;
    resultado = operar(valor1,valor2);
    console.log(resultado);
}


ejecutar = (fn) =>{
    console.log("Ejecutando Función...");
    fn();
}

imprimir = () =>{
    console.log("Imprimiendo...");
}

saludar = ()=>{
    alert("Aprendiendo Programación Funcional");
}

testEjecutar = (i)=>{
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(()=>{
        alert("Soy una Función Anónima");
    });    
}