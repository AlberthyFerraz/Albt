function openPopup() {
    window.open('popup.html', 'Popup', 'width=400, height=500');
}

function calcularNotas() {
    const nota1 = parseFloat(document.getElementById('nota1').value) || 0;
    const nota2 = parseFloat(document.getElementById('nota2').value) || 0;
    const nota3 = parseFloat(document.getElementById('nota3').value) || 0;
    
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Soma: ${soma}<br>Média: ${media.toFixed(2)}`;
}    