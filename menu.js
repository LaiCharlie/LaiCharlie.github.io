var menuIsVisible = false;

function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('menu-icon');

    if (menuIsVisible) {
        menu.style.left = '-250px';
        menuIcon.style.transform = 'rotate(0deg)';
    } else {
        menu.style.left = '0px';
        menuIcon.style.transform = 'rotate(90deg)';
    }

    menuIsVisible = !menuIsVisible;
}
