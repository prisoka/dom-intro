window.onload = function() {
  console.log("JavaScript is alive!");

  //please write your code here!

  //1 - Change the greeting from "Hello, There!" to "Hello, World!".
  let helloWorldElem = document.getElementById('greeting');
  helloWorldElem.innerHTML = "Hello, World!";

  //2 - Set the background color of each <li> to yellow.
  let allListItems = document.querySelectorAll('li');
  allListItems.forEach((listItem)=>{
    listItem.style.backgroundColor = "yellow";
    listItem.addEventListener("click",selectedClass);
  })

  //3 - Create an image tag, set its src attribute to http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, and append the to the #greeting div.
  let image = document.createElement("img");
  image.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
  helloWorldElem.appendChild(image);

  //4 - Add the class of selected to an <li> when it is clicked. Remove it from any other lis as well.
  function selectedClass(){
    let currentSelected = document.querySelector('.selected');
    if ( currentSelected ) {
      currentSelected.className = "";
    }
    this.className = "selected";
    //5 - Change the image to be the most recently clicked food item.
    document.querySelectorAll('img')[1].src = "./images/"+this.innerHTML+".jpeg";
  }

  //6 - When the gray div is moused over, it's removed from the DOM.
  let ghostingDiv = document.querySelector("#ghosting");
  ghostingDiv.addEventListener('mouseover',function(){ return this.remove() });

  // BONUS NOTE: Why doesn't this work??
  // document.querySelector("#ghosting").addEventListener('mouseover',()=>{ this.remove(); });

  //7 - When the orange div is moused over, its width doubles.
  //    When the mouse moves out of the div, it returns to its original size.
  document.querySelector("#resize")
    .addEventListener('mouseenter',function(){ this.style.width = "400px" });

  document.querySelector("#resize")
    .addEventListener('mouseleave',function(){ this.style.width = "200px" });

  //8 - When the reset button is clicked -
  //    remove the selected class from each <li>
  //    and change the image to panic.jpeg.
  document.querySelector("#reset")
    .addEventListener('click',function(){
      let currentSelected = document.querySelector('.selected');
      if ( currentSelected ) {
        currentSelected.className = "";
        allListItems[1].className = 'selected';
      }
      document.querySelectorAll("img")[1].setAttribute("src","./images/panic.jpeg")
    })

  //9 - When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed,
  //    the page alerts the message "I HATE NUMBERZZZ!"
  document.querySelector("body")
    .addEventListener("keyup", function(event){
      if (event.keyCode >= 48 && event.keyCode <= 57) {
        console.log("I HATE NUMBERZZZ!");
      }
    });

  //BONUS:
  let konamiCount = 0;

  document.querySelector('body').addEventListener('keyup',function(event){
    const konamiCodeSequence = [38,38,40,40,37,39,37,39,66,65];
    if ( event.keyCode === konamiCodeSequence[konamiCount] ) {
      konamiCount++;
      if ( konamiCount === konamiCodeSequence.length ) {
        console.log("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
        konamiCount = 0;
      }
    } else {
      konamiCount = 0;
    }
  })

}
