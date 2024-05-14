let points = 0;
let clickPower = 1;
let upgradeCost = 10;
let autoClicks = 0;
let autoClickPower = 1;

const clickButton = document.getElementById("clickButton");
const pointsDisplay = document.getElementById("points");
const upgradeButton = document.getElementById("upgradeButton");
const clickPowerText = document.getElementById("clickPowerText");
const upgradeCostText = document.getElementById("upgradeCostText")
const autoclickerButton = document.getElementById("autoclickerUpgrade")
const autoClickPowerText = document.getElementById("autoClickPowerText")

function updateDisplay() {
    pointsDisplay.textContent = `Points: ${points}`;
    clickPowerText.textContent = `Clicking Power is ${clickPower}`;
    upgradeCostText.textContent = `Upgrade Cost is ${upgradeCost}`;
    autoClickPowerText.textContent = `Autoclick Power is ${autoClickPower}`;
}

clickButton.addEventListener("click", () => {
    points+= clickPower;
    updateDisplay();
});

upgradeButton.addEventListener("click", () => {
    if (points >= upgradeCost) {
        points -= upgradeCost;
        clickPower++;
        upgradeCost *= 2;
        updateDisplay();
    }
    
});

let autoClickInterval;

autoclickerButton.addEventListener("click", () => {
    const autoClickCost = 20; // Set the cost of autoclicker
    console.log("Autoclicker button clicked");
    if (points >= autoClickCost) { // Check if player has enough points
        points -= autoClickCost; // Deduct points for purchasing autoclicker
        autoClicks++;
        autoClickPower++;
        if (!autoClickInterval) { // Check if the autoclicker timer is not already set up
            autoClickInterval = setInterval(() => {
                points += autoClickPower; // Add points based on autoclick power every second
                updateDisplay();
            }, 1000); // Set up the timer only once
        }
        updateDisplay();
    }
});
