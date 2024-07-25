function ranking (vitoria, derrota){
    let saldo = vitoria - derrota
    return saldo
}

function nivelPersonagem(){
    let xp = ranking(96,5)
    let nivel;

    if (xp < 10) {
    nivel = "Ferro";
    } else if (xp <= 20) {
    nivel = "Bronze";
    } else if (xp <= 50) {
    nivel = "Prata";
    } else if (xp <= 80) {
    nivel = "Ouro";
    } else if (xp <= 90) {
    nivel = "Diamante";
    } else if (xp <= 100) {
    nivel = "Lendário";
    } else {
    nivel = "Imortal";
    }
    console.log(`O Herói tem saldo de ${xp} está no nível de ${nivel}`);
}

nivelPersonagem()
