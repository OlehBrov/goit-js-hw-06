function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createForm = document.querySelector('#controls');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes')

let boxesAmount = inputHandler;

inputRef.addEventListener('input', inputHandler);

function inputHandler(event){
  event.preventDefault();
  console.log(event.currentTarget.value);
 return boxesAmount = event.currentTarget.value;
}

// createBtnRef.addEventListener('click', boxesCreateFunc(boxesAmount));
// console.log(createBtnRef);
console.log(boxesAmount);

// function boxesCreateFunc (amount){
//   console.log("Button was clicked");
//   const divArray = new Array(amount);
//   let param = 20;
//   for (let i = 0; i < divArray.length; i+=1){
//     const divRef = document.createElement('div');
    
//     param += 10;
//     divRef.style.width = `${param}px`;
//     divRef.style.height = `${param}px`;
//     divRef.style.backgroundColor = getRandomHexColor();
    
//     boxesRef.append(divRef);
// }};



// let inputAmount = 


// // destroyBtnRef.addEventListener('click', destroyBoxes);


// console.dir(createBtnRef);
// console.dir(destroyBtnRef);


// let amountBoxesInput = inputRef.addEventListener('input', (event) => {
//   return Number(event.currentTarget.value);
// })
// let onCreateBthHandler = createBtnRef.addEventListener('click', createBoxes(amountBoxesInput));

// console.log(amountBoxesInput);

// function createBoxes(amount) {
// const divArray = new Array(amount);
// console.log(divArray)
// let param = 20;
// for (let i = 0; i < divArray.length; i+=1){
//   const divRef = document.createElement('div');
  
//   param += 10;
//   divRef.style.width = `${param}px`;
//   divRef.style.height = `${param}px`;
//   divRef.style.backgroundColor = getRandomHexColor();
  
//   boxesRef.append(divRef);
  
// }
// };


// // createBoxes(5);
// // const amount = 10;



