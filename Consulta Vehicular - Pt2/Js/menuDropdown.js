const userMenuButton = document.getElementById('userMenuButton');
const userDropdown = document.getElementById('userDropdown');

userMenuButton.addEventListener('click', () => {
  userDropdown.classList.toggle('hidden');
});

// Cierra el dropdown si se hace clic fuera
document.addEventListener('click', (event) => {
  if (!userMenuButton.contains(event.target) && !userDropdown.contains(event.target)) {
    userDropdown.classList.add('hidden');
  }
})