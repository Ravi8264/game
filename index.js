
// let c = Number(Math.random());
// c = c * 10
// c = Math.round(c) + 1
// console.log(c)

let backgroundvedio = document.getElementById("backgroundvideo")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let input = document.getElementById("input")
let predict = document.getElementById('predict');

btn1.addEventListener('click', () => {
    let c = Number(Math.random());
    c = c * 10
    c = Math.round(c) + 1
    console.log(c)

    console.log(input.value)
    if (input.value === '') {
        //     btn1.disabled = true;
        //     btn2.disabled = true;
        predict.innerHTML = `<h3>Please Enter Some Value<h3>`
    }
    //else if{
    // btn1.disabled = false;
    // btn2.disabled = false;
    else if (input.value > 10 || input.value < 0) {
        predict.innerHTML = `<h3>Please Enter Between 1 to 10<h3>`
    }
    else if (input.value == c) {
        predict.innerHTML = `<h1 style="color:red">You won<h1>`
        backgroundvedio.setAttribute('class', 'Introduction')

    }
    else {
        predict.innerHTML = `<h3>Don't lose the hope try again<h3>`
    }
    input.value = ""
    // }
})

btn2.addEventListener('click', () => {

    // if (input.value === '') {
    //     console.log('Please Enter Some Value')
    //     // backgroundvedio.classList.remove("Introduction");


    // }
    input.value = ""
    predict.innerHTML = `<h3>Please Enter Between 1 to 10<h3>`
    backgroundvedio.setAttribute('class', 'Introduction1')
})

const text = document.querySelector(' .text p');
text.innerHTML = text.innerText.split("").map((char, i) => `<span style="transform:rotate(${i * 16}deg)">${char}</span>`
).join("")