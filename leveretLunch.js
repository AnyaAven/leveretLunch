/**
 * Given a garden, find out how many carrots a
 * leveret will eat before taking a nap! Rules:
 * - Leveret always starts at the center cell. (If
 * there are multiple centers, use the one with the higest value)
 * - After eating those carrots, Leveret moves W, N, E, or S to
 * the cell with the most carrots. (Ties are resolved by cell that
 * comes first, following order of WNES).
 * - Leveret eats the carrots at the new cell, and continues until
 * no nearby cells contain carrots.
 *
 * @param {Array<Array<Number>>} garden Matrix of carrot counts
 * @returns {Number} Amount of carrots eaten.
 */
function carrotsEaten(garden) {
    const eatenGarden = JSON.parse(JSON.stringify(garden));
    let amount = 0;
    let currPosition = findStartPosition(eatenGarden);
    let eating = true;

    while (eating) {
        amount += eatCarrots(currPosition, eatenGarden);
        const nextPosition = findNextPosition(currPosition, eatenGarden);

        if (nextPosition.length === 0) {
            eating = false;
        }
        currPosition = nextPosition;
    }

    return amount;
}

/**
 * Function that finds the 1, 2, or 4 possible starting
 * cells and determines starting cell based on highest carrot count.
 * @param {Array<Array<Number>>} garden Matrix of carrot counts
 * @returns {Array<Number>} Garden coordinate in form of [y, x]
 */
function findStartPosition(garden) {
    const isColsEven = isEven(garden.length);
    const isRowsEven = isEven(garden[0].length);

    /*
   We will always have 1 possible starting cell.
    [ ] [ ]
    [ ] [X]
   */
    let y = Math.floor(garden.length / 2);
    let x = Math.floor(garden[0].length / 2);

    const coords = [];
    coords.push({y, x, value: garden[y][x]})

    /*
     [ ] [ ]
     [?] [X]
    */
    if (isRowsEven) {
        coords.push({y, x: x - 1, value: garden[y][x - 1]});
    }

    /*
     [ ] [?]
     [ ] [X]
    */
    if (isColsEven) {
        coords.push({y: y - 1, x, value: garden[y - 1][x]})

        /*
        [?] [ ]
        [ ] [X]
        */
        if (isRowsEven) {
            coords.push({y: y - 1, x: x - 1, value: garden[y - 1][x - 1]});
        }
    }

    return maxValueCoords(coords);
}

/**
 * Takes an array of coordinate objects and returns
 * the coordinate with the highest value.
 * @param {Array<Object>} coords Obj format of {y, x, value: 0}
 * @returns Coordinate pair of [y, x].
 * Defaults to an empty Array if no values > 0.
 */
function maxValueCoords(coords) {
    let max = 0;
    let position = [];
    for (let coord of coords) {
        if (max < coord.value) {
            max = coord.value;
            position = [coord.y, coord.x];
        }
    }

    return position;
}

/**
 * Updates the number of carrots in the currPosition of
 * the garden to 0.
 * @param {Array<Number>} currPosition [y, x] coordinates
 * @param {Array<Array<Number>>} garden Matrix of carrot values
 * @returns Number of carrots eaten from currPosition
 */
function eatCarrots(currPosition, garden) {
    const [y, x] = currPosition;
    const carrots = garden[y][x];
    garden[y][x] = 0;

    return carrots;
}

/**
 * Finds the position and value of cells in the
 * 4 cardinal directions (WNES) from the currPosition,
 * if they exist. Uses maxValueCoords to determine
 * which of these positions has the highest value.
 * @param {Array<Number>} currPosition [y, x] coords of the current position
 * @param {Array<Array<Number>>} garden Matrix of carrot values
 * @returns Coordinate pair in form of [y, x].
 * Defaults to an empty Array if no next position.
 */
function findNextPosition(currPosition, garden) {
    const [y, x] = currPosition;
    const numCols = garden[0].length - 1;
    const numRows = garden.length - 1;

    // Inserted in WNES order, will automatically resolve ties.
    const coords = [];

    // Check to ensure position is valid position in matrix
    // W cell, ensures position isn't beyond left boundary.
    if (x - 1 >= 0) {
        coords.push({y, x: x - 1, value: garden[y][x - 1]});
    }
    // N cell, ensures position isn't beyond top boundary.
    if (y - 1 >= 0) {
        coords.push({y: y - 1, x, value: garden[y - 1][x]});
    }
    // E cell, ensures position isn't beyond right boundary.
    if (x + 1 <= numCols) {
        coords.push({y, x: x + 1, value: garden[y][x + 1]});
    }
    // S cell, ensures position isn't beyond bottom boundary.
    if (y + 1 <= numRows) {
        coords.push({y: y + 1, x, value: garden[y + 1][x]});
    }

    return maxValueCoords(coords);
}

function isEven(num) {
    return num % 2 === 0;
}

module.exports = {
    carrotsEaten, findStartPosition
}