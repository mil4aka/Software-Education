function cooking(input) {
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let flour = Number(input[2]);
    let eggs = Number(input[3]);
    let apron = Number(input[4]);
    let freeflour = Math.floor(students / 5);
    let apronsNeeded = Math.ceil(students * 1.2);
    let setsneeded = (flour *(students - freeflour)) + (eggs * 10 * students) + (apronsNeeded * apron);
    if (setsneeded <= budget) {

        console.log(`Items purchased for ${setsneeded.toFixed(2)}$.`);
    } else {
        console.log(`${(setsneeded - budget).toFixed(2)}$ more needed.`);
    }

}

cooking(
    ['50',
        '2',
        '1.0',
        '0.10',
        '10.0'])

        cooking(['100',
        '25',
        '4.0',
        '1.0',
        '6.0'])
        