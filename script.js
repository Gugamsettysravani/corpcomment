//-----------------------------------------COUNTER COMPONENET---------------------------------------


const textareaEl=document.querySelector(".form__textarea");
const counterE1=document.querySelector(".counter");

const inputHandler=()=>{
  const noofMAxCharacters=150;
  const noofCharactersTyped=textareaEl.value.length;
  const noOfCharactersLeft=noofMAxCharacters-noofCharactersTyped;

  counterE1.textContent=noOfCharactersLeft;



};
textareaEl.addEventListener('input',inputHandler);