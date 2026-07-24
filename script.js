const inputTache = document.getElementById("tache");

const boutonAjouter = document.getElementById("ajouter");

const liste = document.getElementById("liste");


boutonAjouter.addEventListener("click", () => {


    if(inputTache.value.trim() === ""){
        return;
    }

    const li = document.createElement("li");
    li.textContent = inputTache.value;
    liste.appendChild(li)
    inputTache.value = "";
});

