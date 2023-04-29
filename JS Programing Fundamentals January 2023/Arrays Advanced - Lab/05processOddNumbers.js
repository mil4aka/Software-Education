(resArr) => resArr
        .filter((el, i) => i % 2 != 0)
        .map(x => x * 2)
        .reverse()
        .join(" ")

// resArr([10, 15, 20, 25])
// resArr([3, 0, 10, 4, 7, 3])