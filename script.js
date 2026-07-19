let userName = "";

function sendMessage() {

    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    const userMessage = input.value.trim();

    if (userMessage === "") {
        return;
    }

    messages.innerHTML += `
        <p class="user">
            👤 ${userMessage}
        </p>
    `;

    input.value = "";

    let thinking = document.createElement("p");
    thinking.className = "bot";
    thinking.innerHTML = "🤖 MKAI réfléchit...";
    messages.appendChild(thinking);


    setTimeout(() => {

        thinking.remove();

        let response = "🤖 Je suis MKAI. Je peux t'aider avec le business, l'IA, le contenu et tes projets 🚀";

        let message = userMessage.toLowerCase();


        if (message.includes("je m'appelle")) {

            userName = userMessage
            .replace("je m'appelle", "")
            .trim();

            response = "🤖 Enchanté " + userName + " ! Je vais m'en souvenir pendant cette discussion.";

        }

        else if (message.includes("bonjour") || message.includes("salut")) {

            response = userName 
            ? "🤖 Bonjour " + userName + " ! Ravi de te revoir sur MKAI 🚀"
            : "🤖 Bonjour ! Bienvenue sur MKAI Platform 🚀";

        }

        else if (message.includes("business")) {

            response = "🤖 Je peux t'aider à trouver des idées de business, créer des produits digitaux et construire une stratégie.";

        }

        else if (message.includes("ia") || message.includes("intelligence artificielle")) {

            response = "🤖 L'intelligence artificielle aide à créer, automatiser et apprendre plus rapidement.";

        }

        else if (message.includes("contenu") || message.includes("facebook") || message.includes("tiktok")) {

            response = "🤖 Je peux t'aider à créer des posts, scripts vidéos et idées de contenu.";

        }

        else if (message.includes("projet")) {

            response = "🤖 Décris ton projet et je vais t'aider à construire un plan étape par étape.";

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
