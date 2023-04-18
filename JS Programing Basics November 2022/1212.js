function pin(input) {
    let index = 0;
    let n1 = input[index];
    index++;
    let n2 = input[index];
    index++;
    let n3 = input[index];

    for (let i = 2; i <= n1; i++) {
        if (i % 2 == 0) {
            for (let j = 2; j <= n2; j++) {
                if (j <= n2 && j == 2) {
                    for (let k = 2; k <= n3; k++) {
                        if (k % 2 == 0) {
                            console.log(`${i} ${j} ${k}`);
                        }
                    }
                } else if (j <= n2 && j == 3) {
                    for (let k = 2; k <= n3; k++) {
                        if (k % 2 == 0) {
                            console.log(`${i} ${j} ${k}`);
                        }
                    }
                } else if (j <= n2 && j == 5) {
                    for (let k = 2; k <= n3; k++) {
                        if (k % 2 == 0) {
                            console.log(`${i} ${j} ${k}`);
                        }
                    }
                } else if (j <= n2 && j ==7) {
                    for (let k = 2; k <= n3; k++) {
                        if (k % 2 == 0) {
                            console.log(`${i} ${j} ${k}`);
                        }
                    }
                }
            }
        }
    }
}

pin(["1",
"1",
"1"])
