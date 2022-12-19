const categoryItemRef = document.querySelectorAll('.item');
console.log(categoryItemRef);
const numberOfCategiries = (array) => {
    console.log(`Number of categories: ${array.length}`);

}

numberOfCategiries(categoryItemRef);

const listHeaders = categoryItemRef.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})
