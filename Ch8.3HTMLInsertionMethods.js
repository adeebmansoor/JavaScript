// Ways to insert elements in the DOM:-
// First way: by adding element in innerHTML
// let a  = document.getElementsByTagName('div')[0];
// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

// Second way: by creating a whole new element
let a  = document.getElementsByTagName('div')[0];
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';

// Some more insertions methods:
// node.append(e) - append at the end of the node, inside of the container.
// a.appendChild(div);
// node.prepend(e) - insert at the beginning of node, inside of the container.
// a.prepend(div);
// node.before(e) - insert before node, outside of the container.
// a.before(div);
// node.after(e) - insert after node, outside of the container.
// a.after(div);
// node.replaceWith(e) - replace node, with the given node.
// a.replaceWith(div);