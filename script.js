function iniciarPagina() {
    window.location.href = "index.html"; // abre a home
}

function abrirPagina(pagina) {
    window.location.href = pagina;
}

let online = false;
function toggleStatus() {
    const status = document.getElementById("serverStatus");
    online = !online;
    if (online) {
        status.textContent = "🟢 ONLINE";
        status.className = "online";
    } else {
        status.textContent = "🔴 OFFLINE";
        status.className = "offline";
    }
}

function copiarIP() {
    navigator.clipboard.writeText("jogar.meuservidor.com");
    alert("IP copiado!");
}
