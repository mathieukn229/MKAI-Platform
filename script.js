let userName = "";

function sendMessage() {

    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    const userMessage = input.value.trim();

    if (userMessage === "") {
        return;
    }

    // Message utilisateur
    messages.innerHTML += `
        <p class="user">
            👤 ${userMessage}
        </p>
    `;

    messages.scrollTop = messages.scrollHeight;

    input.value = "";

    // Animation "MKAI réfléchit..."
    const thinking = document.createElement("p");
    thinking.className = "bot";
    thinking.innerHTML = "🤖 MKAI réfléchit...";
    messages.appendChild(thinking);

    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {

        thinking.remove();

        let response = "🤖 Je suis MKAI. Je peux t'aider avec le business, l'IA, la création de contenu et tes projets.";

        const message = userMessage.toLowerCase();

        if (message.includes("je m'appelle")) {

            userName = userMessage
                .replace(/je m'appelle/i, "")
                .trim();

            response = "🤖 Enchanté " + userName + " ! Je m'en souviendrai pendant cette discussion.";

        }

        else if (message.includes("bonjour") || message.includes("salut")) {

            if (userName !== "") {
                response = "🤖 Bonjour " + userName + " ! Heureux de te revoir sur MKAI 🚀";
            } else {
                response = "🤖 Bonjour ! Bienvenue sur MKAI Platform 🚀";
            }

        }

        else if (message.includes("business")) {

            response = "🤖 Je peux t'aider à trouver une idée de business, créer un produit digital et élaborer une stratégie de vente.";

        }

        else if (message.includes("ia") || message.includes("intelligence artificielle")) {

            response = "🤖 L'intelligence artificielle permet d'automatiser des tâches, créer du contenu et développer des projets plus rapidement.";

        }

        else if (
            message.includes("contenu") ||
            message.includes("facebook") ||
            message.includes("tiktok")
        ) {

            response = "🤖 Je peux créer des publications Facebook, des scripts TikTok, des légendes et des idées de contenu.";

        }

        else if (message.includes("projet")) {

            response = "🤖 Décris ton projet et je vais t'aider à le développer étape par étape.";

        }

        messages.innerHTML += `
            <p class="bot">
                ${response}
            </p>
        `;

        messages.scrollTop = messages.scrollHeight;

    }, 1500);

}


// Boutons des services
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


// Envoyer avec la touche Entrée
document.getElementById("userInput").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});
