const mailRegistrate = ["pippo@gmail.com", "pluto@gmail.com", "paperino@outlook.com", "aaa"]; //aaa is for debugging
const userMail = prompt("Inserisci la tua email");
const login = document.getElementById("login");
const btnAgain = document.getElementById("again");

let valid = false;

for (let i = 0; i < mailRegistrate.length; i++) {
    if (userMail == mailRegistrate[i]) {
        valid = true;
    }
}

if (valid == false) {
    login.innerHTML = `${userMail} NON sei un utente registrato.<br>Non puoi accedere al gioco.`
} else {
    const username = prompt("Sei un utente registrato! Inserisci il tuo username");
    document.getElementById("welcome").innerHTML = `Benvenuto ${username}, che il gioco dei dadi abbia inizio!`

    document.getElementById("content").classList.remove("ms_hidden");
    giocoDadi();
    btnAgain.addEventListener("click", giocoDadi());
}



function giocoDadi() {
    let numCPU = Math.floor(Math.random() * 6) + 1;
    console.log(numCPU);
    document.getElementById("numCPU").innerHTML = numCPU;

    let numUser = Math.floor(Math.random() * 6) + 1;
    console.log(numUser);
    document.getElementById("numUser").innerHTML = numUser;

    const result = document.getElementById("result");
    if (numCPU > numUser) {
        console.log("Vince CPU!");
        result.innerHTML = "Hai perso :("
    } else if (numCPU == numUser) {
        console.log("Pareggio!");
        result.innerHTML = "Pareggio!"
    } else {
        console.log("Vince " + username + "!");
        result.innerHTML = "Hai vinto! :D"
    }
}