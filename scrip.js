
// Menú Hamburguesa
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu__items").classList.toggle("active");
});

// Cerrar el menú y hacer scroll al hacer clic en cualquier enlace
document.querySelectorAll(".menu__items a").forEach(item => {
    item.addEventListener("click", function(event) {
        const targetId = this.getAttribute("href");

        // Verificar que el href es un ID válido (evitar '#')
        if (targetId && targetId.startsWith("#") && targetId.length > 1) {
            event.preventDefault(); // Evita el comportamiento predeterminado

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }

        // Cerrar el menú hamburguesa después del clic
        document.querySelector(".menu__items").classList.remove("active");
    });
});




