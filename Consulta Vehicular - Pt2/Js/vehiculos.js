// Variables
let vehiculos = [];
const tablaVehiculos = document.getElementById('tablaVehiculos');
const modalVehiculo = document.getElementById('modalVehiculo');

// Función para abrir el modal
function abrirModal() {
    modalVehiculo.classList.remove('hidden');
}

// Función para cerrar el modal
function cerrarModal() {
    modalVehiculo.classList.add('hidden');
}

// Función para guardar un nuevo vehículo
function guardarVehiculo() {
    const placa = document.getElementById('placaInput').value;
    const tipo = document.getElementById('tipoInput').value;
    const marca = document.getElementById('marcaInput').value;
    
    if (placa && tipo && marca) {
        const nuevoVehiculo = {
            placa,
            tipo,
            marca
        };
        vehiculos.push(nuevoVehiculo);
        mostrarVehiculos();
        cerrarModal();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

// Función para mostrar los vehículos en la tabla
function mostrarVehiculos() {
    tablaVehiculos.innerHTML = '';
    vehiculos.forEach(vehiculo => {
        const fila = document.createElement('tr');
        fila.classList.add('hover:bg-gray-50');
        
        fila.innerHTML = `
            <td class="px-6 py-3">${vehiculo.placa}</td>
            <td class="px-6 py-3">${vehiculo.tipo}</td>
            <td class="px-6 py-3">${vehiculo.marca}</td>
            <td class="px-6 py-3">
                <button class="text-blue-600 hover:text-blue-800">Editar</button>
                <button class="text-red-600 hover:text-red-800">Eliminar</button>
            </td>
        `;
        
        tablaVehiculos.appendChild(fila);
    });
}

// Función para filtrar vehículos por placa
function filtrarVehiculos() {
    const busqueda = document.getElementById('busquedaVehiculo').value.toLowerCase();
    const vehiculosFiltrados = vehiculos.filter(vehiculo => vehiculo.placa.toLowerCase().includes(busqueda));
    
    // Mostrar los vehículos filtrados
    tablaVehiculos.innerHTML = '';
    vehiculosFiltrados.forEach(vehiculo => {
        const fila = document.createElement('tr');
        fila.classList.add('hover:bg-gray-50');
        
        fila.innerHTML = `
            <td class="px-6 py-3">${vehiculo.placa}</td>
            <td class="px-6 py-3">${vehiculo.tipo}</td>
            <td class="px-6 py-3">${vehiculo.marca}</td>
            <td class="px-6 py-3">
                <button class="text-blue-600 hover:text-blue-800">Editar</button>
                <button class="text-red-600 hover:text-red-800">Eliminar</button>
            </td>
        `;
        
        tablaVehiculos.appendChild(fila);
    });
}
