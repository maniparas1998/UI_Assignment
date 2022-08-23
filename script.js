function num() {
    var a;
    a = Number(document.getElementById("input_num").value);
    if (a != " ") {
        if (a >= 0) {
            document.getElementById("numDisplay").innerText = "this is a positive value";
        }
        else {
            document.getElementById("numDisplay").innerText = "please enter a positive value";
        }
    }
    else {
        document.getElementById("numDisplay").innerText = "please enter a value";
    }
}

function even() {
    var a;
    a = Number(document.getElementById("even_num").value);
    var k = 0;
    if (a != " ") {
        if (a % 2 == 0) {
            document.getElementById("evenDisplay").innerHTML = '';
            for (var i = 0; i < 3; i++) {
                document.getElementById("evenDisplay").innerText += ((a + 2) + ',');
                k = a + 2;
                a = k;
            }
        }
        else {
            document.getElementById("evenDisplay").innerText = " This is  an odd number, please enter an even number.";
        }
    }
    else {
        document.getElementById("evenDisplay").innerText = "please enter a value";
    }
}   


function odd() {
    var a;
    a = Number(document.getElementById("odd_num").value);
    var k = 0;
    if (a != " ") {
        if ((a % 2) != 0) {
            document.getElementById("oddDisplay").innerHTML = '';
            for (var i = 0; i < 3; i++) {
                document.getElementById("oddDisplay").innerText += ((a + 2) + ',');
                k = a + 2;
                a = k;
            }
        }
        else {
            document.getElementById("oddDisplay").innerText = " This is  an even number, please enter an odd number.";
        }
    }
    else {
        document.getElementById("oddDisplay").innerText = "please enter a value";
    }
}


