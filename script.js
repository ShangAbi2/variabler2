/*
function selectColor(farge) {
    selectedColor = farge;
    if (farge.id === "blå") {
        farge.textContent = "du valgte blå";
        farge.style.color = "blue";
         selectedColor = "blå";
    } else if (farge.id === "rød") {
        farge.textContent = "du valgte rød";
        farge.style.color = "red";
         selectedColor = "rød";
    } else if (farge.id === "grønn") {
        farge.textContent = "du valgte grønn";
        farge.style.color = "green";
         selectedColor = "grønn";
    }
}
*/



var selectblå = document.getElementById("blå");
var selectrød = document.getElementById("rød");   
var selectgrønn = document.getElementById("grønn");
var selectedColor = "";


// best practice:
const cssColors = {
    blå: "blue",
    rød: "red",
    grønn: "green"
};


function selectColor(farge) {

if (selectedColor) {
        var prevEl = document.getElementById(selectedColor);
        if (prevEl && prevEl !== farge) {
            prevEl.textContent = "klikk her for å velge " + prevEl.id;
            prevEl.style.color = "";
        }
    }

    selectedColor = farge.id;
    farge.textContent = "du aktiverte fargen:" + selectedColor;
    farge.style.color = cssColors[farge.id];
}

function changeWholeBackground(){
    if (selectedColor) {
        document.body.style.backgroundColor = cssColors[selectedColor];
    }
}


const boksEls = Array.from(document.querySelectorAll('.boks'));
let selectedBoxEl = null;

boksEls.forEach(boks => {
  boks.addEventListener('click', () => {
    if (selectedBoxEl) selectedBoxEl.classList.remove('selected');
    selectedBoxEl = boks;
    boks.classList.add('selected');
    if (selectedColor) {
      boks.style.backgroundColor = cssColors[selectedColor]; 
    }
  });
});