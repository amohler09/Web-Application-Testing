
export const addStrike = strike => {
    if (strike < 3) {
        return strike + 1
    } else if (strike === 3) {
        return alert('Youre out!')
    } else return 0
}