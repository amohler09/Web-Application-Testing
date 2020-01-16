
export const addStrike = strike => {
    if (strike < 3) {
        return strike + 1
    } else return 0
}