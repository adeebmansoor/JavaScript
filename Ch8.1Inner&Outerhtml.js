// 1. console.log & console.dir:
// console.log - shows the element Dom tree.
console.log(document.getElementsByTagName("div")[0]);
// console.dir - shows the element as an object with its properties.
console.dir(document.getElementsByTagName("div")[0]);

// 2. TagName / nodeName:
// TagName - only exists for element nodes.
let x = document.getElementsByTagName("div")[0];
console.log(x);
let y = document.getElementsByTagName("div")[0];
console.dir(y);
// nodeName - it is defined for any nodes (text, comment).
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

// 3. innerHTML & outerHTML:
// innerHTML - property allows to get the HTML inside the element as a string.
// innerHTML - property only valid for element nodes
console.log(first.innerHTML);
// first.innerHTML = "<i>I am Italic</i>";
// outerHTML - the outerHTML property contains full HTML innerHTML + the element itself.
console.log(first.outerHTML);
// first.outerHTML = "<span> Welcome Again!</span>";
// for other nodes type we can use nodeValue or data.
console.log(document.body.firstChild);
console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);
// Both will print the same thing

// textContent - provides access to the text inside the element (only text minus all tags)
console.log(document.body.textContent);

// hidden property: it specifies the visibility of the element.
// for eg : <div id="first" hidden>Hi, I am div</div>
// $0 hidden = false; can be used for re-visibility of the element in the console.