// Aguarda o carregamento completo do DOM (Document Object Model)
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Seleciona o formulário. Nota: Adicionei um ID 'cadastroForm' no HTML para facilitar a seleção.
    const form = document.getElementById('cadastroForm');

    // Adiciona um ouvinte de evento para o envio do formulário ('submit')
    form.addEventListener('submit', function(event) {
        
        // Seleciona os campos de senha pelo ID
        const senha = document.getElementById('senha');
        // Seleciona o campo de confirmação de senha (Nota: Adicionei um ID 'confirmarSenha' no HTML para diferenciá-lo)
        const confirmarSenha = document.getElementById('confirmarSenha');
        // Seleciona o checkbox de termos de uso
        const termosCheckbox = document.getElementById('termos');

        let isValid = true;

        // 1. Validação das senhas
        if (senha.value !== confirmarSenha.value) {
            alert('Erro: As senhas não coincidem. Por favor, verifique.');
            // Impede o comportamento padrão de envio do formulário
            event.preventDefault(); 
            isValid = false;
        }

        // 2. Validação do checkbox de termos
        if (!termosCheckbox.checked) {
            alert('Erro: Você deve concordar com os termos de uso para se cadastrar.');
            // Impede o comportamento padrão de envio do formulário
            event.preventDefault(); 
            isValid = false;
        }

        if (isValid) {
            // Se as validações passarem, você pode adicionar lógica de envio para um servidor aqui.
            // A linha abaixo é apenas para fins de teste no console do navegador.
            console.log('Formulário validado com sucesso! Pronto para processamento no servidor.');
            // Como a action="#" está definida no HTML, o formulário tentará enviar os dados para a própria página.
        }
    });
});