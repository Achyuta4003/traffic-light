let bulb = document.getElementsByClassName('light')
let btn = document.getElementsByClassName('btn')[0]

let current = 0;
let lights = [1, 3, 4, 2] // [red, red+orange, green, orange]
let delay = [10, 2, 8, 2]
let color = [["#200000", "red"], ["#202000", "orange"], ["#002000", 'green']]





function start() {
    for (let i = 0; i < 3; i++) {

        let glowstatus = (lights[current] & Math.pow(2, i)) / Math.pow(2, i) // 0 --> off, 1--> on
        console.log([glowstatus]);

        bulb[i].style.backgroundColor = color[i][glowstatus]

    }

    setTimeout(start, delay[current] * 1000)
    current = (current + 1) % 4

}



