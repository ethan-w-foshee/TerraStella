var gameData = {
    // IMPORTANT STUFF IN HERE?!
    stick: 0,
    rock: 0,
    ore: 0
}

var hidden = document.getElementsByClassName("hidden")

function grabStick() {
    // He grab-a da stick!
    gameData.stick += 1
    document.getElementById("sticks").innerHTML = "Sticks: " + gameData.stick
}

function grabRock() {
    // We have a small chance to find a shiny rock!!
    gameData.rock += 1
    document.getElementById("rocks").innerHTML = "Rocks: " + gameData.rock
}

function reset() {
    // Use this to hard reset the game!
    gameData = {
        stick: 0,
        rock: 0,
        ore: 0
    }
    document.getElementById("sticks").innerHTML = "Sticks: " + gameData.stick
    document.getElementById("rocks").innerHTML = "Rocks: " + gameData.rock
}