function goHome() {
    document.body.innerHTML = `
        <h1>Welcome to The Lost Temple 🏛️</h1>
        <p>Your adventure begins here...</p>
        <button onclick="startGame()">🌿 Start Adventure</button>
    `;
}
function startGame() {
    document.body.innerHTML = `
        <div id="game">
            <h1>🌿 Level 1 - Jungle Entry</h1>
            <p>You enter a dark jungle. Suddenly you see two paths...</p>
            <button onclick="choosePath('left')">⬅️ Go Left</button>
            <button onclick="choosePath('right')">➡️ Go Right</button>
            <button id="back-btn" onclick="goHome()">⬅️ </button>
        </div>
    `;
}

function choosePath(direction) {
    if (direction === 'left') {
        document.body.innerHTML = `
            <div id="game">
                <h1>🐍 Danger!</h1>
                <p>A snake blocks your path! You find a stick nearby...</p>
                <button onclick="useStick()">🪵 Use Stick</button>
                <button onclick="runBack()">🏃 Run Back</button>
                <button id="back-btn" onclick="startGame()">⬅️ </button>
            </div>
        `;
    } else {
    document.body.innerHTML = `
        <div id="game">
            <h1>🌸 Right Path!</h1>
            <p>You found something...</p>
            <div id="key-icon">🗝</div>
                <h2>🔑 ANCIENT MAP KEY FOUND!</h2>
                <p style="color:white;">This key will unlock the temple door...</p>
                <button onclick="level2()">✅ Take the Key</button>
            </div>
            <button id="back-btn" onclick="startGame()">⬅️ </button>
        </div>
    `;
}
}
function useStick() {
    document.body.innerHTML = `
        <div id="game">
            <h1>💪 Brave Move!</h1>
            <p>You used the stick to scare the snake away! Path is clear...</p>
            <div id="item-popup">
                <div id="key-icon">🗺️</div>
                <h2>✨ MAP FRAGMENT FOUND!</h2>
                <p style="color:white;">A torn map piece hidden behind the snake's rock...</p>
                <button onclick="level2()">✅ Pick it up</button>
            </div>
            <button id="back-btn" onclick="choosePath('left')">⬅️ </button>
        </div>
    `;
}

function runBack() {
    document.body.innerHTML = `
        <div id="game">
            <h1>🏃 You ran back!</h1>
            <p>You escaped the snake but lost your way... Try the other path!</p>
            <button onclick="startGame()">🔄 Try Again</button>
            <button id="back-btn" onclick="choosePath('left')">⬅️ </button>
        </div>
    `;
}
function level2() {
    document.body.innerHTML = `
        <div id="game">
            <h1>🌊 Level 2 - River Crossing</h1>
            <p>You reach a wide river... A old bridge and a rope are nearby.</p>
            <button onclick="chooseBridge()">🌉 Cross the Bridge</button>
            <button onclick="chooseRope()">🪢 Use the Rope</button>
            <button id="back-btn" onclick="startGame()">⬅️ </button>
        </div>
    `;
}
function chooseBridge() {
    document.body.innerHTML = `
        <div id="game">
            <h1>💥 Bridge Collapsed!</h1>
            <p>The old bridge breaks under your weight! You fall but grab a rock...</p>
            <button onclick="level2()">🔄 Try Again</button>
            <button id="back-btn" onclick="level2()">⬅️ </button>
        </div>
    `;
}

