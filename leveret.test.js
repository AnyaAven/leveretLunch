const {carrotsEaten, findStartPosition} = require("./leveretLunch")

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

test(
    "findStart1", () => {
        expect(findStartPosition(base1))
            .toStrictEqual([1, 1])
    }

)


test(
    "findStart2", () => {
        expect(findStartPosition(base2))
            .toStrictEqual([2, 2])
    }

)
test(
    "findStart3", () => {
        expect(findStartPosition(base3))
            .toStrictEqual([1, 3])
    }

)
test(
    "findStart4", () => {
        expect(findStartPosition(base4))
            .toStrictEqual([1, 1])
    }

)
