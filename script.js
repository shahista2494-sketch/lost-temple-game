let collectedItems = [];

function saveScore(playerName, timeTaken) {
    const scoresRef = window.ref(window.db, 'scores');
    window.push(scoresRef, {
        name: playerName,
        time: timeTaken,
        date: new Date().toLocaleDateString()
    });
}

function goHome() {
    collectedItems = [];
    document.body.innerHTML = `
        <h1>Welcome to The Lost Temple 🏛️</h1>
        <p>Your adventure begins here...</p>
        <button onclick="startGame()">🌿 Start Adventure</button>
    `;
}

function startGame() {
    collectedItems = [];
    window.gameStartTime = Date.now();
    document.body.innerHTML = `
        <div id="game">
            <h1>🌿 Level 1 - Jungle Entry</h1>
            <p>You enter a dark jungle. Suddenly you see two paths...</p>
            <button onclick="choosePath('left')">⬅️ Go Left</button>
            <button onclick="choosePath('right')">➡️ Go Right</button>
            <button id="back-btn" onclick="goHome()">《 Back</button>
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
                <button id="back-btn" onclick="startGame()">《 Back</button>
            </div>
        `;
    } else {
        collectedItems = ['🗝'];
        document.body.innerHTML = `
            <div id="game">
                <h1>🌸 Right Path!</h1>
                <p>You found something...</p>
                <div id="item-popup">
                    <div id="key-icon">🗝️</div>
                    <h2>🔑 ANCIENT MAP KEY FOUND!</h2>
                    <p style="color:white;">This key will unlock the temple door...</p>
                    <button onclick="level2()">✅ Take the Key</button>
                </div>
                <button id="back-btn" onclick="startGame()">《 Back</button>
            </div>
        `;
    }
}

function useStick() {
    collectedItems = ['🗺'];
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
            <button id="back-btn" onclick="choosePath('left')">《 Back</button>
        </div>
    `;
}

function runBack() {
    document.body.innerHTML = `
        <div id="game">
            <h1>🏃 You ran back!</h1>
            <p>You escaped the snake but lost your way... Try the other path!</p>
            <button onclick="startGame()">🔄 Try Again</button>
            <button id="back-btn" onclick="choosePath('left')">《 Back</button>
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
            <button id="back-btn" onclick="startGame()">《 Back</button>
        </div>
    `;
}

function chooseBridge() {
    document.body.innerHTML = `
        <div id="game">
            <h1>💥 Bridge Collapsed!</h1>
            <p>The old bridge breaks under your weight! You fall but grab a rock...</p>
            <button onclick="level2()">🔄 Try Again</button>
            <button id="back-btn" onclick="level2()">《 Back</button>
        </div>
    `;
}

function chooseRope() {
    collectedItems.push('🪨');
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
            <button id="back-btn" onclick="level2()">《 Back</button>
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
            <button id="back-btn" onclick="level2()">《 Back</button>
        </div>
    `;
}

function useWater() {
    collectedItems.push('🔮');
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
            <button id="back-btn" onclick="level3()">《 Back</button>
        </div>
    `;
}

function useShield() {
    document.body.innerHTML = `
        <div id="game">
            <h1>🔥 Shield Melted!</h1>
            <p>The flames were too strong! Shield melted away... Try again!</p>
            <button onclick="level3()">🔄 Try Again</button>
            <button id="back-btn" onclick="level3()">《 Back</button>
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
            <button id="back-btn" onclick="level3()">《 Back</button>
        </div>
    `;
}

function chooseSymbol(symbol) {
    if (symbol === 'moon') {
        collectedItems.push('🔐');
        document.body.innerHTML = `
            <div id="game">
                <h1>🎉 Correct Symbol!</h1>
                <p>The door slowly opens...</p>
                <div id="item-popup">
                    <div id="key-icon">🔐</div>
                    <h2>✨ TEMPLE KEY FOUND!</h2>
                    <p style="color:white;">The final key to unlock The Lost Temple!</p>
                    <button onclick="level5()">✅ Enter the Temple</button>
                </div>
                <button id="back-btn" onclick="level4()">《 Back</button>
            </div>
        `;
    } else {
        document.body.innerHTML = `
            <div id="game">
                <h1>💥 Wrong Symbol!</h1>
                <p>A trap activates! Arrows fly past you... You barely escape!</p>
                <button onclick="level4()">🔄 Try Again</button>
                <button id="back-btn" onclick="level4()">《 Back</button>
            </div>
        `;
    }
}

function level5() {
    document.body.innerHTML = `
        <div id="game">
            <h1>🏛️ The Lost Temple...</h1>
            <div style="font-size:40px; animation: popIn 1s ease-out;">
                ${collectedItems.join(' ')}
            </div>
            <p style="color:gold; font-size:20px;">✨ You have all ${collectedItems.length} items ✨</p>
            <div id="shake-effect">⚡💥🌟⚡</div>
            <p style="color:orange;">The ground shakes... 🌍💥</p>
            <button onclick="unlockTemple()">🔐 Enter The Temple</button>
            <button id="back-btn" onclick="level4()">《 Back</button>
        </div>
    `;
}

function unlockTemple() {
    const playerName = prompt("🏆 You Won! Enter your name for the leaderboard:");
    const timeTaken = Math.floor((Date.now() - window.gameStartTime) / 1000);
const endTime = timeTaken + ' seconds';
    if (playerName) {
        saveScore(playerName, endTime);
    }
    document.body.innerHTML = `
        <div id="game">
            <h1>🎊 YOU DID IT!</h1>
            <div id="item-popup">
                <div id="key-icon">🏆</div>
                <h2>✨ THE LOST TEMPLE IS UNLOCKED! ✨</h2>
                <p style="color:white;">Congratulations ${playerName || 'Explorer'}! You discovered the ancient treasure! 🌟</p>
                <button onclick="showLeaderboard()">🏆 View Leaderboard</button>
                <button onclick="startGame()">🔄 Play Again</button>
            </div>
             <button id="back-btn" onclick="unlockTemple()">《 Back</button>
        </div>
    `;
}

function showLeaderboard() {
    const scoresRef = window.ref(window.db, 'scores');
    window.onValue(scoresRef, (snapshot) => {
        const data = snapshot.val();
        let rows = '';
        if (data) {
            Object.values(data)
                .sort((a, b) => parseInt(a.time) - parseInt(b.time))
                .slice(0, 10)
                .forEach((player, index) => {
                    rows += `<tr>
                        <td>${index + 1}</td>
                        <td>${player.name}</td>
                        <td>${player.time}</td>
                    </tr>`;
                });
        }
        document.body.innerHTML = `
            <div id="game">
                <h1>🏆 Leaderboard</h1>
                <table style="color:white; width:100%; border-collapse:collapse;">
                    <tr style="border-bottom:1px solid gold;">
                        <th>#</th>
                        <th>Name</th>
                        <th>Time</th>
                    </tr>
                    ${rows || '<tr><td colspan="3">No scores yet!</td></tr>'}
                </table>
                <button onclick="startGame()">🔄 Play Again</button>
            </div>
        `;
    }, { onlyOnce: true });
}
