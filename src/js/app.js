//Funcionamiento de los tabs

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//Funcionamiento Docentes Tabs Aside

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("main__contenido");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("dropdown-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



//Funcionamiento Navs

function openNavIndex(){
  document.getElementById("mySidenav").style.width = "330px";
} 

//Cuando le de click en el btn mas sera un toggle

const btnToggle = document.querySelector('#plus');
btnToggle.addEventListener('click', function(){
  document.getElementById("mySidenav").classList.toggle('openNav');
});

function openNav() {
  document.getElementById("mySidenav").style.width = "330px";
  document.getElementById("mySidenav").style.top = "220px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//Doble Nav

function openNavRight() {
  document.getElementById("mySidenavRight").style.width = "300px";
  document.getElementById("mySidenavRight").style.top = "128px";

  /*document.getElementsByClassName("main__contenido")[0].style.marginRight = "300px";
  document.getElementsByClassName("main__contenido")[1].style.marginRight = "300px";
  document.getElementsByClassName("main__contenido")[2].style.marginRight = "300px";
  document.getElementsByClassName("main__contenido")[3].style.marginRight = "300px";
  document.getElementsByClassName("main__contenido")[4].style.marginRight = "300px";
  document.getElementsByClassName("main__contenido")[5].style.marginRight = "300px";
  document.getElementsByClassName("main__contenido")[6].style.marginRight = "300px";
  document.getElementsByClassName("main__contenido")[7].style.marginRight = "300px";
  document.getElementsByClassName("main__contenido")[8].style.marginRight = "300px";
  document.getElementsByClassName("main__contenido")[9].style.marginRight = "300px";
  document.getElementsByClassName("main__contenido")[10].style.marginRight = "300px";
  document.getElementsByClassName("main__contenido")[11].style.marginRight = "300px";*/
}

function closeNavRight() {
  document.getElementById("mySidenavRight").style.width = "0";
  document.getElementsByClassName("main__contenido")[0].style.marginRight = "0";
  document.getElementsByClassName("main__contenido")[1].style.marginRight = "0";
  document.getElementsByClassName("main__contenido")[2].style.marginRight = "0";
  document.getElementsByClassName("main__contenido")[3].style.marginRight = "0";
  document.getElementsByClassName("main__contenido")[4].style.marginRight = "0";
  document.getElementsByClassName("main__contenido")[5].style.marginRight = "0";
  document.getElementsByClassName("main__contenido")[6].style.marginRight = "0";
  document.getElementsByClassName("main__contenido")[7].style.marginRight = "0";
  document.getElementsByClassName("main__contenido")[8].style.marginRight = "0";
  document.getElementsByClassName("main__contenido")[9].style.marginRight = "0";
  document.getElementsByClassName("main__contenido")[10].style.marginRight = "0";
  document.getElementsByClassName("main__contenido")[11].style.marginRight = "0";

}


//Clase active para el menu cuando selecciona el boton nuevas solicitudes
function activeNav(){
  if(document.querySelector(".text-adminus")){
    document.querySelector("#tablink-admin").className = "active";
  }
}

function noActiveNav(){
  if(document.querySelector(".text-adminus")){
    document.querySelector("#tablink-admin").classList.remove("active");
  }
}

//Agregar Tema


function crearTema(){
  const padre = document.querySelector('#initial');
  let div = document.createElement("DIV");
  div.innerHTML += `<div class="">

                      <div class="info__title">
                          <span>Titulo:</span>
                          <input type="text" placeholder="Texto" class="input__body">
                      </div>

                      <div class="info__switch">
                          <div> 
                              <label class="switch">
                                  <input type="checkbox" checked>
                                  <span class="slider round"></span>
                              </label>

                              <span>Habilitar cartelera de avisos</span>
                          </div><!--ToggleButton-->
                      </div>

                      <div class="info__switch">
                          <div>
                              <label class="switch">
                                  <input type="checkbox" checked>
                                  <span class="slider round"></span>
                              </label>

                              <span>Habilitar calendario</span>
                          </div><!--ToggleButton-->
                      </div>
                    </div> <!--Info Crear Tema-->`;

  padre.appendChild(div);
}

//Cambiar Nombre Tema

function cambiarNombre(){
  const btnCrear = document.querySelector('#crearTema');
  let inputText = document.querySelector('#input__body').value;
  const temaUno = document.querySelector('#tema1');
  temaUno.textContent = inputText;
}









