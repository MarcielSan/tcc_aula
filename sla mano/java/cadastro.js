document.getElementById("formCadastro").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const termos = document.getElementById("termos").checked;

    const msg = document.getElementById("mensagem");

    if (!termos) {
        msg.innerText = "Você deve aceitar os termos.";
        return;
    }

    if (senha1 !== senha2) {
        msg.innerText = "As senhas não coincidem.";
        return;
    }

    const resposta = await fetch("http://127.0.0.1:5000/cadastrar", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            email: email,
            senha: senha1
        })
    });

    const data = await resposta.json();

    msg.innerText = data.mensagem;
});
