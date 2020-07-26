let permission;
permission ='Comum'

switch (permission) {
  case "Comum":
    console.log("usuario comum");
    break;

  case "Gerente":
    console.log("usuario gerente");
    break;

  case "Diretor":
    console.log("usuario diretor");
        break;
    
    default:
        console.log("Usuario não reconhecido")
}