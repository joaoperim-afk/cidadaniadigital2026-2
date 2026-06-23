document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Controle do Modo Escuro por Acessibilidade
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    if (btnDarkMode) {
        btnDarkMode.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    // 2. Lógica do Jogo de Investigação Dinâmica
    const quizForm = document.getElementById("quiz-form");
    const containerResultado = document.getElementById("resultado-quiz");

    if (quizForm && containerResultado) {
        quizForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Impede recarregamento da página

            // Captura das respostas selecionadas no DOM para os 5 casos
            const c1 = document.querySelector('input[name="caso1"]:checked').value;
            const c2 = document.querySelector('input[name="caso2"]:checked').value;
            const c3 = document.querySelector('input[name="caso3"]:checked').value;
            const c4 = document.querySelector('input[name="caso4"]:checked').value;
            const c5 = document.querySelector('input[name="caso5"]:checked').value;

            // Processamento aritmético dos acertos
            let pontuacao = 0;
            if (c1 === "correto") pontuacao++;
            if (c2 === "correto") pontuacao++;
            if (c3 === "correto") pontuacao++;
            if (c4 === "correto") pontuacao++;
            if (c5 === "correto") pontuacao++;

            // Modificação estrutural e visual do container de feedback
            containerResultado.classList.remove("hidden", "sucesso", "atencao");

            // Mensagens personalizadas com base na nova pontuação máxima (5)
            if (pontuacao === 5) {
                containerResultado.innerHTML = `🏆 <strong>Rank: Detetive Lendário!</strong><br>Você acertou ${pontuacao} de 5 casos. Seu senso crítico está impecável contra as mentiras geradas por IA!`;
                containerResultado.classList.add("sucesso");
            } else if (pontuacao >= 3) {
                containerResultado.innerHTML = `🕵️‍♂️ <strong>Rank: Investigador Atento!</strong><br>Você acertou ${pontuacao} de 5 casos. Bom trabalho, mas fique atento aos detalhes automatizados mais sutis!`;
                containerResultado.classList.add("sucesso");
            } else {
                containerResultado.innerHTML = `🚨 <strong>Rank: Alvo Fácil da Desinformação!</strong><br>Você acertou apenas ${pontuacao} de 5 casos. Releia a nossa reportagem sobre os perigos digitais e proteja-se melhor!`;
                containerResultado.classList.add("atencao");
            }
            
            // Rola a tela suavemente até o resultado do jogo
            containerResultado.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
