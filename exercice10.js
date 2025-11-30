function sommeIterative(n) {
    let x = 0;
    for (let i = 1; i <= n; i++) {
        x += i;
    }
    return x;
}

function sommeRecursive(n) {
    if (n <= 0)
        return 0;

    else return n + sommeRecursive(n - 1);
}

let nombre = 10;

let resultatIteratif = sommeIterative(nombre);
console.log(`Somme Itérative de 1 à ${nombre} = ${resultatIteratif}`); // 55

let resultatRecursif = sommeRecursive(nombre);
console.log(`Somme Récursive de 1 à ${nombre} = ${resultatRecursif}`);

