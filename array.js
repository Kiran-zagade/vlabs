function isArithmetic(sequence) {
    const commonDifference = sequence[1] - sequence[0];
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] - sequence[i - 1] !== commonDifference) {
            return false;
        }
    }
    return true;
}

function isGeometric(sequence) {
    const commonRatio = sequence[1] / sequence[0];
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] / sequence[i - 1] !== commonRatio) {
            return false;
        }
    }
    return true;
}

function sumOfArithmetic(sequence) {
    const n = sequence.length;
    return (n / 2) * (sequence[0] + sequence[n - 1]);
}

function sumOfGeometric(sequence) {
    const n = sequence.length;
    const commonRatio = sequence[1] / sequence[0];
    if (commonRatio === 1) {
        return sequence[0] * n;
    }
    return sequence[0] * (1 - Math.pow(commonRatio, n)) / (1 - commonRatio);
}

function main() {
    const input = prompt("Enter the series elements separated by space:");
    const series = input.split(" ").map(Number);

    if (isArithmetic(series)) {
        console.log("The series is an Arithmetic Progression (AP).");
        console.log("Sum of the series:", sumOfArithmetic(series));
    } else if (isGeometric(series)) {
        console.log("The series is a Geometric Progression (GP).");
        console.log("Sum of the series:", sumOfGeometric(series));
    } else {
        console.log("The series is neither AP nor GP.");
    }
}

main();
