$(function () {
  $(".navbar-menu li").click(function () {
    $(".navbar-menu li").removeClass("menuSelected");
    $(this).addClass("menuSelected");
  });
});
function affiche_masque(e, f, anim) {
  etat = document.getElementById(e).style.display;
  if (etat == "none") {
    document.getElementById(e).style.display = "block";
    document.getElementById(f).classList.remove(anim);
    document.getElementById("inputButtonAvis").scrollIntoView();
  } else {
    document.getElementById(e).style.display = "none";
  }
}
