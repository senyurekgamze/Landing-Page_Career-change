function changeCareer() {
  let name = prompt("What is your name?");
  let career = prompt("Are you ready for a change in your career?");
  let heading = document.querySelector("h2");
  if (career === "Yes" || career === "yes") {
    heading.innerHTML =
      "🥰 <br/ >Looking forward to having you on board " + name + "!";
  } else {
    heading.innerHTML =
      "🙃 <br/ >Let's arrange a meeting with you " + name + "!";
  }
}

let changeButton = document.querySelector("button");
changeButton.addEventListener("click", changeCareer);
