  // Obtener el botón de notificación y el menú de notificaciones
  const notificationButton = document.getElementById('notificationButton');
  const notificationMenu = document.getElementById('notificationMenu');

  // Agregar el evento de clic al botón de notificación
  notificationButton.addEventListener('click', () => {
    // Alternar la visibilidad del menú de notificaciones
    notificationMenu.classList.toggle('hidden');
  });

  // Cerrar el menú de notificaciones si se hace clic fuera del área
  document.addEventListener('click', (e) => {
    if (!notificationButton.contains(e.target) && !notificationMenu.contains(e.target)) {
      notificationMenu.classList.add('hidden');
    }
  });