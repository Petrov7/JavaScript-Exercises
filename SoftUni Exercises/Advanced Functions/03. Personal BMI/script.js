function personalBMI(name, patientAge, patientWeight, patientHeight) {
    const patientBMI = Math.round(patientWeight / Math.pow(patientHeight / 100, 2));
    let patientStatus = "";

    if (patientBMI < 18.5) {
        patientStatus = "underweight";
    } else if (patientBMI < 25) {
        patientStatus = "normal";
    } else if (patientBMI < 30) {
        patientStatus = "overweight";
    } else {
        patientStatus = "obese";
    }

    let patientInfo = {
        name,
        personalInfo: {
            age: patientAge,
            weight: patientWeight,
            height: patientHeight
        },
        BMI: patientBMI,
        status: patientStatus
    };

    if (patientStatus === "obese") {
        patientInfo.recommendation = 'admission required';
    }

    return patientInfo;
}

console.log(personalBMI("Peter", 29, 75, 180));