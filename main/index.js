var gameData = {
    // IMPORTANT STUFF IN HERE?!
    stick: 0,
    rock: 0,
    ore: 0
}

// Get random number generator!
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function grabStick() {
    // He grab-a da stick!
    gameData.stick += 1
    document.getElementById("sticks").innerHTML = "Sticks: " + gameData.stick
    document.getElementsByClassName("resources")[0].style.display = "flex";
}

function grabRock() {
    // We have a small chance to find a shiny rock!!
    if (getRandomInt(100) + 1 == 20) {
        gameData.ore += 1
        document.getElementById("ores").innerHTML = "Ore: " + gameData.ore
        document.getElementsByClassName("resources")[2].style.display = "flex";
    }
    else {
        gameData.rock += 1
        document.getElementById("rocks").innerHTML = "Rocks: " + gameData.rock
        document.getElementsByClassName("resources")[1].style.display = "flex";
    }
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
    let resources = document.getElementsByClassName("resources")
    for (let resource of resources) {
        resource.style.display = "none"
    }
}