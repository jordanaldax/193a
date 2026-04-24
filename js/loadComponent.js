function loadComponent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => { 
            document.getElementById(elementId).innerHTML = data; 
        });
}

loadComponent("menu.html", "menu-placeholder");