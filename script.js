
function display(val) {
    document.getElementById("output").value += val
}

function evalFunc(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("output").value += event.key;
}

var cal = document.getElementById("claculator");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("output").value
        console.log(x);
        solve();
    }
}
function clr() {
    document.getElementById("output").value = ""
}

function solve() {
    let x = document.getElementById("output").value
    let y = math.evaluate(x)
    document.getElementById("output").value = y
}
