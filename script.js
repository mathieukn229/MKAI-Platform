let userName = "";
function sendMessage() {

    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    const userMessage = input.value.trim();

    if (userMessage === "") {
        return;
    }
        messages.innerHTML += `
        <p class="bot">
            ${response}
        </p>
        `;

    }, 1500);

}


function startService(service) {

    const input = document.getElementById("userInput");

    if (service === "business") {
        input.value = "Aide-moi à trouver une idée de business";
    }

    else if (service === "contenu") {
        input.value = "Aide-moi à créer du contenu";
    }

    else if (service === "ia") {
        input.value = "Apprends-moi l'intelligence artificielle";
    }

    else if (service === "projet") {
        input.value = "Aide-moi à développer mon projet";
    }

    sendMessage();

}
    
