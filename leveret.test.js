const {highestDirection, carrotsEaten, findStart, findNearbyCells} = require("./leveretLunch")

const base1 = [
    [1, 1, 1],
    [0, 1, 1],
    [9, 1, 9]
];

const base2 = [
    [9, 9, 9, 9],
    [9, 3, 1, 0],
    [9, 1, 4, 2],
    [9, 9, 1, 0],
];

const base3 = [
    [2, 3, 1, 4, 2, 2, 3],
    [2, 3, 0, 4, 0, 3, 0],
    [1, 7, 0, 2, 1, 2, 3],
    [9, 3, 0, 4, 2, 0, 3],
];

const base4 = [
    [0, 0, 0],
    [0, 4, 0],
    [0, 0, 0]
];


test(
    "findNearbyCells", () => {
        expect(findNearbyCells([1,1], base1))
            .toStrictEqual({w: 0, n: 1, e: 1, s: 1, position: [1,1]})
    }

)


test(
    "base1", () => {
        expect(carrotsEaten(base1))
            .toStrictEqual(3)
    }

)

test(
    "base2", () => {
        expect(carrotsEaten(base2))
            .toStrictEqual(6)
    }

)

test(
    "base3", () => {
        expect(carrotsEaten(base3))
            .toStrictEqual(15)
    }

)

test(
    "base4", () => {
        expect(carrotsEaten(base4))
            .toStrictEqual(4)
    }

)

//testing findStart
//
// test(
//     "findStart1", () => {
//         expect(findStart(base1))
//             .toStrictEqual([1, 1])
//     }
//
// )
//
//
// test(
//     "findStart2", () => {
//         expect(findStart(base2))
//             .toStrictEqual([2, 2])
//     }
//
// )
// test(
//     "findStart3", () => {
//         expect(findStart(base3))
//             .toStrictEqual([1, 3])
//     }
//
// )
// test(
//     "findStart4", () => {
//         expect(findStart(base4))
//             .toStrictEqual([1, 1])
//     }
//
// )
//


const directions1 = {w: 0, n: 4, e: 0, s: 2, position: [4, 1]};
const directions2 = {w: 0, n: 4, e: 4, s: 2, position: [4, 1]};
const directions3 = {w: 0, n: 4, e: 4, s: 6, position: [4, 1]};
const directions4 = {w: 0, n: 0, e: 0, s: 0, position: [4, 1]};

test(
    "highest", () => {
        expect(highestDirection(directions1))
            .toStrictEqual([3, 1])
    }

)

test(
    "highest", () => {
        expect(highestDirection(directions2))
            .toStrictEqual([3, 1])
    }

)

test(
    "highest", () => {
        expect(highestDirection(directions3))
            .toStrictEqual([5, 1])
    }

)

test(
    "highest", () => {
        expect(highestDirection(directions4))
            .toStrictEqual([4, 1])
    }

)


