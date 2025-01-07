document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".grid");
    const posts = document.querySelectorAll(".post");

    // Breite und Höhe des Containers überprüfen
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    if (containerWidth === 0 || containerHeight === 0) {
        console.error("Der .grid-Container hat keine sichtbare Größe.");
        return;
    }

    posts.forEach(post => {
        const randomLeft = Math.random() * (containerWidth - 150); // Abzug für Post-Breite
        const randomTop = Math.random() * (containerHeight - 200); // Abzug für Post-Höhe
        post.style.left = `${randomLeft}px`;
        post.style.top = `${randomTop}px`;
    });
    posts.forEach(post => {
        // Zufällige Positionen und Tiefe generieren
        const randomZ = Math.random() * 800 - 400; // Werte zwischen -400px und 400px
        const randomX = Math.random() * window.innerWidth - window.innerWidth / 2;
        const randomY = Math.random() * containerHeight - containerHeight / 2;

        // Skalierung basierend auf Z-Position
        const scale = 1 + (400 - randomZ) / 6000;
        const clampedScale = Math.min(Math.max(scale, 0.8), 1.2);

        // Geschwindigkeit basierend auf der Z-Position
        const speed = 2 + (400 - randomZ) / 100; // Schnellere Geschwindigkeit für vordere Posts
        const animationDuration = Math.max(20, 40 - speed); // Dauer zwischen 2s (schnell) und 10s (langsam)

        // Initiale Position und Animation anwenden
        post.style.transform = `translateZ(${randomZ}px) translateX(${randomX}px) translateY(${randomY}px) scale(${clampedScale})`;
        post.style.animation = `fall ${animationDuration}s linear infinite`;
    });
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".modal-overlay");
    const postLinks = document.querySelectorAll(".open-post");
    modal.style.display = "none";
    
    postLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            // Extrahiere Daten aus den `data-*` Attributen
            const title = link.getAttribute("data-title");
            const description = link.getAttribute("data-description");
            const image = link.getAttribute("data-image");

            // Setze die Modal-Daten
            document.getElementById("modal-title").textContent = title;
            document.getElementById("modal-description").textContent = description;
            document.getElementById("modal-image").src = image;

            // Zeige das Modal an
            modal.style.display = "flex";
            overlay.style.display = "block";
        });
    });

    overlay.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    window.addEventListener("resize", () => {
        if (modal.style.display === "block") {
            modal.style.top = "50%";
            modal.style.left = "50%";
            modal.style.transform = "translate(-50%, -50%)";
        }
    });


});