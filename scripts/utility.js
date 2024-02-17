function hideElementById(elementID){
 const element=document.getElementById(elementID);
  element.classList.add('hidden');
  // console.log(element);
}

function addElementById(elementID){
  const element=document.getElementById(elementID);
   element.classList.remove('hidden');
   // console.log(element);
 }

 function addBgColorByID(elementID){
  const element=document.getElementById(elementID);
   element.classList.add('bg-orange-400');
   // console.log(element);
 } 

 function getARandomAlphabet(){
  const alphabetString='abcdefghijklmnopqrstuvwxyz';
  const alphabets=alphabetString.split('');
  const randomNum=Math.random()*25;
  const index=Math.round(randomNum);

  const alphabet=alphabets[index];
  
  return alphabet;
 }

 function getElementnameById(element){
  element=document.getElementById(element);
  
  element.classList.add('bg-orange-400');
 }