const textElement= document.getElementById("text");
const buttonElement= document.getElementById("button");

buttonElement.addEventListener("click",function(){
    const enteredtext=textElement.value;
    console.log("1")
    if(enteredtext==="12") {
   alert("Correct!")
   window.location.href="contact2.html"
   }else { alert("Wrong")
   
   }
   
   })
   
   let myMath=  Math.floor(Math.random()*(max-min)+min);

const buttElement= document.getElementById("frontside");
const butElement= document.getElementById("backside");
const myContent= document.getElementById("content").innerHTML;
const myButton = document.getElementById("randomnumber");
myButton.addEventListener("click",function(){
    console.log("hh")});

    let grabCoin = document.getElementById("coin2const");
grabCoin.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 2);
  console.log(randomNumber);
  if (randomNumber === 1) {
    alert("You win!");
  } else {
    alert("You lose!");
  }
});

