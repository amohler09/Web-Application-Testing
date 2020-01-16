export const strike = strike => {
    if (strike < 3) {
        return strike + 1
    } else return 0
}

export const ball = ball => {
    if (ball < 4) {
        return ball + 1
    } else return 0
}

export const foul = strike => {
    if (strike === 0 ) {
        return strike + 1
    } else if (strike === 1) {
        return strike + 1
    } else return strike
}

export const hit = hit => {
    return hit + 1;
}