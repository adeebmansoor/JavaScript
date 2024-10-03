let firstElem = document.getElementById("first");

// elem.getAttribute("name") - used to get the value of an attribute.
console.log(firstElem.getAttribute("class"));

// elem.hasAttribute("name") - used to check for existence of an attribute.
console.log(firstElem.hasAttribute("class"));
console.log(firstElem.hasAttribute("style"));

// elem.setAttribute("name" , "value") - used to set the value of an attribute.
// firstElem.setAttribute("hidden","true");
// firstElem.setAttribute("class","true sahiHai");

// elem.removeAttribute("name") - used to remove the attribute from an element.
// firstElem.removeAttribute("class");

// elem.attributes() - used to get the collection of all attributes.
console.log(firstElem.attributes);

// Creating custom attributes starting with 'data-name' :
console.log(firstElem.dataset);
console.log(firstElem.dataset.game);
console.log(firstElem.dataset.player);