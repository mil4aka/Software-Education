function pwdValidator(password) {
    let isValid = true;

    if (!pwdLengthValid(password)) {
        isValid = false;
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (isNotLetterOrDigit(password)) {
        isValid = false;
        console.log(`Password must consist only of letters and digits`);
    }
    if (!hasTwoOrMoreDigits(password)) {
        isValid = false;
        console.log(`Password must have at least 2 digits`);
    }

    if (isValid) {
        console.log(`Password is valid`);
    }

    function pwdLengthValid(pass) {
        let length = pass.length;
        if (length >= 6 && length <= 10) {
            return true
        } else {
            return false
        }
    }
    function isNotLetterOrDigit(pass) {
        let hasInvalidSymbol = false;
        for (let el of pass) {
            let elToCharCode = el.charCodeAt();
            if ((elToCharCode >= 48 && elToCharCode <= 57) || (elToCharCode >= 65 && elToCharCode <= 90)
                || (elToCharCode >= 97 && elToCharCode <= 122)) {
                hasInvalidSymbol = false;
            } else {
                hasInvalidSymbol = true;
                break;
            }
        }
        if (hasInvalidSymbol) {
            return true;
        } else {
            return false;
        }
    }
    function hasTwoOrMoreDigits(pass) {
        let digitCount = 0;
        for (let el of pass) {
            let elToChar = el.charCodeAt();
            if (elToChar >= 48 && elToChar <= 57) {
                digitCount++;
            }
        }
        if (digitCount < 2) {
            return false;
        } else {
            return true;
        }
    }
}

// pwdValidator('logIn')
// pwdValidator('MyPass123')
pwdValidator('Pa$s$s')