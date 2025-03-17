//inputId está referenciando o campo do formulário
function alterar_cor(inputId) {
  let cor = document.getElementById(inputId).value;
  document.body.style.backgroundColor = cor;
}

//imgId referencia a tag <img> que terá a logo alterada
function mudar_img(inputId, imgId) {
  let link = document.getElementById(inputId).value;
  let img = document.getElementById(imgId);
  let url = document.getElementsByTagName("a");
  if (link != "") {
    img.src = "img/" + link; //procura o jpg dentro da pasta img
    url = link;
  }
}
