/* =========================
   WASTE DATA
========================= */

const wasteItems = [

    { icon: "🍌", type: "wet" },
    { icon: "🍎", type: "wet" },
    { icon: "🥦", type: "wet" },
    { icon: "🍕", type: "wet" },

    { icon: "📄", type: "dry" },
    { icon: "📦", type: "dry" },
    { icon: "📰", type: "dry" },
    { icon: "🥤", type: "dry" },

    { icon: "🔋", type: "ewaste" },
    { icon: "📱", type: "ewaste" },
    { icon: "💻", type: "ewaste" },
    { icon: "⌨️", type: "ewaste" },

    { icon: "🩸", type: "sanitary" },
    { icon: "🧻", type: "sanitary" },
    { icon: "🧴", type: "sanitary" }

];

/* =========================
   GAME VARIABLES
========================= */

let currentIndex = 0;
let score = 0;

/* =========================
   START GAME
========================= */

function startGame() {

    document
        .getElementById("startScreen")
        .style.display = "none";

    document
        .getElementById("hud")
        .classList.remove("hidden");

    document
        .getElementById("gameWrapper")
        .classList.remove("hidden");

    loadWaste();

    updateScore();
}

/* =========================
   LOAD WASTE
========================= */

function loadWaste() {

    const wasteElement =
        document.getElementById("wasteItem");

    if (currentIndex >= wasteItems.length) {

        endGame();

        return;
    }

    wasteElement.innerText =
        wasteItems[currentIndex].icon;
}

/* =========================
   CHECK ANSWER
========================= */

function checkAnswer(selectedType) {

    const currentWaste =
        wasteItems[currentIndex];

    const message =
        document.getElementById("message");

    /* CORRECT */
    if (selectedType === currentWaste.type) {

        score++;

        message.innerHTML = "✔ CORRECT";

        message.style.color = "#00ff99";

        glowEffect("correct");

    }

    /* WRONG */
    else {

        message.innerHTML = "❌ WRONG";

        message.style.color = "#ff4d6d";

        glowEffect("wrong");
    }

    updateScore();

    currentIndex++;

    setTimeout(() => {

        message.innerHTML = "";

        loadWaste();

    }, 900);
}

/* =========================
   UPDATE SCORE
========================= */

function updateScore() {

    document.getElementById("score")
        .innerText = score;
}

/* =========================
   END GAME
========================= */

function endGame() {

    document.getElementById("gameWrapper")
        .innerHTML = `

        <div class="end-screen">

            <h1>🎉 MISSION COMPLETE</h1>

            <h2>
                FINAL SCORE:
                ${score}/${wasteItems.length}
            </h2>

            <button onclick="restartGame()">
                PLAY AGAIN
            </button>

        </div>
    `;
}

/* =========================
   RESTART GAME
========================= */

function restartGame() {

    location.reload();
}

/* =========================
   GLOW EFFECT
========================= */

function glowEffect(type) {

    const body = document.body;

    if (type === "correct") {

        body.style.boxShadow =
            "inset 0 0 120px rgba(0,255,120,0.25)";

    }

    else {

        body.style.boxShadow =
            "inset 0 0 120px rgba(255,0,80,0.25)";
    }

    setTimeout(() => {

        body.style.boxShadow = "none";

    }, 400);
}