async function asyncSquare(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Square of ${n}: ${n * n}`);
            resolve({ num: n, square: n * n }); // Returning both num and square
        }, 1000);
    });
}

async function calculateSquares(n) {
    try {
        let res1 = await asyncSquare(n);
        let res2 = await asyncSquare(res1.square);
        let res3 = await asyncSquare(res2.square);

        console.log(`Finally ${res3.num} ka square hai:`, res3.square);
    } catch (err) {
        console.log("Error Encountered:", err);
    }
}

calculateSquares(3);
