//referensi
const poptom = document.querySelector("#poptom");
const btn = document.querySelector("#btn");

//gambar
const jelekKingTompel = "./img/tompel2.png";
const kerenKingTompel = "./img/tompel1.png";

//event
btn.addEventListener("mousedown", jelekbang);
btn.addEventListener("mouseup", kerenbang);

//fungsi 
function jelekbang() {
    const suaraSamlekom = new Audio("./sfx/samlekom.mp3");
    poptom.src = jelekKingTompel;
    suaraSamlekom.play();
}
function kerenbang() {
    poptom.src = kerenKingTompel;
}