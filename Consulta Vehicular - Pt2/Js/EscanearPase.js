function abrirModalEscaner() {
    document.getElementById('modalEscaner').classList.remove('hidden');
    document.getElementById('modalEscaner').classList.add('flex');
}

function cerrarModalEscaner() {
    document.getElementById('modalEscaner').classList.remove('flex');
    document.getElementById('modalEscaner').classList.add('hidden');
}
