let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEL)

let count = 0

function increment() {
    count += 1
    countEL.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    console.log(count)
}
