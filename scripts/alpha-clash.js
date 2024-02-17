// function play(){
//   const home=document.getElementById("home");
//   // console.log(home);
//   home.classList.add("hidden")

//   const playground=document.getElementById("playground");
//  playground.classList.remove("hidden");
  
// }

function play(){
  hideElementById("home");
  addElementById("playground");
  continueGame();

}

function continueGame(){
  const alphabet=getARandomAlphabet();
  

  const curenntAlphabetElement=document.getElementById('current-alphabet')
  curenntAlphabetElement.innerText=alphabet.toUpperCase();
  getElementnameById(alphabet);

}
