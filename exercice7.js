function verifierMotDePasse(mdp){
    if(mdp.length>=8 && mdp.includes('@')){
        return true;
    }else{
        return false;
    }
}

let password=String(prompt("Donnez le mot de pass: "));

if(verifierMotDePasse(password)){
    console.log("Mot de passe valide");
}else{
    console.log("Mot de passe non valide");
}