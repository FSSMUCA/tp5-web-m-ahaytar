let n = Number(prompt("Entrez un nombre : "));

if(n<0){
    alert("Nombre négatif" );
}else if(n>=0 && n<=10){
    alert("Petit");
}else if(n>=11 && n<=50){
    alert("Moyen");
}else if(n>50 && n<=100){
    alert("Grand");
}else if(n>100){
    alert("Très grand");
}