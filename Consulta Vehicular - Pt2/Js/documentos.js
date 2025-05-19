let idAlumnoActual = null;

function abrirModalDocumentos(id) {
    idAlumnoActual = id;
    document.getElementById('modalDocumentos').classList.remove('hidden');
}

function cerrarModalDocumentos() {
    document.getElementById('modalDocumentos').classList.add('hidden');
    limpiarCamposDocumentos();
}

function limpiarCamposDocumentos() {
    document.getElementById('dniInput').value = '';
    document.getElementById('licenciaInput').value = '';
    document.getElementById('tarjetaInput').value = '';
    document.getElementById('soatInput').value = '';
}

function guardarDocumentos() {
    const dni = document.getElementById('dniInput').files.length > 0;
    const licencia = document.getElementById('licenciaInput').files.length > 0;
    const tarjeta = document.getElementById('tarjetaInput').files.length > 0;
    const soat = document.getElementById('soatInput').files.length > 0;

    if (dni && licencia && tarjeta && soat) {
        const fila = document.querySelector(`tr[data-id="${idAlumnoActual}"]`);
        const estadoSpan = fila.querySelector('.estado');

        estadoSpan.classList.remove('bg-red-200', 'text-red-800');
        estadoSpan.classList.add('bg-blue-200', 'text-blue-800');
        estadoSpan.textContent = 'Al día';

        estadoSpan.classList.add('animate-ping-fast');
        setTimeout(() => estadoSpan.classList.remove('animate-ping-fast'), 500);

        alert('Documentos subidos correctamente.');
    } else {
        alert('Por favor sube todos los documentos.');
        return;
    }

    cerrarModalDocumentos();
}

