// Ativar links do menu

const links = document.querySelectorAll(".header__menu a");

const ativarLink = (link) => {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
};

links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

parametros.forEach((parametro) => {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
});

// Perguntas frequentes

const ativarPergunta = (event) => {
  const pergunta = event.target;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.querySelector(`#${controls}`);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
};

const perguntas = document.querySelectorAll(".perguntas button");

perguntas.forEach((elemento) => {
  elemento.addEventListener("click", ativarPergunta);
});

// galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta__imagens img");
const galeriaContainer = document.querySelector(".bicicleta__imagens");

const trocarImagem = (e) => {
  const img = e.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
};

galeria.forEach((elemento) => {
  elemento.addEventListener("click", trocarImagem);
});

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
