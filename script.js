let diagrams = document.getElementsByClassName("diagrams")[0];

function toggleDiagrams() {
  if(diagrams.style.display == "flex") diagrams.style.display = "none";
  else diagrams.style.display = "flex";
}

document.getElementsByClassName("close")[0].addEventListener("click", toggleDiagrams);
