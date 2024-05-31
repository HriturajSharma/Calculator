let input = document.getElementById('screen-val')
let btns = document.querySelectorAll('.btn');

let buttons = Array.from(btns);
let string = "";

buttons.forEach((e) => {
    e.addEventListener('click', (event) => {
       

        if (event.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (event.target.innerHTML == "=") {

            string = eval(string);
            input.value = string;

        } else if (event.target.innerHTML == "--") {

            string = string.substring(0,string.length-1);
            input.value = string;

        } else {

            string += event.target.innerHTML;
            input.value = string;
            console.log(event.target.innerHTML)
        }

    })
})

