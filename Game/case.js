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
   function myFunction(){
    alert("Correct!")
    window.location.href="contact4.html"
  }

  function myFunction2(){
    alert("Try again")
  }

  function myFunction3(){
    alert("Oops!That's a wrong one")
  }







    
    
    