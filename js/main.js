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
    posts.forEach((post, index) => {
        const randomZ = Math.random() * 800 - 400; // Zufällige Z-Position
        const randomX = Math.random() * window.innerWidth; // Werte zwischen 0 und Fensterbreite
        const randomY = Math.random() * containerHeight - containerHeight / 2; // Zufällige Y-Position
        const startY = Math.random() * -500; // Zufällige Start-Y-Position (oberhalb des Bildschirms)
    
        const scale = Math.max(0.8, Math.min(2.5, 1 - randomZ / 400)); // Skaliert nach Z
        const speedFactor = (400 - randomZ) / 400; // Geschwindigkeit abhängig von Tiefe
        const animationDuration = 10 + speedFactor * 30; // Dauer: 10s bis 40s
        const animationDelay = Math.random() * 5; // Zufällige Verzögerung (0 bis 5 Sekunden)
    
        post.style.transform = `translateZ(${randomZ}px) translateX(${randomX}px) translateY(${startY}px) scale(${scale})`;
        post.style.animation = `fall ${animationDuration}s linear infinite`;
        post.style.animationDelay = `${animationDelay}s`;
        post.style.zIndex = Math.round(400 - randomZ);
    
        console.log(`Post ${index + 1}: X=${randomX}, Y=${randomY}, Z=${randomZ}, Scale=${scale}, Duration=${animationDuration}, Delay=${animationDelay}`);
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

            const downloadLink = document.getElementById("modal-download");
            downloadLink.href = file; 
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