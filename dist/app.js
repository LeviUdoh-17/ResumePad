// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementById('menuToggle');
//     const closeSidebar = document.getElementById('closeSidebar');
//     const sidebar = document.getElementById('sidebar');
//     const overlay = document.getElementById('overlay');

//     function openSidebar() {
//         sidebar.classList.remove('-translate-x-full');
//         overlay.classList.remove('hidden');
//     }

//     function closeSidebar() {
//         sidebar.classList.add('-translate-x-full');
//         overlay.classList.add('hidden');
//     }

//     menuToggle.addEventListener('click', openSidebar);
//     closeSidebar.addEventListener('click', closeSidebar);
//     overlay.addEventListener('click', closeSidebar);
// });
const root = document.documentElement;
function incrementX() {
  const currentValue = parseFloat(getComputedStyle(root).getPropertyValue('--x').trim()) || 0; // Default to 0 if NaN
  let newValue = currentValue + 20;
  
  if (newValue > 100) {
    newValue = -99;
  }
  root.style.setProperty('--x', `${newValue}%`);
  console.log(`--x changed to ${newValue}%`);
}
setInterval(incrementX, 1000);

