function reverseInPlace (arr) {
    let print = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        print += `${arr[i]} `;
    }
    console.log(print.trim());
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])