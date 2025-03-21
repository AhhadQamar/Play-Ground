const heading = document.querySelector("h1");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const imgSource1 = "images/" + "dice" + randomNumber1 + ".png";
img1.setAttribute("src", imgSource1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);
const imgSource2 = "images/" + "dice" + randomNumber2 + ".png";
img2.setAttribute("src", imgSource2);
if (randomNumber1 > randomNumber2) {
  heading.innerText = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.innerText = "Player 2 Wins!";
} else {
  heading.innerText = "Draw!";
}
