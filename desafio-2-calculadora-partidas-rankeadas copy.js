function main(){
   resultadoPartidas = calculaRankPartidas(quantidadeVitorias, quantidadeDerrotas);
   defineNivelVitorias(resultadoPartidas);
   
   console.log("O Herói tem de saldo de " + resultadoPartidas + " vitórias e está no nível de " + nivelVitorias);
}

let quantidadeVitorias = 11;
let quantidadeDerrotas = 7;
let resultadoPartidas;
let nivelVitorias;

function calculaRankPartidas(quantidadeVitorias, quantidadeDerrotas){
   return quantidadeVitorias - quantidadeDerrotas;
}

function defineNivelVitorias(resultadoPartidas){
   switch (true){
      //Se vitórias for menor do que 10 = Ferro
       case (resultadoPartidas < 10):
           nivelVitorias = "Ferro";
           break;
      //Se vitórias for entre 11 e 20 = Bronze
       case (resultadoPartidas >= 11 && resultadoPartidas <= 20):
           nivelVitorias = "Bronze";
           break;
      //Se vitórias for entre 21 e 50 = Prata
       case (resultadoPartidas >= 21 && resultadoPartidas <= 50):
           nivelVitorias = "Prata";
           break;
      //Se vitórias for entre 51 e 80 = Ouro
       case (resultadoPartidas >= 51 && resultadoPartidas <= 80):
           nivelVitorias = "Ouro";
           break;
      //Se vitórias for entre 81 e 90 = Diamante  
       case (resultadoPartidas >= 81 && resultadoPartidas <= 90):
           nivelVitorias = "Diamante";
           break;
      //Se vitórias for entre 91 e 100= Lendário
       case (resultadoPartidas >= 91 && resultadoPartidas <= 100):
           nivelVitorias = "Lendário";
           break;
      //Se vitórias for maior ou igual a 101 = Imortal
       case (resultadoPartidas > 101):
           nivelVitorias = "Imortal";
           break;
       default:
           nivelVitorias = "Aprendiz";
   }
}

main();
