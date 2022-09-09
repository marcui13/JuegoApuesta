function lanzarDados() {
    let dado1 = getNumRand(1, 6);
    let dado2 = getNumRand(1, 6);
    let suma= dado1 + dado2;
    
    document.getElementById("ImgDado1").src="./images/"+dado1+".svg";
    document.getElementById("ImgDado2").src="./images/"+dado2+".svg";
    
    document.getElementById("SumaDados").innerHTML=suma;
    
    numeroApostado = document.getElementById("numeroApostado");
    dineroApuesta = document.getElementById("dineroApuesta");

    let num = Number(numeroApostado.value);
    let apuesta = Number(dineroApuesta.value);

    if(num===dado1 && num===dado2 || num===suma){
        document.getElementById("ResulApuesta").innerHTML="GANADOR";
        let premio = apuesta*3;
        document.getElementById("dineroGanado").innerHTML=premio;
    }else{
        if(num===dado1 || num===dado2){
            document.getElementById("ResulApuesta").innerHTML="GANADOR";
            let premio = apuesta*2;
            document.getElementById("dineroGanado").innerHTML=premio;
        }else{
            document.getElementById("ResulApuesta").innerHTML="PERDEDOR";
            document.getElementById("dineroGanado").innerHTML="NO HAY PREMIO";
        }
    }
}
