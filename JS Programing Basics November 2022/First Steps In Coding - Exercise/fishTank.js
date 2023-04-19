function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = (Number(input[3])) / 100;
    let tankVolume = length * width * height;
    let tankVolumeinLiters = tankVolume / 1000;
    let neededWater = tankVolumeinLiters * (1 - percentage);
    console.log(neededWater);
}