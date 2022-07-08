// let firstNameEL = document.getElementById("first-name");
let submitButton = document.getElementById("submit");
let inputs = document.getElementsByTagName("input");
let labels = document.getElementsByTagName("label");

// Setup event listener on the submit button

submitButton.addEventListener("click", click);

let caution = "❗";

function click() {
  if (document.getElementById("first-name").value === "") {
    labels[0].classList.remove("hidden");
    inputs[0].classList.add("hidden-input");
    inputs[0].setAttribute("placeholder", caution);
  } else {
    labels[0].classList.add("hidden");
    inputs[0].classList.remove("hidden-input");
  }
  if (document.getElementById("last-name").value === "") {
    inputs[1].setAttribute("placeholder", caution);
    labels[1].classList.remove("hidden");
    inputs[1].classList.add("hidden-input");
  } else {
    labels[1].classList.add("hidden");
    inputs[1].classList.remove("hidden-input");
  }
  if (document.getElementById("email").value === "") {
    inputs[2].setAttribute("placeholder", caution);
    labels[2].classList.remove("hidden");
    inputs[2].classList.add("hidden-input");
  } else {
    labels[2].classList.add("hidden");
    inputs[2].classList.remove("hidden-input");
  }
  if (document.getElementById("password").value === "") {
    inputs[3].setAttribute("placeholder", caution);
    labels[3].classList.remove("hidden");
    inputs[3].classList.add("hidden-input");
  } else {
    labels[3].classList.add("hidden");
    inputs[3].classList.remove("hidden-input");
  }
}

document.addEventListener(
  "invalid",
  (function () {
    return function (e) {
      e.preventDefault();
      // document.getElementById("first-name").focus();
    };
  })(),
  true
);

console.log(inputs[0].getAttributeNode);
