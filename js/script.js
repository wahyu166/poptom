//referensi
const poptom = document.querySelector("#poptom");
const btn = document.querySelector("#btn");

//gambar
const jelekKingTompel = "./img/tompel2.png";
const kerenKingTompel = "./img/tompel1.png";

//event mouse
btn.addEventListener("mousedown", jelekbang);
btn.addEventListener("mouseup", kerenbang);

//event touchscreen
btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    jelekbang();
})
btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    kerenbang();
})

//fungsi 
function jelekbang() {
    const suaraSamlekom = new Audio("./sfx/samlekom.mp3");
    poptom.src = jelekKingTompel;
    suaraSamlekom.play();
}
function kerenbang() {
    poptom.src = kerenKingTompel;
}
