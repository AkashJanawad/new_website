function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

loadComponent("navbar", "components/navbar.html");
loadComponent("team", "components/team.html");
loadComponent("projects", "components/projects.html");
loadComponent("footer", "components/footer.html");
