function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;

    // Check if multiplication is possible
    if (colsA !== rowsB) {
        throw new Error("Number of columns in Matrix A must equal number of rows in Matrix B.");
    }

    // Initialize the result matrix with zeros
    const result = new Array(rowsA).fill(null).map(() => new Array(colsB).fill(0));

    // Perform multiplication
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

// Example usage:
const matrixA = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrixB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

const result = multiplyMatrices(matrixA, matrixB);

console.log("Resultant Matrix:");
console.log(result);
