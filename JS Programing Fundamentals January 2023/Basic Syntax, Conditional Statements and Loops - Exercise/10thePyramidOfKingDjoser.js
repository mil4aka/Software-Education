function pyramid(baseWidthHeight, increment) {
    baseWidthHeight = Number(baseWidthHeight);
    increment = Number(increment);
    let marbleNeeded = 0; //outer
    let lapisNeeded = 0;
    let stoneNeeded = 0; //inner
    let goldNeeded = 0; //top only
    let layersFromBottom = 0;
    let pyramidBase = baseWidthHeight ** 2;
    let innerLayer = 0;
    let outerLayer = 0;
    while (baseWidthHeight > 0) {
        pyramidBase = baseWidthHeight ** 2;
        if (baseWidthHeight - 2 < 1) {
            goldNeeded = pyramidBase;
            layersFromBottom++;
            break;
        }
        layersFromBottom++;
        if (layersFromBottom % 5 == 0 && baseWidthHeight - 2 > 0) {
            innerLayer = (baseWidthHeight - 2) ** 2;
            lapisNeeded += pyramidBase - innerLayer;
            stoneNeeded += innerLayer;
            baseWidthHeight -= 2;
            pyramidBase = baseWidthHeight ** 2
            continue;
        }
        innerLayer = (baseWidthHeight - 2) ** 2;
        stoneNeeded += innerLayer;
        outerLayer = pyramidBase - innerLayer;
        marbleNeeded += outerLayer;

        baseWidthHeight -= 2;
        pyramidBase = baseWidthHeight ** 2
    }
    console.log(`Stone required: ${Math.ceil(stoneNeeded * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbleNeeded * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisNeeded * increment)}`);
    console.log(`Gold required: ${Math.ceil(goldNeeded * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(layersFromBottom * increment)}`);
}