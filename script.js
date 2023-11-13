let navigationElement = document.getElementById("navBar");
let burgerElement = document.getElementById("burgerBar");
let ulElement = document.getElementById("ulBar");

burgerElement.addEventListener("click", function () {
  burgerElement.classList.toggle("activeBurger");
  ulElement.classList.toggle("activeNew");
});
let accordion = document.getElementsByClassName("contentBx");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active1");
  });
}
document.appendChild(navigationElement);
document.appendChild(burgerElement);
document.appendChild(ulElement);
//video
let video = document.getElementById("myVideo");


let btn = document.getElementById("myBtn");


function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
//acordion


document.appendChild(navigationElement);
document.appendChild(burgerElement);
document.appendChild(ulElement);

document.appendChild(video)
document.appendChild(btn)