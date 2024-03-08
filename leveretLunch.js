/*// Maximum 4 centers

//base case check if any carrots are available

// findStart() // return [y,x] // [cols, rows]
//highestDirection() // include tie scenario
//eatCarrots() - function how many carrots needs to be totaled


//directions have to go through all of them
//only

//if it's on the edge, need to do something

//change cell to 0 once eaten*/


//gavin
function findNearbyCells(currPosition, garden) { // edge of the garden
    const directions = {w: 0, n: 0, e: 0, s: 0, position: currPosition};
    const y = currPosition[0];
    const x = currPosition[1];
    const numRows = garden.length - 1;
    const numCols = garden[0].length - 1;

    if (x - 1 >= 0) {
        directions.w = garden[y][x - 1];
    }
    if (y - 1 >= 0) {
        directions.n = garden[y - 1][x];
    }
    if (x + 1 <= numCols) {
        directions.e = garden[y][x + 1];
    }
    if (y + 1 <= numRows) {
        directions.s = garden[y + 1][x];
    }
    return directions;

} //return directions = {w: 0, n: 0, e: 0, s: 0, position: currPostion};

//anya
function highestDirection(obj) { //obj of always 4
    const orderOfDirections = ["w", "n", "e", "s"];
    let highestVal = 0;
    let winningDirection = "none";

    for (let direction of orderOfDirections) {
        if (highestVal < obj[direction]) {
            highestVal = obj[direction];

            winningDirection = direction;
        }
    }

    let y = obj.position[0];
    let x = obj.position[1];

    switch (winningDirection) {
        case "w":
            return [y, x - 1];

        case "n":
            return [y - 1, x];

        case "e":
            return [y, x + 1];

        case "s":
            return [y + 1, x];

        case "none":
            return obj.position; // return original position if we did not move
    }
} // return [y,x]

function maxValueCoords(arrOfObjs) {
    let highest = 0;
    let coords;
    for (let obj of arrOfObjs) {
        if (highest < obj.value) {
            highest = obj.value
            coords = [obj.y, obj.x]
        }
    }

    return coords;
} // return [y,x]

function isEven(num) {
    return num % 2 === 0
}

function findStart(garden) {
    const isColsEven = isEven(garden.length);
    const isRowsEven = isEven(garden[0].length);

    //Grabs the bottom right of the center
    let y = Math.floor(garden.length / 2);
    let x = Math.floor(garden[0].length / 2);

    const coords = [];

    coords.push({y, x, value: garden[y][x]})

    if (isRowsEven) {
        coords.push({y, x: x - 1, value: garden[y][x - 1]});
    }

    if (isColsEven) {
        coords.push({y: y - 1, x, value: garden[y - 1][x]})

        if (isRowsEven) {
            coords.push({y: y - 1, x: x - 1, value: garden[y - 1][x - 1]});
        }
    }

    return maxValueCoords(coords);
} // returns [y,x]

//anya
function eatCarrots(currPosition, eatenGarden) { //receives [y,x], eatenGarden
    const [y, x] = currPosition;
    let carrotsNum = eatenGarden[y][x]
    eatenGarden[y][x] = 0;

    return carrotsNum
} // return  amount eaten

function areArraysEqual(arr1, arr2) {
    // different lengths guarantee they are not equal.
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        // Fail early if any comparison isn't equal.
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // Arrays are equal!
    return true;
}

function carrotsEaten(garden) {
    const eatenGarden = [...garden];
    let amount = 0;
    let currPosition = findStart(eatenGarden);
    let eating = true;

    while (eating) {
        amount += eatCarrots(currPosition, eatenGarden)

        let nearbyCells = findNearbyCells(currPosition, eatenGarden);
        let nextPosition = highestDirection(nearbyCells);

        if (areArraysEqual(currPosition, nextPosition)) {
            eating = false;
        }
        currPosition = nextPosition;
    }

    //console.log(amount)
    return amount;
}


module.exports = {
    carrotsEaten, highestDirection, findStart, findNearbyCells
}