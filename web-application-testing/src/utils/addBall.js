
export const addBall = ball => {
    if (ball < 4) {
        return ball + 1
    } else if (ball === 4) {
        return alert('Youre out!')
    } else return 0
}