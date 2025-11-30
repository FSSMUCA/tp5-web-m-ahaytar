let sommep=0,sommei=0;
for(let i=1;i<=50;i++){
    if(i%2==0){
        sommep+=i;
    }else{
        sommei+=i;
    }
}
console.log(`La somme des nombres pairs : ${sommep}\n`);
console.log(`La somme des nombres impairs : ${sommei}`);