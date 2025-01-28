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
        const randomZ = Math.random() * 800 - 400; // Zufällige Z-Position
        const randomX = Math.random() * window.innerWidth; // Werte zwischen 0 und Fensterbreite
        const randomY = Math.random() * containerHeight - containerHeight / 2; // Zufällige Y-Position
        const startY = Math.random() * -500; // Zufällige Start-Y-Position (oberhalb des Bildschirms)
        const scale = Math.max(0.6, Math.min(2.5, 1 - randomZ / 400)); // Skaliert nach Z
        const speedFactor = (400 + randomZ) / 400; // Geschwindigkeit abhängig von Tiefe
        const animationDuration = 10 + speedFactor * 30; // Dauer: 10s bis 40s
        const animationDelay = Math.random() * 6; // Zufällige Verzögerung (0 bis 5 Sekunden)
        post.style.left = `${randomLeft}px`;
        post.style.top = `${randomTop}px`;
        post.style.transform = `translateZ(${randomZ}px) translateX(${randomX}px) translateY(${startY}px)`;
        post.style.scale = `${scale}`;
        post.style.animation = `fall ${animationDuration}s linear infinite`;
        post.style.animationDelay = `${animationDelay}s`;
        post.style.zIndex = Math.round(400 - randomZ);

         // Event-Listener: Animation für ausgeklappte Inhalte stoppen
         post.addEventListener("click", () => {
            if (post.classList.contains("expanded")) {
                // Animation zurücksetzen (wenn bereits ausgeklappt)
                post.classList.remove("expanded");
                post.style.animation = `fall ${animationDuration}s linear infinite`; // Animation wieder aktivieren
            } else {
                // Animation stoppen (beim Ausklappen)
                post.classList.add("expanded");
                post.style.animation = "none"; // Animation anhalten
                post.style.transform = "none"; // Transformation zurücksetzen, wenn gewünscht
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