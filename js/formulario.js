const form = document.querySelector("form");

const formEnviado = (response) => {
  if (response.ok) {
    form.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background-color: #f7f7f7;'><span style='color:#317A00'>Mensagem enviada<span/>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  } else {
    form.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background-color: #f7f7f7;'><span style='color:#e00000'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.shop</p>";
  }
  console.log(response);
};

const enviarForm = (event) => {
  event.preventDefault();
  const btn = document.querySelector("form button");
  btn.disabled = true;
  btn.innerText = "Enviando...";

  const data = new FormData(form);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formEnviado);
};

form.addEventListener("submit", enviarForm);
