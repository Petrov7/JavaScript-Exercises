function roadRadar(input) {
    const speed = input[0];
    const area = input[1];

    let obj = {
        residential: 20,
        city: 50,
        interstate: 90,
        motorway: 130
    };

    for (const key in obj) {
        if (key === area) {
            let speedLimit = speed - obj[key];

            if (speedLimit > 0 && speedLimit <= 20) {
                return "speeding";
            } else if (speedLimit > 0 && speedLimit <= 40) {
                return "excessive speeding";
            } else if (speedLimit > 0 && speedLimit > 40) {
                return "reckless driving";
            }
        }
    }

    return "";
}

console.log(roadRadar([40, 'city']));
console.log(roadRadar([41, 'residential']));
console.log(roadRadar([120, 'interstate']));