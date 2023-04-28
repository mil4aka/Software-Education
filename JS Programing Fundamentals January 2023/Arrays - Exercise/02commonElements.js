function commonElements(arr1, arr2) {
    for (let elementArr1 of arr1) {
        if (arr2.includes(elementArr1)) {
            console.log(elementArr1);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
)