function totalAvecRemise(total, remise){
    totalFinal = total - (total * (remise / 100));
    return totalFinal;

}
let totalht=Number(prompt("Donnez le total HT: "));

let rem=Number(prompt("Donnez remise (en %): "));


console.log(`Totale final = ${totalAvecRemise(totalht,rem)}`);