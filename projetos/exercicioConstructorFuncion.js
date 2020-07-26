function Postagem(titulo, message, author) {
    this.titulo = titulo;
    this.message = message;
    this.author = author;
    this.visualizacao = 0;
    this.comentarios = [];
    this.estaAoVivo = false;
}

let postagem = new Postagem('a', 'b', 'c');
console.log(postagem);