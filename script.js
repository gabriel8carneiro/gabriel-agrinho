document.addEventListener('DOMContentLoaded', () => {
    const curiosidadeBtn = document.getElementById('curiosidadeBtn');
    const curiosidadeTexto = document.getElementById('curiosidadeTexto');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const curiosidades = [
        "Você sabia que a maior parte da água que consumimos nas cidades vem de bacias hidrográficas localizadas em áreas rurais?",
        "A internet de alta velocidade no campo é essencial para que os produtores rurais acessem mercados, informações e tecnologias que impulsionam a produção.",
        "As cidades se beneficiam do paisagismo e do ar puro que as áreas rurais proporcionam, contribuindo para a qualidade de vida urbana.",
        "Muitos produtos artesanais e turísticos das áreas rurais encontram seus principais consumidores nas cidades, fortalecendo a economia local do campo.",
        "A pesquisa e o desenvolvimento tecnológico nas universidades e centros urbanos são cruciais para a inovação na agricultura e pecuária."
    ];

    // Lógica para o botão de curiosidade
    curiosidadeBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * curiosidades.length);
        curiosidadeTexto.textContent = curiosidades[randomIndex];
    });

    // Lógica para alternância de tema (Dark Mode)
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
            themeToggle.setAttribute('aria-label', 'Alternar tema para claro');
        } else {
            body.classList.remove('dark-mode');
            themeToggle.querySelector('i').classList.remove('fa-sun');
            themeToggle.querySelector('i').classList.add('fa-moon');
            themeToggle.setAttribute('aria-label', 'Alternar tema para escuro');
        }
    }

    // Carrega o tema salvo no localStorage ou usa a preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Se não houver tema salvo, verifica a preferência do sistema
        applyTheme('dark');
    } else {
        applyTheme('light'); // Padrão é tema claro
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});