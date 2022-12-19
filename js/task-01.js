const categoryItemRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemRef.length}`)

const listHeaders = categoryItemRef.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})
