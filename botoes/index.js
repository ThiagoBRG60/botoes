const botaoMexer = document.getElementById("botao1");
const botaoClick = document.getElementById("botao2");
const botaoMouth = document.getElementById("circle");
const teethRotate = document.getElementById("rotate");
const teethRotate2 = document.getElementById("rotate2");
const onBut = document.getElementById("on");
const offBut = document.getElementById("off");
const bgColor = document.getElementById("button-circle");

// --------Botão Mexer-------//

botaoMexer.addEventListener("click", () => {
  botaoMexer.classList.toggle("hidden");

  if (botaoMexer.classList.contains("hidden")) {
    bgColor.classList.toggle("hidden4");
  } else {
    bgColor.classList.remove("hidden4");
  }
});

// --------Botão Click-------//

botaoClick.addEventListener("click", () => {
  botaoClick.classList.toggle("hidden1");
});

// --------Botão Mouth-------//

botaoMouth.addEventListener("click", () => {
  botaoMouth.classList.toggle("hidden2");

  if (botaoMouth.classList.contains("hidden2")) {
    teethRotate.style.transform = "rotate(-3deg)";
  } else {
    teethRotate.style.transform = "rotate(3deg)";
  }

  if (botaoMouth.classList.contains("hidden2")) {
    teethRotate2.style.transform = "rotate(3deg)";
  } else {
    teethRotate2.style.transform = "rotate(-3deg)";
  }

  if (botaoMouth.classList.contains("hidden2")) {
    on.style.backgroundColor = "rgb(7, 75, 14)";
    on.style.boxShadow = "none";
  } else {
    on.style.backgroundColor = "rgb(14, 141, 27)";
    on.style.boxShadow = "0 0 20px 0 rgb(15, 204, 47)";
  }
  if (botaoMouth.classList.contains("hidden2")) {
    off.style.backgroundColor = "red";
    off.style.boxShadow = "0 0 20px 0 rgb(204, 15, 15)";
  } else {
    off.style.backgroundColor = "rgb(112, 8, 8)";
    off.style.boxShadow = "none";
  }
});

const interruptor = document.getElementById("switch");
const bodyColor = document.querySelector("body");

interruptor.addEventListener("click", () => {
  interruptor.classList.toggle("hidden6");

  if (interruptor.classList.contains("hidden6")) {
    bodyColor.style.backgroundColor = "rgba(27,27,27";
  } else {
    bodyColor.style.backgroundColor = "white";
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
