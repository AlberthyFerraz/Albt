function openPopup() {
    window.open('popup.html', 'Popup', 'width=400, height=500');
}

function calcularRisco() {
    const idade = parseFloat(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const pressaoArterial = parseFloat(document.getElementById('pressao').value);
    const colesterolTotal = parseFloat(document.getElementById('colesterol').value);
    const imc = parseFloat(document.getElementById('imc').value);
    const fumante = document.getElementById('fumante').checked;

    const resultado = calculadoraRiscoCardiovascular(idade, sexo, pressaoArterial, colesterolTotal, imc, fumante);
    
    document.getElementById('resultado').innerText = resultado;
}