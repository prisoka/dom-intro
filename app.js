window.onload = function() {
  // console.log("JavaScript is alive!");

  document.getElementById("greeting").innerHTML = "Hello, World!";

  for (listItem of document.querySelectorAll('li')) {
    listItem.style.backgroundColor = "yellow"
    listItem.onclick = function(){
      let selectedEl = document.querySelector(".selected");
      selectedEl.classList.remove("selected");
      this.classList.add("selected");
      let name = this.innerHTML
      document.getElementsByTagName("img")[1].src = "images/"+name+".jpeg"
    }
  }

  let greetingImg = document.createElement("IMG");
  greetingImg.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  greetingImg.id = "picture";
  document.getElementById("greeting").appendChild(greetingImg);

  let disappear = document.getElementById("ghosting");
  disappear.onmouseover = function(){
      disappear.remove("ghosting");
  }

  let double = document.getElementById("resize");
  double.onmouseover = function() {mouseOver()};
  double.onmouseout = function() {mouseOut()};
  function mouseOver() {
      double.style.width = "400px";
  }
  function mouseOut() {
      double.style.width = "200px";
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
// 8. When the reset button is clicked - remove the selected class from each <li> and change the image to panic.jpeg.
// 9. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"
// BONUS: If someone types the Konami Code, the page alerts "YOU ARE AN EVENT HANDLER GURUUUUUUUUU!"
