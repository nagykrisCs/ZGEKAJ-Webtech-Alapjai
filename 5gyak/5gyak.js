let megoldas = Math.floor(Math.random() * 1000001);
let maxTippek = 20;
let eltalalta = false;

for (let i = 1; i <= maxTippek; i++) {
    let bekeres = prompt("Add meg a tippedet 0 és 1000000 között:");
    let tipp = parseInt(bekeres);

    if (isNaN(tipp)) {
        alert(i + ". tipp nem érvényes: Nem számot adtál meg.");
        continue;
    }

    if (tipp > megoldas) {
        alert(i + ". tipp nem talált: A megoldás kisebb.");
    } else if (tipp < megoldas) {
        alert(i + ". tipp nem talált: A megoldás nagyobb.");
    } else {
        alert("Gratulálok, " + i + " lépésből eltaláltad!");
        eltalalta = true;
        break;
    }
}

if (!eltalalta) {
    alert("Sajnos ez most nem sikerült! A megoldás: " + megoldas);
}