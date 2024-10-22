function result() {
    let vowel = ["a", "e", "i", "o", "u"];
    let num = prompt("Enter a alphabet to check is it vowel or not?");
    let message = document.getElementById("message");
    let error = document.getElementById("error");

    if (num == vowel[0] ||
        num == vowel[1] ||
        num == vowel[2] ||
        num == vowel[3] ||
        num == vowel[4]) {
        message.textContent = ` True: it's a vowel `;
    } else {
        error.textContent = ` False: it's not a vowel `;
    }

}

function reset() {
    let message = document.getElementById("message");
    let error = document.getElementById("error");

    message.textContent = " ";
    error.textContent = " ";
}



