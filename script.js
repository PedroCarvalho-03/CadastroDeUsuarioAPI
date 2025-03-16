async function buscarUsuario() {
    const userId = document.getElementById("userId").value;
    const resultado = document.getElementById("resultado");

    if (!userId) {
        resultado.innerHTML = "<p style='color: red;'>Por favor, digite um ID válido!</p>";
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if (!response.ok) {
            throw new Error("Usuário não encontrado!");
        }

        const usuario = await response.json();

        resultado.innerHTML = `
            <p><strong>Nome:</strong> ${usuario.name}</p>
            <p><strong>Usuário:</strong> ${usuario.username}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Endereço:</strong> ${usuario.address.street}, ${usuario.address.city}</p>
            <p><strong>Telefone:</strong> ${usuario.phone}</p>
            <p><strong>Empresa:</strong> ${usuario.company.name}</p>
        `;
    } catch (error) {
        resultado.innerHTML = "<p style='color: red;'>Usuário não encontrado!</p>";
    }
}
