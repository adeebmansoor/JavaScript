let t = document.body.firstElementChild;
console.log(t);
console.log(t.caption);
console.log(t.tHead);   // This will return null beacause there is no tHead present in the table.
console.log(t.tFoot);   // This will return null beacause there is no tFoot present in the table.
console.log(t.tBodies);
// console.log(t.tbody.rows);  (showing error)
console.log(t.rows[0].cells);
console.log(t.rows[0].sectionRowIndex);
console.log(t.rows[0].rowIndex);

// Quick Quiz:
console.log(typeof document);
console.log(typeof window);
// Ans: Both are objects in Js.