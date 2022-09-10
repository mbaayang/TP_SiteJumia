//----------------------------------Sous menu----------------------------------------

/* Lorsque l'utilisateur clique sur le bouton,
basculer entre le masquage et l'affichage du contenu de la liste déroulante */
function maFonction1(){
    document.getElementById("sous_menu1").classList.toggle("change");
}
function maFonction2(){
    document.getElementById("sous_menu2").classList.toggle("change");
}

//Fermez le menu déroulant si l'utilisateur clique en dehors de celui-ci
window.onclick = function(e) {
    if (!e.target.matches('.mybutton')) {
      var sousOnglets = document.getElementsByClassName("sous_onglet");
      for (var i = 0; i < sousOnglets.length; i++) {
        var afficher = sousOnglets[i];
        if (afficher.classList.contains('change')) {
          afficher.classList.remove('change');
        }
      }
    }
  }


//----------------------------------Menu burger responsive----------------------------------
function afficher(){
  document.getElementById("categories").classList.toggle("affichage");
}


//----------------------------------------Slide1----------------------------------------
  var imageSlides = ["images/img1.gif" , "images/img2.gif" , "images/img3.jpg" , "images/img4.jpg" , 
  "images/img_.jpg" , "images/img5.jpg" , "images/img6.jpg" , "images/img7.jpeg" , "images/img8.jpg" , "images/img_.jpeg"];
  var time = 3000;
  var i = 0;

  function changeImg(){
    document.slide.src = imageSlides[i];

    if(i < imageSlides.length - 1){
      i++;
    }else{
      i = 0;
    }
    setTimeout("changeImg()" , time);
  }
  //EXecute la fonction lorsque la page se charge
  window.onload = changeImg;


  //---------------------------------------Slide2---------------------------------------
var btnRight = document.getElementById("btn_right");
var btnLeft = document.getElementById("btn_left");

btnRight.onclick = () =>{
document.getElementById("slide2_img").scrollTo({
  top: 0,
  left: +600,
  behavior: 'smooth'
})
} 

btnLeft.onclick = () =>{
  document.getElementById("slide2_img").scrollTo({
    top: 0,
    left: -600,
    behavior: 'smooth'
  })
}