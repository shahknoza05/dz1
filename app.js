let shop = {
    name: 'apple',
    owner: 'shahknoza',
    address: 'moskovskaya 78',
    worldFamous: false
}

let deg = 18

if (deg < -20) {
    console.log('Мороз')
} else if (deg <= -20 && deg < 0) {
    console.log('холод')
}else if (deg > 0 && deg < 15) {
    console.log(' прохладно')
}else if (deg >= 15 && deg < 28) {
    console.log('тепло')
} else if (deg >= 28 ) {
    console.log('жарко')
}