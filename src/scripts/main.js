document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  const herosection = document.querySelector(".hero");
  const alturaHero = herosection.clientHeight;

  // Escuta o evento de scroll na janela
  window.addEventListener("scroll", function () {
    const posicaoatual = window.scrollY;
    if (posicaoatual < alturaHero) {
      hideHeaderElements();
    } else {
      showHeaderElements();
    }
  });

  // Seção de atrações (programação das abas)
  buttons.forEach((button) => {
    button.addEventListener("click", function (botao) {
      const abaalvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id=${abaalvo}]`);
      hideAllTabs();
      aba.classList.add("shows__list--is--active");
      removeActiveButton();
      botao.target.classList.add("shows__tabs__button--is--active");
    });
  });

  // Seção FAQ (Accordion)
  questions.forEach((question) => {
    question.addEventListener("click", toggleFAQAnswer);
  });
});

// Função para ocultar os elementos do cabeçalho
function hideHeaderElements() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}

// Função para exibir os elementos do cabeçalho
function showHeaderElements() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}

// Função para abrir/fechar as respostas no FAQ
function toggleFAQAnswer(event) {
  const questionItem = event.target.parentNode;
  questionItem.classList.toggle("faq__questions__item--is-open");

  // Melhorando a acessibilidade (aria-expanded)
  const isOpen = questionItem.classList.contains(
    "faq__questions__item--is-open"
  );
  event.target.setAttribute("aria-expanded", isOpen);
}

// Função para remover a classe de botão ativo
function removeActiveButton() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  buttons.forEach((button) => {
    button.classList.remove("shows__tabs__button--is--active");
  });
}
