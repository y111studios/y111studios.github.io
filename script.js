let diagrams = document.getElementsByClassName("diagrams")[0];

function toggleDiagrams() {
  if(diagrams.style.display == "none") diagrams.style.display = "flex";
  else diagrams.style.display = "none";
}

document.getElementsByClassName("close")[0].addEventListener("click", toggleDiagrams);
