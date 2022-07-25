const black = document.querySelector(".black");
const red = document.querySelector(".red");
const cream = document.querySelector(".cream");
const grey = document.querySelector(".grey");
const brown = document.querySelector(".brown");

const img = document.querySelector(".image");
const time = document.querySelector(".time");
const heartbeat = document.querySelector(".heartbeat");

const timeResult = document.querySelector(".timeResult");
const heartbeatResult = document.querySelector(".heartbeatResult");

black.addEventListener("click", () => {
  img.src = "https://i.imgur.com/iOeUBV7.png";
});

red.addEventListener("click", () => {
  img.src = "https://i.imgur.com/PTgQlim.png";
});
grey.addEventListener("click", () => {
  img.src = "https://i.imgur.com/Mplj1YR.png";
});
brown.addEventListener("click", () => {
  img.src = "https://i.imgur.com/xSIK4M8.png";
});
cream.addEventListener("click", () => {
  img.src = "https://i.imgur.com/Zygu7I3.png";
});

time.addEventListener("click", () => {
  const date = new Date();
  const hour = date.getHours();
  const mins = date.getMinutes();
  //console.log(mins);
  timeResult.innerHTML = `${hour}:${mins}`;
  timeResult.style.visibility = "visible";
  heartbeatResult.style.visibility = "hidden";
});

heartbeat.addEventListener("click", () => {
  heartbeatResult.style.visibility = "visible";
  timeResult.style.visibility = "hidden";
});

const ul = document.querySelector("ul");
const li = document.querySelectorAll("ul li");
console.log(li.length);
ul.addEventListener("click", (e) => {
  //console.log(e.target.children);
  //e.target.classList.add("active");
  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("active");
  }
  e.target.classList.add("active");
});
