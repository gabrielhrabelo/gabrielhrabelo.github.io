// Máscara para o campo de telefone
document.addEventListener("DOMContentLoaded", function() {
    const telefone = document.getElementById('telefone');
    
    telefone.addEventListener('input', function() {
        let valor = telefone.value.replace(/\D/g, ''); // Remove tudo o que não for número
        
        // Adiciona a máscara conforme o número de caracteres
        if (valor.length <= 2) {
            telefone.value = '(' + valor;
        } else if (valor.length <= 6) {
            telefone.value = '(' + valor.substring(0, 2) + ') ' + valor.substring(2);
        } else if (valor.length <= 10) {
            telefone.value = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7);
        } else {
            telefone.value = '(' + valor.substring(0, 2) + ') ' + valor.substring(2, 7) + '-' + valor.substring(7, 11);
        }
    });
});
