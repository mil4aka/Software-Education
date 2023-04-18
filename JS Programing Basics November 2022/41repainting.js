function repainting(input) {
    let nylon = 1.50;
    let paint = 14.5;
    let paintThinner = 5;
    let neededNylon = Number(input[0]);
    let neededPaint = Number(input[1]);
    let neededPaintThinner = Number(input[2]);
    let workerHours = Number(input[3]);
    let totalCostOfMaterials = (nylon * (neededNylon + 2)) + ((paint * neededPaint) * 1.1) + 0.4 + (paintThinner * neededPaintThinner);
    let workerCost = (totalCostOfMaterials * 0.30) * workerHours;
    let totalCost = totalCostOfMaterials + workerCost
    console.log(totalCost);
}

repainting(["10", "11", "4", "8"])
