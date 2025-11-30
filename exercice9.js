function factorielle(n){
    if(n==0)return 1;
    else return n*factorielle(n-1);

}
let fact=5;
console.log(`Factorielle de ${fact} = ${factorielle(fact)}`);