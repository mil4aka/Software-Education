function projectsCreation(input) {
    let timeForOneProject = 3;
    let workerName = input[0];
    let numberOfProjects = Number(input[1]);
    console.log(`The architect ${workerName} will need ${timeForOneProject * numberOfProjects} hours to complete ${numberOfProjects} project/s.`);
}