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
        const randomZ = Math.random() * 1000 - 400; // Zufällige Z-Position
        const randomX = Math.random() * window.innerWidth; // Werte zwischen 0 und Fensterbreite
        const randomY = Math.random() * containerHeight - containerHeight / 2; // Zufällige Y-Position
        const startY = Math.random() * -500; // Zufällige Start-Y-Position (oberhalb des Bildschirms)
        const scale = Math.max(0.4, Math.min(4, 2 - randomZ / 600)); // Skaliert nach Z
        const speedFactor = (400 + randomZ) / 400; // Geschwindigkeit abhängig von Tiefe
        const animationDuration = 30 + speedFactor * 60; // Dauer: 10s bis 40s
        const animationDelay = Math.random() * 3; // Zufällige Verzögerung (0 bis 5 Sekunden)
        post.style.left = `${randomLeft}px`;
        post.style.top = `${randomTop}px`;
        post.style.transform = `translateZ(${randomZ}px) translateX(${randomX}px) translateY(${startY}px)`;
        post.style.scale = `${scale}`;
        post.style.animation = `fall ${animationDuration}s linear infinite`;
        post.style.animation = `rotate ${animationDuration}s linear infinte`;
        post.style.animationDelay = `${animationDelay}s`;
        post.style.zIndex = Math.round(400 - randomZ);

$(document).ready(function(){
    $(".details1 summary img").each(function(index){
        let animationName = "rotateRandom" + index; // Einzigartiger Name für jede Animation

        let keyframes = `
            @keyframes ${animationName} {
                0% { transform: translateZ(0px) rotateX(0deg) rotateY(0deg); }
                50% { transform: translateZ(${randomRange(10, 50)}px) rotateX(${randomRange(150, 300)}deg) rotateY(${randomRange(100, 200)}deg); }
                100% { transform: translateZ(${randomRange(40, 210)}px) rotateX(360deg) rotateY(-360deg); }
            }
        `;

        // Füge das generierte CSS zur Seite hinzu
        $("head").append(`<style>${keyframes}</style>`);

        let duration = randomRange(15, 25); // Zufällige Dauer zwischen 15s und 25s
        let delay = randomRange(0, 5); // Zufällige Verzögerung bis 5s
        let speedFactor = (400 + randomZ) / 400;

        $(this).css({
            'animation-name': animationName,
            'animation-duration': duration + 's',
            'animation-delay': delay + 's',
            'animation-timing-function': 'linear',
            'animation-iteration-count': 'infinite'
        });
    });

    // Funktion für eine Zufallszahl im Bereich min - max
    function randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }
});
    

        document.querySelectorAll(".details1").forEach(details => {
            details.addEventListener("toggle", function () {
                const post = this.closest(".post");
    
                if (this.open) {
                   // **Viewport-Dimensionen holen**
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const scrollY = window.scrollY; // Aktuelle Scroll-Position

        // **Berechnung für Mitte**
        const postWidth = post.offsetWidth; // Feste Breite für zentrierte Posts
        const postHeight = 200; // Dynamische Höhe je nach Inhalt
        const centerX = (viewportWidth - postWidth) / 2;
        const centerY = scrollY + (viewportHeight - postHeight) / 2;

        // **Verschiebung nach links hinzufügen**
        const offsetX = viewportWidth * 0.4; // % der Viewport-Breite
        const adjustedX = centerX - offsetX;
        // **Verschiebung nach oben hinzufügen**
        const offsetY = viewportHeight * 0.8; // % der Viewport-Höhe (20% nach oben)
        const adjustedY = centerY - offsetY;

        // **Fixierte Position setzen**
        post.style.position = "absolute"; // Wichtig: Absolute Positionierung aktivieren
        post.style.width = `${postWidth}px`;
        post.style.height = "auto"; // Höhe je nach Inhalt
        post.style.top = `${centerY}px`;
        post.style.left = `${centerX}px`;
        post.style.left = `${adjustedX}px`; // Geänderte X-Position
        post.style.top = `${adjustedY}px`;

        // **Animation & Skalierung deaktivieren**
        post.style.scale = "1";
        post.style.animation = "none";
        post.style.transform = "none";
        post.style.zIndex = "none";
    } else {
        // **Animation und Größe zurücksetzen**
        post.style.animation = "";
        post.style.transform = "";
        post.style.width = "";
        post.style.height = "";
        post.style.position = "";
    }
            });
        });
    });
    document.addEventListener("click", function(event) {
        document.querySelectorAll(".details1").forEach(details => {
            // Falls das <details> geöffnet ist und der Klick NICHT innerhalb des <details> war:
            if (details.open && !details.contains(event.target)) {
                details.removeAttribute("open"); // Schließt das <details>
            }
        });
    });
    const masks = [
        "Maske_02.png",
        "Maske_03.png",
        "Maske_04.png",
        "Maske_05.png",
        "Maske_06.png",
        "Maske_07.png",
        "Maske_08.png",
        "Maske_09.png",
        "Maske_10.png",
        "Maske_11.png",
        "Maske_12.png",
        "Maske_13.png",
        "Maske_14.png",
        "Maske_15.png",
        "Maske_16.png",
        "Maske_17.png",
        "Maske_18.png",
        "Maske_19.png",
        "Maske_20.png",
      ];
    
      // Pfad zu den Masken (falls in einem Unterordner wie /masks/)
      const maskPath = "/masks/";
    
      // Wähle alle Bilder mit der Klasse "masked-image"
      const images = document.querySelectorAll(".masked-image");
    
      // Wende zufällige Masken auf jedes Bild an
      images.forEach((image) => {
        // Wähle eine zufällige Maske aus
        const randomMask = masks[Math.floor(Math.random() * masks.length)];
    
        // Setze die Maske auf das Bild
        image.style.maskImage = `url('${maskPath}${randomMask}')`;
        image.style.webkitMaskImage = `url('${maskPath}${randomMask}')`;
    
        // Optional: Stelle sicher, dass die Maske korrekt gestylt ist
        image.style.maskSize = "cover";
        image.style.webkitMaskSize = "cover";
        image.style.maskRepeat = "no-repeat";
        image.style.webkitMaskRepeat = "no-repeat";
        image.style.maskPosition = "center";
        image.style.webkitMaskPosition = "center";
      });


});