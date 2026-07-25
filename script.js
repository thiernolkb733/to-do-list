// ==================== TODO LIST - Version corrigée ====================

// Récupération des tâches depuis le localStorage ou tableau vide si rien n'existe
let taches = JSON.parse(localStorage.getItem("taches")) || [];

// Sélection des éléments du DOM
const inputTache = document.getElementById("tache");
const boutonAjouter = document.getElementById("ajouter");
const liste = document.getElementById("liste");

// ====================== FONCTION D'AFFICHAGE ======================
function afficherTaches() {
    // On vide la liste avant de la reconstruire (important !)
    liste.innerHTML = "";

    taches.forEach((tache, index) => {
        // Création d'un élément <li> pour chaque tâche
        const li = document.createElement("li");
        li.textContent = tache; // On met le texte de la tâche

        // Création du bouton Supprimer
        const boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer"; // Correction du typo "Suprrimer"

        // Ajout de l'écouteur sur le bouton supprimer
        boutonSupprimer.addEventListener("click", () => {
            // Suppression de la tâche du tableau
            taches.splice(index, 1);
            
            // Mise à jour du localStorage
            localStorage.setItem("taches", JSON.stringify(taches));
            
            // Rafraîchissement de l'affichage
            afficherTaches();
        });

        // Ajout du bouton dans le <li>, puis du <li> dans la liste
        li.appendChild(boutonSupprimer);
        liste.appendChild(li);
    });
}

// ====================== AJOUT D'UNE TÂCHE ======================
boutonAjouter.addEventListener("click", () => {
    // Vérification que l'input n'est pas vide ou rempli d'espaces
    if (inputTache.value.trim() === "") {
        return; // On sort de la fonction sans rien faire
    }

    // Ajout de la nouvelle tâche dans le tableau
    taches.push(inputTache.value);

    // Sauvegarde dans le localStorage
    localStorage.setItem("taches", JSON.stringify(taches));

    // Réinitialisation du champ de saisie
    inputTache.value = "";

    // On rafraîchit l'affichage complet (meilleure pratique)
    afficherTaches();

    console.log(taches); // Pour le débogage
});

// ====================== INITIALISATION ======================
// Affichage des tâches au chargement de la page
afficherTaches();