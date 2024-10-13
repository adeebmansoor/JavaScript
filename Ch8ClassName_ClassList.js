let first = document.getElementById("first");
// If we assign something to elem.className, it replaces the whole string of classes.
first.className = "red text-dark";

// It removes a class.
// first.classList.remove("yellow");

// It adds a class.
// first.classList.add("red");

// It adds the class if not exist otherwise removes it.
// first.classList.toggle("text-dark");

// It checks for the given class, returns true/false.
first.classList.contains("red");