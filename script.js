// Validação do formulário de contato
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Validações simples
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && email && telefone) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Função para inicializar o Google Maps
function initMap() {
    const location = { lat: 48.8566, lng: 2.3522 }; // Paris
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 12,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
    });
}
