const anestesicos = {
    lidocaina2: { mg: 36, max: 4.4, maxabs: 300 },
    lidocaina3: { mg: 54, max: 4.4, maxabs: 300 },
    mepivacaina2: { mg: 36, max: 4.4, maxabs: 300 },
    mepivacaina3: { mg: 54, max: 4.4, maxabs: 300 },
    articaina: { mg: 72, max: 7, maxabs: 500 },
    prilocaina: { mg: 36, max: 6, maxabs: 400 },
    bupivacaina: { mg: 9, max: 1.3, maxabs: 90 }
}

calculate = (anestesico, peso) => {
    let dose = anestesico.max * peso;
    if(dose >= anestesico.maxabs){
        dose = anestesico.maxabs
    }
    let tubes = dose / anestesico.mg;

    console.log(`dose: ${dose}, tubes: ${tubes}`);

}
calculate(anestesicos["lidocaina3"], 120)