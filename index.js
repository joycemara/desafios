let nomeHeroi = "Chebruska";
let experienciaHeroi = 9999999;
let nivelHeroi = "Aprendiz";

    switch (true){
    //Se XP for menor que 1000  = Ferro
    case (experienciaHeroi < 1000):
        nivelHeroi = "Ferro";
     break;
    //Se XP for entre 1.001 e 2.000 = Bronze
    case (experienciaHeroi >= 1001 && experienciaHeroi <= 2000):
        nivelHeroi = "Bronze";
        break;
    //Se XP for entre 2.001 e 5.000 = Prata
     case (experienciaHeroi >= 2001 && experienciaHeroi <= 5000):
        nivelHeroi = "Prata";
     break;
    //Se XP for entre 5.001 e 7.000 = Ouro
     case (experienciaHeroi >= 5001 && experienciaHeroi <= 7000):
        nivelHeroi = "Ouro";
     break;
    //Se XP for entre 7.001 e 8.000 = Platina
     case (experienciaHeroi >= 7001 && experienciaHeroi <= 8000):
        nivelHeroi = "Platina";
     break;
    //Se XP for entre 8.001 e 9.000 = Ascendente
     case (experienciaHeroi >= 8001 && experienciaHeroi <= 9000):
        nivelHeroi = "Ascendente";
     break;
    //Se XP for entre 9.001 e 10.000= Imortal
     case (experienciaHeroi >= 9001 && experienciaHeroi <= 10000):
        nivelHeroi = "Imortal";
     break;
    //Se XP for maior ou igual a 10.001 = Radiante
     case (experienciaHeroi > 10001):
        nivelHeroi = "Radiante";
     break;
     default:
        nivelHeroi = "Aprendiz";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + " com " + experienciaHeroi + " de XP");