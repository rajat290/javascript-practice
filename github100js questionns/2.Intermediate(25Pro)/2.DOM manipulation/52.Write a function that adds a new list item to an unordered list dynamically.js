// Write a function that adds a new list item to an unordered list dynamically.
function addListItem(text) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContext = text;
    ul.appendChild(li);
}