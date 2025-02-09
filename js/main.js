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
        const scale = Math.max(0.8, Math.min(4, 2 - randomZ / 50)); // Skaliert nach Z
        const speedFactor = (400 + randomZ) / 400; // Geschwindigkeit abhängig von Tiefe
        const animationDuration = 10 + speedFactor * 30; // Dauer: 10s bis 40s
        const animationDelay = Math.random() * 3; // Zufällige Verzögerung (0 bis 5 Sekunden)
        post.style.left = `${randomLeft}px`;
        post.style.top = `${randomTop}px`;
        post.style.transform = `translateZ(${randomZ}px) translateX(${randomX}px) translateY(${startY}px)`;
        post.style.scale = `${scale}`;
        post.style.animation = `fall ${animationDuration}s linear infinite`;
        post.style.animation = `rotate ${animationDuration}s linear infinte`;
        post.style.animationDelay = `${animationDelay}s`;
        post.style.zIndex = Math.round(400 - randomZ);

        //jquery test
        $(document).ready(function(){
        $(".details1 summary").css({
            'animation-duration': '20s'
        });
            
        
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
        const postWidth = 350; // Feste Breite für zentrierte Posts
        const postHeight = post.offsetHeight; // Dynamische Höhe je nach Inhalt
        const centerX = (viewportWidth - postWidth) / 2;
        const centerY = scrollY + (viewportHeight - postHeight) / 2;

        // **Fixierte Position setzen**
        post.style.position = "absolute"; // Wichtig: Absolute Positionierung aktivieren
        post.style.width = `${postWidth}px`;
        post.style.height = "auto"; // Höhe je nach Inhalt
        post.style.top = `${centerY}px`;
        post.style.left = `${centerX}px`;

        // **Animation & Skalierung deaktivieren**
        post.style.scale = "1";
        post.style.animation = "none";
        post.style.transform = "none";
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