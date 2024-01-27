const Menu = document.getElementById("closeMenu");

function showMenu(){
    Menu.style.display = 'flex';
}
function closeMenu(){
    Menu.style.display = 'none';
}

var links = document.querySelectorAll('#closeMenu .closeNavlinks a');
links.forEach(function(link) {
    link.addEventListener('click', closeMenu);
});
