// Seleciona o botão responsável por alternar o tema
const botao = document.getElementById("toggleTema");

// Verifica se existe um tema salvo no localStorage
if (localStorage.getItem("tema") === "dark") {

    // Se o tema salvo for "dark", adiciona a classe "dark" ao body
    document.body.classList.add("dark");

    // Altera o texto do botão para indicar que pode voltar ao modo claro
    botao.innerText = "Modo Claro";
}

// Adiciona evento de clique ao botão de troca de tema
botao.addEventListener("click", () => {

    // Alterna (adiciona/remove) a classe "dark" no body
    document.body.classList.toggle("dark");

    // Verifica se o modo escuro está ativo
    if (document.body.classList.contains("dark")) {

        // Salva o tema como "dark" no navegador
        localStorage.setItem("tema", "dark");

        // Atualiza o texto do botão
        botao.innerText = "Modo Claro";

    } else {

        // Salva o tema como "light"
        localStorage.setItem("tema", "light");

        // Atualiza o texto do botão
        botao.innerText = "Modo Escuro";
    }
});

// Seleciona o botão de menu
const toggle = document.querySelector(".menu-toggle");

// Seleciona a lista dentro do menu
const menu = document.querySelector("#menu ul");

// Adiciona evento de clique no botão de menu
toggle.addEventListener("click", () => {

    // Alterna a classe "active" no menu (mostrar/esconder)
    menu.classList.toggle("active");
});
// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o formulário pelo ID "formContato"
    const formulario = document.getElementById("formContato");

    // Seleciona o elemento onde será exibido o feedback para o usuário
    const feedback = document.getElementById("feedback");

    // Adiciona um evento ao formulário quando ele for enviado
    formulario.addEventListener("submit", function (event) {

        // Impede o comportamento padrão (recarregar a página ao enviar o formulário)
        event.preventDefault();

        // Captura o valor digitado no campo "nome"
        const nome = document.getElementById("nome").value;

        // Captura o valor digitado no campo "email"
        const email = document.getElementById("email").value;

        // Verifica se o nome tem menos de 3 caracteres
        if (nome.length < 3) {

            // Exibe mensagem de erro
            feedback.innerText = "Por favor, digite seu nome completo.";

            // Define a cor do texto como vermelho
            feedback.style.color = "red";

        } else {

            // Exibe mensagem de sucesso personalizada com o nome do usuário
            feedback.innerText = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso (simulação).`;

            // Define a cor do texto como verde
            feedback.style.color = "green";

            // Limpa todos os campos do formulário
            formulario.reset();
        }
    });
});

