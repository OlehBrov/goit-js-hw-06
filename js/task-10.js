function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createForm = document.querySelector('#controls');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes')


// destroyBtnRef.addEventListener('click', destroyBoxes);


console.dir(createBtnRef);
console.dir(destroyBtnRef);

createBtnRef.addEventListener('click', createBoxes);

inputRef.addEventListener('input', (event) => {
  console.log(Number(event.currentTarget.value));
  
})

// console.log(amount);

function createBoxes(amount) {
  
const divArray = new Array(amount);
console.log(divArray)
let param = 20;
for (let i = 0; i < divArray.length; i+=1){
  const divRef = document.createElement('div');
  
  param += 10;
  divRef.style.width = `${param}px`;
  divRef.style.height = `${param}px`;
  divRef.style.backgroundColor = getRandomHexColor();
  
  boxesRef.append(divRef);
  
}
};


// createBoxes(5);
// const amount = 10;



