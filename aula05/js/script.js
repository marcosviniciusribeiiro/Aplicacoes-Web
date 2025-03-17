function alterar() {
  alterarCor();
  alterarImg();
}
function alterarCor() {
  var cor = document.getElementById("corFundo").value;
  document.body.style.backgroundColor = cor;
}
function alterarImg() {
  var imgExistentes = ["logo1", "logo2"];
  var img = document.getElementById("inputImagem").value;
  var valido = false;
  if (img.trim() === "") {
    alert("Caminho em Branco! Informe um caminho válido!");
  } else {
    for (var i = 0; i <= imgExistentes.length; i++) {
      if (imgExistentes[i] === img) {
        var caminho = `img/${img}.jpg`;
        document.getElementById("imagem").src = caminho;
        valido = true;
        break;
      }
    }
    if (!valido) {
      alert("Imagem não encontrada!");
    }
  }
}
