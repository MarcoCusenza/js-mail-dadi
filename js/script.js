const mailRegistrate = ["pippo@gmail.com", "pluto@gmail.com", "paperino@outlook.com"];
const userMail = prompt("Inserisci la tua email");
const login = document.getElementById("login");

let valid = false;

for (let i = 0; i < mailRegistrate.length; i++) {
    if (userMail == mailRegistrate[i]) {
        valid = true;
    }
}

if (valid == false) {
    login.innerHTML = `${userMail} NON è un utente registrato. Non puoi accedere al gioco.`
} else {
    login.innerHTML = `${userMail} è un utente registrato. Benvenuto al gioco dei dadi!`

    let numCPU = Math.floor(Math.random() * 6) + 1;
    console.log(numCPU);

    let numUser = Math.floor(Math.random() * 6) + 1;
    console.log(numUser);

    if (numCPU > numUser) {
        console.log("Vince CPU!");
    } else if (numCPU == numUser) {
        console.log("Pareggio!");
    } else {
        console.log("Vince " + userMail + "!");
    }
}