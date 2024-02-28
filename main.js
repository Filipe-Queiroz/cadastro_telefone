const form = document.getElementById('form-cadastro');
const nomes = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (inputNumeroContato.value.length !== 11) {
        alert('O número de telefone deve ter exatamente 11 dígitos');
        return;
    }

    const numeroFormatado = inputNumeroContato.value.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');

    if (telefone.includes(numeroFormatado)) {
        alert(`O número ${numeroFormatado} já foi inserido`);
    } else {
        nomes.push(inputNomeContato.value);
        telefone.push(numeroFormatado);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${numeroFormatado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}