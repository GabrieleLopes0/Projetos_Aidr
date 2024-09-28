/* Criando Variáveis inputs */
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
/* Criando Variáveis button e lista */
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

// Função limpar campos
function clearInputs() {
    nome.value = "";
    email.value = "";
}

const functionCad = function(event) {
    event.preventDefault();
    const inputNome = nome.value;
    const inputEmail = email.value;
    /* Estrutura HTML lista */
    const templateHTML = `
        <li><strong>Nome: </strong>${inputNome}</li>
        <li><strong>Email: </strong>${inputEmail}</li>
        <li><hr></li>
    `;

    /* Condição */
    if (inputNome.trim() === "") {
        alert("Digite o campo nome");
        return false;
    }

    /* Incluindo intens no HTML */
    lista.innerHTML += templateHTML;
    
    // Limpando o input
    clearInputs();
}

/* Eventos de javaScript */
button.addEventListener("click", functionCad);