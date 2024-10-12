// script.js

// Função para abrir/fechar a barra de busca
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search');

searchIcon.addEventListener('click', function() {
    if (searchInput.style.width === '0px' || searchInput.style.width === '') {
        searchInput.style.display = 'block'; // Exibe o input
        searchInput.style.borderRadius = '30px'; // Adiciona o border-radius
        setTimeout(() => {
            searchInput.style.width = '1200px'; // Aumenta a largura para 600px
        }, 10); // Pequeno delay para a animação funcionar
    } else {
        searchInput.style.width = '0'; // Reduz a largura
        setTimeout(() => {
            searchInput.style.display = 'none'; // Esconde o input
        }, 400); // Tempo da animação
    }
});

// Função para busca de produtos
searchInput.addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');
    let found = false; // Variável para controlar se algum produto foi encontrado

    productItems.forEach(function(item) {
        const productName = item.textContent.toLowerCase();
        if (productName.startsWith(searchValue)) { // Mudamos para startsWith
            item.style.display = 'block';
            found = true; // Um produto foi encontrado
        } else {
            item.style.display = 'none';
        }
    });

    // Verifica se algum produto foi encontrado e exibe a mensagem
    const notFoundMessage = document.getElementById('not-found');
    if (!found) {
        notFoundMessage.style.display = 'block'; // Exibe a mensagem
        setTimeout(() => {
            notFoundMessage.style.opacity = 1; // Aumenta a opacidade
        }, 10); // Um pequeno delay para permitir a transição
    } else {
        notFoundMessage.style.opacity = 0; // Reduz a opacidade
        setTimeout(() => {
            notFoundMessage.style.display = 'none'; // Esconde a mensagem após a transição
        }, 500); // Tempo da transição (deve ser igual ao CSS)
    }
});
