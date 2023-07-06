const inputEmail = document.getElementById("input_email");
const btnConfirm = document.getElementById("btn-confirm");
const contactFormbg = document.getElementById("contact-form-bg")
const confirmEmail = ["elisaianda01@gmail.com", "user@gmail.com", "pippo@gmail.com", "102@gmail.com", "pluto@gmail.com"];
// let emailFound = false;

btnConfirm.addEventListener("click", function () {

    const email = inputEmail.value;
    

    for (let i = 0; i < confirmEmail.length; i++) {
        // emailFound = false;
        if (email === confirmEmail[i]) {

            console.log("Congratulazioni l'email inserita è corretta!")
            i = confirmEmail.length;
            contactFormbg.style.backgroundColor = "#198754";


        } else if (i === confirmEmail.length - 1) {

            console.log("Ci dispiace l'email inserita è sbagliata!");
            contactFormbg.style.backgroundColor = "#dc3545";
        }
        }
    })
