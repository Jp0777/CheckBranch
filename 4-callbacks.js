const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b;
        console.log(disp)
        callback(sum)
    }, 2000)
}
const disp = (sum) => {
    console.log(sum)
}
add(1, 3, disp)