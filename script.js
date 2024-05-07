function redirecionarParaCadastro() {
    window.location.href = "login.html";
}

// Função para redirecionar para a página de login
function redirecionarParaLogin() {
    window.location.href = "cadastro.html";
}
function fazerCadastro() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Verifique se os campos estão preenchidos
    if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui, você pode enviar os dados de cadastro para o servidor backend para registro.
    // Neste exemplo, estamos armazenando os usuários localmente em localStorage por simplicidade.
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuariosRegistrados.push({ email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));

    alert("Login Realizado com sucesso");
    // Redirecione para a página de login após o cadastro.
    window.location.href = "inicio.html";
}