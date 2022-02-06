function factorial (num) {
    if (!Number.isInteger(num) || num < 0) {
        throw new Error(`Invalid parameter: ${num} \n Parameter for factorial must be a positive integer.`);
    }
    
    if (num === 0 || num === 1) {
        return 1;
    }

    let result;

    for (let i = 1; i < num; i++) {
        if (typeof result === 'number') {
            result = i * result;
        }
        else {
            result = i;
        }
    }

    return result * num;
}
