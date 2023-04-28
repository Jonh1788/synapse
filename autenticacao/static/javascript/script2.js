btn = document.getElementById("btn");
form = document.getElementById("formulario-login")

btn.addEventListener("click", verificarValidade)
alert("teste")
function verificarValidade()
{
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;

    if(email.length <= 4){
        alert("Email invalido!")
        return false
    }
    if(senha.length <= 2){
      alert("Senha Invalida")
      return false
    }
    if(email.length >= 5 && senha.length >= 3)
    {
        form.submit()
        return true
    }


}
