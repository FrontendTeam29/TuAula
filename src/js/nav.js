//Funcionamiento Aside 

let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//Funcionamiento A Active Aside

let a = document.querySelectorAll('.enlace');
let j;


for (i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function() {
    this.classList.toggle("active__nohollow");
});
}