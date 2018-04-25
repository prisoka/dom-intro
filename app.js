window.onload = function() {
  // console.log("JavaScript is alive!");

  document.getElementById("greeting").innerHTML = "Hello, World!";

  for (let listItem of document.querySelectorAll('li')) {
    listItem.style.backgroundColor = "yellow"

    listItem.onclick = function(){
      let selectedEl = document.querySelector(".selected");
      selectedEl.classList.remove("selected");

      this.classList.add("selected");
      let name = this.innerHTML
      document.getElementsByTagName("img")[1].src = "images/"+name+".jpeg"
    }

    let toAddPanic = document.getElementById("reset");
    toAddPanic.onclick = function (){
      document.querySelector(".selected").classList.remove("selected");
      document.getElementsByTagName("img")[1].src = "images/panic.jpeg"
    }
  }

  let greetingImg = document.createElement("IMG");
  greetingImg.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  document.getElementById("greeting").appendChild(greetingImg);

  let disappear = document.getElementById("ghosting");
  disappear.onmouseover = function(){
      disappear.remove("ghosting");
  }

  // Using addEventListener: >>>
  // disappear.addEventListener("mouseover",mouseOverG)
  // function mouseOverG(){
  //   disappear.remove("ghosting");
  // }

  let toDouble = document.getElementById("resize");
  toDouble.onmouseover = function() {mouseOver()};
  toDouble.onmouseout = function() {mouseOut()};

  function mouseOver() {
      toDouble.style.width = "400px";
  }
  function mouseOut() {
      toDouble.style.width = "200px";
  }
}

document.addEventListener("keypress", whenPressed);
function whenPressed() {
  const keyNameNum = event.key;
  if (keyNameNum >= 0 && keyNameNum <= 9) {
          alert("I HATE NUMBERZZZ!")
  }
}

// UNFINISHED BONUS
document.addEventListener("keyup", whenKonamiCode);
function whenKonamiCode(event){
  let konamiCount = 0;
  const konamiCodeSeq = [38,38,40,40,37,39,37,39,66,65];
  if(event.keyCode === konamiCodeSeq[konamiCount]){
    konamiCount++;
    if(konamiCount === konamiCodeSeq.length){
    console.log("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
    konamiCount = 0;
    }
  } else {
    konamiCount = 0;
  }
}


// When the page loads:
// 1. OK Change the greeting from "Hello, There!" to "Hello, World!".
// 2. OK Set the background color of each <li> to yellow.
// 3. OK Create an image tag, set its src attribute to http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, and append the to the #greeting div.

// Afterwards:
// 4. OK Add the class of selected to an <li> when it is clicked. Remove it from any other lis as well.
// 5. OK Change the image to be the most recently clicked food item.
// 6. OK When the gray div is moused over, it's removed from the DOM.
// 7. OK When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
// 8. OK When the reset button is clicked - remove the selected class from each <li> and change the image to panic.jpeg.
// 9. OK When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"
// BONUS: If someone types the Konami Code, the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"
