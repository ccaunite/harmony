
function navDisplay() {
  var hamCtn = document.getElementById("hamburger-container");
  var ham = document.getElementById("nav-hamburger")
  var x = document.getElementById("nav");
  var registerBtn = document.getElementById("register-button");
  if (x.style.display === "none") {
    hamCtn.classList.add('add-bg');
    ham.style.color = "#000000";
    x.style.display = "block";
    registerBtn.style.backgroundColor = "#0D0A29";
    registerBtn.style.color = "#ffffff";
    document.body.style.overflow = "none";
  } else {
    hamCtn.classList.remove('add-bg');
    ham.style.color = "#ffffff";
    x.style.display = "none";
    registerBtn.style.backgroundColor = "#ffffff";
    registerBtn.style.color = "#0D0A29";
    document.body.style.overflow = "auto";
  }
}
