let userName = "";

async function sendMessage() {

    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    const userMessage = input.value.trim();

    if (userMessage === "") return;

    // Afficher le message de l'utilisateur
    messages.innerHTML += `
        <p class="user">
            👤 ${userMessage}
        </p>
    `;

    messages.scrollTop = messages.scrollHeight;
    input.value = "";

    // Message d'attente
    const thinking = document.createElement("p");
    thinking.className = "bot";
    thinking.innerHTML = "🤖 MKAI réfléchit...";
    messages.appendChild(thinking);

    messages.scrollTop = messages.scrollHeight;

    try {

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: userMessage,
                userName: userName
            })
        });

        const data = await response.json();

        thinking.remove();

        if (data.reply) {

            if (
                userMessage.toLowerCase().startsWith("je m'appelle")
            ) {

                userName = userMessage
                    .replace(/je m'appelle/i, "")
                    .trim();

            }

            messages.innerHTML += `
                <p class="bot">
                    🤖 ${data.reply}
                </p>
            `;

        } else {

            messages.innerHTML += `
                <p class="bot">
                    ❌ Aucune réponse reçue.
                </p>
            `;

        }

    } catch (error) {

        thinking.remove();

        messages.innerHTML += `
            <p class="bot">
                ❌ Erreur de connexion avec MKAI.
            </p>
        `;

        console.error(error);

    }

    messages.scrollTop = messages.scrollHeight;

}


// Boutons des services

function startService(service) {

    const input = document.getElementById("userInput");

    switch (service) {

        case "business":
            input.value = "Aide-moi à trouver une idée de business";
            break;

        case "contenu":
            input.value = "Aide-moi à créer du contenu";
            break;

        case "ia":
            input.value = "Apprends-moi l'intelligence artificielle";
            break;

        case "projet":
            input.value = "Aide-moi à développer mon projet";
            break;

        default:
            input.value = "";
    }

    sendMessage();

}


// Envoyer avec Entrée

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("userInput");

    if (input) {

        input.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {

                event.preventDefault();
                sendMessage();

            }

        });

    }

}); 
