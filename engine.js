let nomeDoHeroi = "" //*coloque o nome do seu herói
let experiencia =""//* adicione a quantidade da sua experiencia
let nivel;//* aqui que vai armazenar o seu elo

if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia < 2000) {
    nivel = "Bronze";
} else if (experiencia < 5000) {
    nivel = "Prata";
} else if (experiencia < 7000) {
    nivel = "Ouro";
} else if (experiencia < 8000) {
    nivel = "Platina";
} else if (experiencia < 9000) {
    nivel = "Diamante";
} else if (experiencia < 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante"; 
}


console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel + ".");