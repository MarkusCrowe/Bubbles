const counterDisplay = document.querySelector("h3");
let counter = 0;

// Creation et parametrage d'une bulle
const bubbleMaker = () => {
    // On creer une bulle
    const bubble = document.createElement("span");

    // On donne la class .bubble a la bulle
    bubble.classList.add("bubble");

    // On injecte la bulles dans le code
    document.body.appendChild(bubble);

    // On creer une taille aléatoire pour la bulle compris entre 100 et 300
    const size = Math.random() * 200 + 100 + "px";

    // On attribut la taille aléatoire à la bulle
    bubble.style.height = size;
    bubble.style.width = size;

    // On attribut une position aléatoire à la bulle
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    // On creer un mouvement de deportation
    const plusMinus = Math.random() > 0.5 ? 1 : -1; // Permet d'alerner les valeur positive et négative
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    // on compte le nombre de bulle detruite avant de l'afficher
    bubble.addEventListener("click", () => {
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    })

    // Au bout de 8s la bulle se detruit
    setTimeout(() => {
        bubble.remove();
    }, 8000);
};

// On lance la creation d'une bulle tous les 3 dixèmes de seconde
setInterval(bubbleMaker, 300);


