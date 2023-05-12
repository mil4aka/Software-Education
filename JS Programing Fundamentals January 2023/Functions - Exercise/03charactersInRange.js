function charactersInRange(startChar, endChar) {
    let arr = [];
    let startNum = Math.min(startChar.charCodeAt(0), endChar.charCodeAt(0));
    let endNum = Math.max(startChar.charCodeAt(0), endChar.charCodeAt(0));


    for (let i = startNum + 1; i < endNum; i++) {
        let codeToChar = String.fromCharCode(i);
        arr.push(codeToChar);
    }
    console.log(arr.join(" "));

}
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');