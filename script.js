document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ nome: nome, email: email });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    window.location.href = 'historico.html';
});

if (window.location.pathname.includes('historico.html')) {
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    var table = document.getElementById('usuariosTable').getElementsByTagName('tbody')[0];

    usuarios.forEach(function(usuario) {
        var newRow = table.insertRow();
        var cellNome = newRow.insertCell(0);
        var cellEmail = newRow.insertCell(1);

        cellNome.innerHTML = usuario.nome;
        cellEmail.innerHTML = usuario.email;
    });
}
