function VerificarEntrada() {
  NomeConvidado = document.getElementById("nome").value;
  ConvidadosCristian = ["Amanda", "Sabrina", "Marcos", "Jonas", "Carol", "Ana"];

    if (ConvidadosCristian.includes(NomeConvidado)) {
    document.getElementById('PemissaoDeEntrada').innerText= "Voce pode entrar"
    } else {
        document.getElementById("PemissaoDeEntrada").innerText =
          "Voce  nao pode entrar";
}
    
}
