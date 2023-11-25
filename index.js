// --------Botão Mexer-------//
const botaoMexer = document.getElementById("botao1");
const bgColor = document.getElementById("button-circle");

botaoMexer.addEventListener("click", () => {
  botaoMexer.classList.toggle("hidden");

  if (botaoMexer.classList.contains("hidden")) {
    bgColor.classList.toggle("hidden4");
  } else {
    bgColor.classList.remove("hidden4");
  }
});

// --------Botão Click-------//
const botaoClick = document.getElementById("botao2");

botaoClick.addEventListener("click", () => {
  botaoClick.classList.toggle("hidden1");
});

// --------Botão Mouth-------//
const botaoMouth = document.getElementById("circle");
const teethRotate = document.getElementById("rotate");
const teethRotate2 = document.getElementById("rotate2");
const onBut = document.getElementById("on");
const offBut = document.getElementById("off");

botaoMouth.addEventListener("click", () => {
  botaoMouth.classList.toggle("hidden2");

  if (botaoMouth.classList.contains("hidden2")) {
    teethRotate.style.transform = "rotate(-3deg)";
    teethRotate2.style.transform = "rotate(3deg)";
    on.style.backgroundColor = "rgb(7, 75, 14)";
    on.style.boxShadow = "none";
    off.style.backgroundColor = "red";
    off.style.boxShadow = "0 0 20px 0 rgb(204, 15, 15)";
  } else {
    teethRotate.style.transform = "rotate(3deg)";
    teethRotate2.style.transform = "rotate(-3deg)";
    on.style.backgroundColor = "rgb(14, 141, 27)";
    on.style.boxShadow = "0 0 20px 0 rgb(15, 204, 47)";
    off.style.backgroundColor = "rgb(112, 8, 8)";
    off.style.boxShadow = "none";
  }
});

//-----Jack Head-----//

const jackHead = document.getElementById("jack-head");
const jackHead2 = document.getElementById("jack-head2");

jackHead.addEventListener("click", () => {
  jackHead.classList.toggle("move1");

  if (jackHead.classList.contains("move1")) {
    jackHead2.classList.toggle("move2");
  } else {
    jackHead2.classList.remove("move2");
  }
});

// area do switch //

const down = document.getElementById("shadow-down");
const up = document.getElementById("shadow-up");
const up2 = document.getElementById("shadow-up2");
const stripe = document.getElementById("shadow-stripe");
const onbtn = document.getElementById("shadow-on-btn");
const ligar = document.getElementById("ligar-luz");
const bodyColor = document.querySelector("body");

function ligarLuz() {
  down.classList.toggle("butswitch");
  up.classList.toggle("butswitch");
  up2.classList.toggle("butswitch");
  stripe.classList.toggle("butswitch");
  onbtn.classList.toggle("butswitch");
  bodyColor.classList.toggle("bodyCor");

  if (bodyColor.classList.contains("bodyCor")) {
    bodyColor.style.backgroundColor = "#000";
  } else {
    bodyColor.style.backgroundColor = "#FFF";
  }

  if (onbtn.innerHTML === "OFF") {
    onbtn.innerHTML = "ON";
  } else {
    onbtn.innerHTML = "OFF";
  }
}
