document.addEventListener("DOMContentLoaded", () => {
  const btnTraduzir = document.getElementById("btn-traduzir");
  const btnTema = document.getElementById("btn-tema");
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "claro") {
    document.body.classList.add("tema-claro");
    document.body.classList.remove("tema-escuro");
  } else {
    document.body.classList.remove("tema-claro");
    document.body.classList.add("tema-escuro");
  }

  // primeira página
  const titulo = document.querySelector(".sobremim h2");
  const paragrafo = document.querySelector(".sobremim p");
  const resumo = document.querySelector(".resumo p");
  const contatostitle = document.querySelector(".contatos h2");
  const resumotitle = document.querySelector(".resumo h2");
  const mimnav = document.querySelector("#mim-nav a")
  const curiosidadenav = document.querySelector("#curiosidade-nav a")
  const sitenav = document.querySelector("#site-nav a")

  let traduzido = false;
  let temaClaro = false;

  btnTraduzir.addEventListener("click", () => {
    if (!traduzido) {
      mimnav.textContent = "About Me";
      curiosidadenav.textContent = "Curiosities";
      sitenav.textContent = "About the Website";
      titulo.textContent = "Welcome!";
      resumotitle.textContent = "Resume";
      paragrafo.textContent =
        "This is the initial section of the site, where the main content is presented.";
      resumo.textContent = `
      I am currently in the 1st semester of Computer Science at SENAC college in Santo Amaro, expected to graduate in 11/2028. In addition, I am specializing as a Full Stack Developer through RocketSeat, focusing on JavaScript, Node.js, TypeScript, REST API, and React.
      
      My goal is to become a Full Stack Software Developer. I've had some experience with RocketSeat events, such as NWL, where in one of them I built a linktree using HTML, CSS, and JavaScript, and in the latest event I created a task manager using only JavaScript.
    `;
      contatostitle.textContent = "Contacts";
      btnTraduzir.textContent = "Original";
      traduzido = true;
    } else {
      mimnav.textContent = "Sobre Mim";
      curiosidadenav.textContent = "Curiosidades";
      sitenav.textContent = "Sobre o Site";
      titulo.textContent = "Bem-vindo!";
      paragrafo.textContent =
        "Esta é a seção inicial do site, onde apresentamos o conteúdo principal.";
      resumo.textContent = `
        Atualmente curso o 1° período em Ciência da Computação na faculdade SENAC em Santo Amaro com previsão de formatura para 11/2028. Além disso, estou me especializando como Desenvolvedor Full Stack pela RocketSeat, com o foco em JavaScript, Node.JS, TypeScript, API REST e React.
  
        Meu objetivo é me tornar um Desenvolvedor de Software Full Stack, já tive algumas experiências com eventos da RocketSeat, como a NWL, onde em uma delas eu fiz um linktree utilizando HTML,CSS e JavaScript, e no último evento eu fiz um gerenciador de taferas utilizando apenas JavaScript.
        `;

      contatostitle.textContent = "Contatos";
      btnTraduzir.textContent = "Traduzir";
      traduzido = false;
    }
  });

  btnTema.addEventListener("click", () => {
    const body = document.body;
    temaClaro = !temaClaro;

    const temaAtual = body.classList.contains("tema-claro");
    const novoTemaClaro = !temaAtual;

    if (novoTemaClaro) {
      body.classList.add("tema-claro");
      body.classList.remove("tema-escuro");
      localStorage.setItem("tema", "claro");
    } else {
      body.classList.remove("tema-claro");
      body.classList.add("tema-escuro");
      localStorage.setItem("tema", "escuro");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btnTraduzir2 = document.getElementById("btn-traduzir2");
  const btnTema = document.getElementById("btn-tema2");

  // segunda página
  const curiosidade = document.querySelector(".curiosidade h2");
  const paragrafo2 = document.querySelector("#container p");
  const containert2 = document.querySelector("#musicas h2");
  const containerp2 = document.querySelector("#musicas p");
  const containerp3 = document.querySelector("#Hobbys p");
  const mimnav = document.querySelector("#mim-nav a")
  const curiosidadenav = document.querySelector("#curiosidade-nav a")
  const sitenav = document.querySelector("#site-nav a")

  let traduzido = false;
  let temaClaro = false;

  btnTraduzir2.addEventListener("click", () => {
    if (!traduzido) {
      mimnav.textContent = "About Me";
      curiosidadenav.textContent = "Curiosities";
      sitenav.textContent = "About the Website";
      curiosidade.textContent = "Curiosities";
      paragrafo2.textContent =
        "On this page you will see some of my favorite works and hobbs! I hope you enjoy it.";
      containert2.textContent = "Works!";
      containerp2.textContent =
        "In much of my free time, I really like listening to music! But beyond that ... One thing I love is to compose. Below I will make my most famous song today, I hope you enjoy :)";
      containerp3.textContent =
        "I have several hobbies, among them are: playing basketball, listening to music, drawing, reading manga, among others. However, one stands out among them ... Playing online games has definitely become my favorite hobby, if you want to add me, just send me a message on Discord, my nick is: Yoriih";
      btnTraduzir2.textContent = "Original";
      traduzido = true;
    } else {
      mimnav.textContent = "Sobre Mim";
      curiosidadenav.textContent = "Curiosidades";
      sitenav.textContent = "Sobre o Site";
      curiosidade.textContent = "Curiosidades";
      paragrafo2.textContent =
        "Nesta página você verá alguns dos meus trabalhos e Hobbys favoritos! Espero que goste.";
      containert2.textContent = "Trabalhos!";
      containerp2.textContent =
        "Em grande parte do meu tempo livre, eu gosto bastante de escutar música! Mas além disso... Uma coisa que amo é compor. Abaixo deixarei a minha música mais famosa atualmente, eu espero que goste :)";
      containerp3.textContent =
        "Eu tenho diversos Hobbys, dentre eles estão: jogar basquete, escutar música, desenhar, ler mangás, entre outros. Porém, um se destaca dentre eles... Jogar jogos online definitivamente se tornou o meu Hobby favorito, se quiser me adicionar, só me enviar uma mensagem no discord, meu nick é: Yoriiih";
      btnTraduzir2.textContent = "Traduzir";
      traduzido = false;
    }
  });

  btnTema.addEventListener("click", () => {
    const body = document.body;
    temaClaro = !temaClaro;

    const temaAtual = body.classList.contains("tema-claro");
    const novoTemaClaro = !temaAtual;

    if (novoTemaClaro) {
      body.classList.add("tema-claro");
      body.classList.remove("tema-escuro");
      localStorage.setItem("tema", "claro");
    } else {
      body.classList.remove("tema-claro");
      body.classList.add("tema-escuro");
      localStorage.setItem("tema", "escuro");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btnTraduzir2 = document.getElementById("btn-traduzir3");
  const btnTema = document.getElementById("btn-tema");

  // terceira página
  const titulo3 = document.querySelector("#sobre-main h2");
  const paragrafo3 = document.querySelector("#sobre-main p");
  const mimnav = document.querySelector("#mim-nav a");
  const curiosidadenav = document.querySelector("#curiosidade-nav a");
  const sitenav = document.querySelector("#site-nav a");

  let traduzido = false;
  let temaClaro = false;

  btnTraduzir2.addEventListener("click", () => {
    if (!traduzido) {
      mimnav.textContent = "About Me";
      curiosidadenav.textContent = "Curiosities";
      sitenav.textContent = "About the Website";
      titulo3.textContent = "About the Website";
      paragrafo3.textContent = "This site was designed for the purpose of being a practical project, aiming to effectively apply all the knowledge acquired throughout the course in the discipline of PWPE (Web Programming and Experimental Practices). Developed by student Pedro Guedes, during his training in the Computer Science Course - Bachelor, the project was guided by Professor Leonardo Gaparini Romão. The development of this site reflects the pursuit of academic excellence and the practical application of endeavor concepts for the construction of web solutions. In the video below, you can see a little how the site creation process was and how its structure works.";
      btnTraduzir2.textContent = "Original";
      traduzido = true;
    } else {
      mimnav.textContent = "Sobre Mim";
      curiosidadenav.textContent = "Curiosidades";
      sitenav.textContent = "Sobre o Site";
      titulo3.textContent = "Sobre o Site";
      paragrafo3.textContent = "Este site foi idealizado com o propósito de ser um projeto prático, visando aplicar de maneira eficaz todo o conhecimento adquirido ao longo do curso na disciplina de PWPE (Programação Web e Práticas Experimentais). Desenvolvido pelo aluno Pedro Guedes, durante sua formação no curso de Ciência da Computação - Bacharelado, o projeto contou com a orientação do professor Leonardo Gaparini Romão. O desenvolvimento desse site reflete a busca pela excelência acadêmica e a aplicação prática de conceitosfundamentais para a construção de soluções web. No vídeo abaixo, pode-se observar um pouco como foi o processo de criação do site e como funciona a sua estrutura.";
      btnTraduzir2.textContent = "Traduzir";
      traduzido = false;
    }
  });

  btnTema.addEventListener("click", () => {
    const body = document.body;
    temaClaro = !temaClaro;

    const temaAtual = body.classList.contains("tema-claro");
    const novoTemaClaro = !temaAtual;

    if (novoTemaClaro) {
      body.classList.add("tema-claro");
      body.classList.remove("tema-escuro");
      localStorage.setItem("tema", "claro");
    } else {
      body.classList.remove("tema-claro");
      body.classList.add("tema-escuro");
      localStorage.setItem("tema", "escuro");
    }
  });
});




