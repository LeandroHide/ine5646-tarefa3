class Listicle {
    constructor(name, subtitle, summary, image) {
        this.nome = this.create("H1", name, "item_nome");
        this.subtitulo = this.create("H2", subtitle, "item_subtitulo");
        this.sinopse = this.create("P", summary, "item_sinopse");
        this.figura = this.createImage("IMG", image, "item_imagem");
        this.contador = this.create("P", "0", "contador_post");
        this.contador2 = this.create("P", "0", "contador_post");
        this.heart = this.createButton("INPUT", "image", "imagens/heart.png", "heart", this.contador);
        this.broken = this.createButton("INPUT", "image", "imagens/broken.png", "heart", this.contador2);


        this.listaTopicos = this.juntaTudo(this.nome, this.subtitulo, this.sinopse,
                                            this.figura, this.heart, this.contador, this.broken, this.contador2);

    }

    get cont() {
        return this.contador;
    }


    create(type, content, id) {
        const elemento = document.createElement(type);
        elemento.innerText = content;
        elemento.id = id;
        return elemento;
    }

    createImage(type, content, id) {
        const elemento = document.createElement(type);
        elemento.src = content;
        elemento.id = id;
        return elemento;
    }

    createButton(type, type2, content, classe, contador) {
        const elemento = document.createElement(type);
        elemento.type = type2;
        elemento.src = content;
        elemento.className = classe;
        elemento.addEventListener("click", this._changeColor);
        elemento.addEventListener("click", function(){
            if (contador.innerText == "0") {
                contador.innerText = "1";
            } else {
                contador.innerText = "0";
            }
        });

        return elemento;
    }

    juntaTudo(nome, subtitulo, sinopse, figura, heart, contador, broken, contador2) {
        let listaTopicos = document.getElementById("listaMangas");

        let listaItems = document.createElement("DIV");
        listaItems.id = "item_lista";

        let listaBotaos = document.createElement("DIV");
        listaBotaos.id = "item_botaos";

        listaBotaos.appendChild(heart);
        listaBotaos.appendChild(contador);
        listaBotaos.appendChild(broken);
        listaBotaos.appendChild(contador2);

        listaItems.appendChild(nome);
        listaItems.appendChild(subtitulo);
        listaItems.appendChild(sinopse);
        listaItems.appendChild(figura);

        listaItems.appendChild(listaBotaos);

        listaTopicos.appendChild(listaItems);

        return listaTopicos;
    }

    _changeColor(event) {
        const imagem = event.target;
        $(imagem).toggleClass("transparent");
    }

    teste(event) {
        ;
    }
}



topico1 = new Listicle("The New Gate", "Kazanami, Shinogi & Miwa, Yoshiyuki (Arte)",
                      "The New Gate, um jogo online que havia se transformado em um jogo de morte, e que graças aos esforços de Shin, um dos jogadores mais antigos, dezenas de milhares de jogadores que haviam sido arrastados para esse jogo foram libertados. Mas depois que ele derrotou o último chefe e libertou a todos, ele foi engolido por uma luz estranha e se viu dentro do mundo do jogo 500 anos no futuro.",
                      "imagens/gate.jpg");


topico2 = new Listicle("One Punch-Man", "ONE & Murata, Yusuke (Arte)",
                       "A história segue o dia-a-dia de um herói normal que está infeliz por ser forte o bastante para derrotar todos os seus oponentes com apenas um soco, já que isso não lhe traz mais a sensação de adrenalina ao enfrentar um inimigo poderoso.",
                       "imagens/punch.jpg");

topico3 = new Listicle("Shokugeki no Souma", "Jang Sung-Lak",
                       "O sonho de Souma Yukihira é se tornar um chef de primeira no restaurante de seu pai e superar suas habilidades de culinária, mas assim que se gradua no ensino fundamental, seu pai, Jouichirou Yukihira, fecha o restaurante para cozinhar nos Estados Unidos. Embora oprimido, o espírito de luta de Souma se reacende pelo desafio de Jouichirou no qual é sobreviver numa escola de culinária de elite onde apenas 10% dos estudantes se graduam. Poderá Souma sobreviver?",
                       "imagens/souma.png")