function chooseRope() {
    document.body.innerHTML = `
        <div id="game">
            <h1>💪 Smart Move!</h1>
            <p>You swung across safely!</p>
            <div id="item-popup">
                <div id="key-icon">🪨</div>
                <h2>✨ ANCIENT STONE FOUND!</h2>
                <p style="color:white;">An inscribed stone with temple directions...</p>
                <button onclick="level3()">✅ Take the Stone</button>
            </div>
            <button id="back-btn" onclick="level2()">⬅️ </button>
        </div>
    `;
}
function level3() {
    document.body.innerHTML = `
        <div id="game">
            <h1>🔥 Level 3 - Fire Cave</h1>
            <p>You enter a dark cave... Flames block your path! You see water and a shield nearby.</p>
            <button onclick="useWater()">💧 Use Water</button>
            <button onclick="useShield()">🛡️ Use Shield</button>
            <button id="back-btn" onclick="level2()">⬅️</button>
        </div>
    `;
}
function useWater() {
    document.body.innerHTML = `
        <div id="game">
            <h1>💧 Smart Choice!</h1>
            <p>Water doused the flames! Path is clear...</p>
            <div id="item-popup">
                <div id="key-icon">🔮</div>
                <h2>✨ CRYSTAL ORB FOUND!</h2>
                <p style="color:white;">A glowing orb with ancient symbols...</p>
                <button onclick="level4()">✅ Take the Orb</button>
            </div>
            <button id="back-btn" onclick="level3()">⬅️ </button>
        </div>
    `;
}

function useShield() {
    document.body.innerHTML = `
        <div id="game">
            <h1>🔥 Shield Melted!</h1>
            <p>The flames were too strong! Shield melted away... Try again!</p>
            <button onclick="level3()">🔄 Try Again</button>
            <button id="back-btn" onclick="level3()">⬅️ </button>
        </div>
    `;
}
function level4() {
    document.body.innerHTML = `
        <div id="game">
            <h1>🧩 Level 4 - Ancient Door</h1>
            <p>An ancient door blocks your path! Three symbols are carved on it... Only one opens the door.</p>
            <p style="color:gold;">🌙 The answer lies in the sky at night...</p>
            <button onclick="chooseSymbol('sun')">☀️ Sun</button>
            <button onclick="chooseSymbol('moon')">🌙 Moon</button>
            <button onclick="chooseSymbol('star')">⭐ Star</button>
            <button id="back-btn" onclick="level3()">⬅️ </button>
        </div>
    `;
}

function chooseSymbol(symbol) {
    if (symbol === 'moon') {
        document.body.innerHTML = `
            <div id="game">
                <h1>🎉 Correct Symbol!</h1>
                <p>The door slowly opens...</p>
                <div id="item-popup">
                    <div id="key-icon">️🔐</div>
                    <h2>✨ TEMPLE KEY FOUND!</h2>
                    <p style="color:white;">The final key to unlock The Lost Temple!</p>
                    <button onclick="level5()">✅ Enter the Temple</button>
                </div>
                <button id="back-btn" onclick="level4()">⬅️ </button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div id="game">
                <h1>💥 Wrong Symbol!</h1>
                <p>A trap activates! Arrows fly past you... You barely escape!</p>
                <button onclick="level4()">🔄 Try Again</button>
                <button id="back-btn" onclick="level4()">⬅️ </button>
            </div>
        `;
    }
}
function level5() {
    document.body.innerHTML = `
        <div id="game">
            <h1>🏛️ The Lost Temple...</h1>
            <div style="font-size:50px; animation: popIn 1s ease-out;">
                🗝️ 🪨 🔮
            </div>
            <p style="color:gold; font-size:20px;">✨ You have all 3 items ✨</p>
            <div style="font-size:40px; animation: popIn 1.5s ease-out;">
    💥⚡🌟
</div>
            <p style="color:orange;">The ground shakes... 🌍💥</p>
            <button onclick="unlockTemple()">🔐 Enter The Temple</button>
            <button id="back-btn" onclick="level4()">⬅️ </button>
        </div>
    `;
}

function unlockTemple() {
    document.body.innerHTML = `
        <div id="game">
            <h1>🎊 YOU DID IT!</h1>
            <div id="item-popup">
                <div id="key-icon">🏆</div>
                <h2>✨ THE LOST TEMPLE IS UNLOCKED! ✨</h2>
                <p style="color:white;">You discovered the ancient treasure hidden for centuries... YOU ARE THE EXPLORER! 🌟</p>
                <button onclick="startGame()">🔄 Play Again</button>
            </div>
            <button id="back-btn" onclick="level5()">⬅️</button>
        </div>
    `;
}
