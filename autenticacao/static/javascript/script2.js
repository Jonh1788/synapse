btn = document.getElementById("btn");
form = document.getElementById("formulario-login")

btn.addEventListener("click", verificarValidade)
function verificarValidade()
{
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;

    if(email.length <= 1){
        alert("Email invalido!")
        return false
    }
    if(senha.length <= 1){
      alert("Senha Invalida")
      return false
    }
    if(email.length >= 2 && senha.length >= 2)
    {
        form.submit()
        return true
    }


}
