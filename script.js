function showSidebar() {
    const sidebar = document.querySelector('.navbar-mobile');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.navbar-mobile');
    sidebar.style.display = 'none';
}

// animation on scroll

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);