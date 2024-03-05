//gavin
function findStart2(garden) {
    // yCoords [1, 2]
    // xCoords [1, 2]
    let yCoords = findCenterCoords(garden);
    let xCoords = findCenterCoords(garden[0]);
    let coordsOfCenterCells = [];

    for (let y of yCoords) {
        for (let x of xCoords) {
            coordsOfCenterCells.push([y, x])
        }
    }

    let values = coordsOfCenterCells.map(([y, x]) => garden[y][x]);
    let max = Math.max(...values);
    return coordsOfCenterCells[values.indexOf(max)];
} //return [y,x]

function findCenterCoords(arr) {
    let centerCoords = [];
    let size = arr.length;

    if (arr.length % 2 === 0) {
        // length of 4 -> [1, 2]
        // (size / 2) - 1 = 1
        // (size / 2) = 2
        centerCoords = [(size / 2) - 1, (size / 2)]
    } else {
        // ODD
        centerCoords = [Math.floor(size / 2)];
    }
    return centerCoords;
} // return [y,x]    // obj {valueOfCoord: [y, x]
