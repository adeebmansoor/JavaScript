let id1 = document.getElementById("id1");
console.log(id1);
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));
console.log(sp1.closest(".square"));
console.log(sp1.closest(".box"));
let div1 = document.getElementById("div1");
console.log(div1.contains(sp1));
console.log(div1.contains(div1));