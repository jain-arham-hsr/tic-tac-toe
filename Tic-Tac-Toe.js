function setValue(id) {
    const textInnerHtml = document.getElementById("text").innerHTML;
    if (textInnerHtml === "Wins") {
        return;
    }
    const button = document.getElementById(id);
    const turn = document.getElementById("turn");
    if (button.innerHTML === "") {
        button.innerHTML = turn.innerHTML;
        const btn1 = document.getElementById("btn1").innerHTML;
        const btn2 = document.getElementById("btn2").innerHTML;
        const btn3 = document.getElementById("btn3").innerHTML;
        const btn4 = document.getElementById("btn4").innerHTML;
        const btn5 = document.getElementById("btn5").innerHTML;
        const btn6 = document.getElementById("btn6").innerHTML;
        const btn7 = document.getElementById("btn7").innerHTML;
        const btn8 = document.getElementById("btn8").innerHTML;
        const btn9 = document.getElementById("btn9").innerHTML;
        if ((btn1 !== "" && btn1 === btn2 && btn1 === btn3) || (btn4 !== "" && btn4 === btn5 && btn4 === btn6) || (btn7 !== "" && btn7 === btn8 && btn7 === btn9) || (btn1 !== "" && btn1 === btn4 && btn1 === btn7) || (btn2 !== "" && btn2 === btn5 && btn2 === btn8) || (btn3 !== "" && btn3 === btn6 && btn3 === btn9) || (btn1 !== "" && btn1 === btn5 && btn1 === btn9) || (btn3 !== "" && btn3 === btn5 && btn3 === btn7)) {
            document.getElementById("text").innerHTML = "Wins";
        } else {
            let filled = 0;
            for (let i = 1; i < 10; i++) {
                if (document.getElementById("btn" + i).innerHTML !== "") {
                    filled++
                }
            }
            if (filled === 9) {
                document.getElementById("turn").hidden = true;
                document.getElementById("text").innerHTML = "Draw!";
            }
            if (turn.innerHTML === "○") {
                turn.innerHTML = "×";
            } else {
                turn.innerHTML = "○";
            }
        }
    }
}

function refresh() {
    document.getElementById("turn").hidden = false;
    const turn = document.getElementById("turn");
    let symbols = ["×", "○"]
    for (let i = 1; i < 10; i++) {
        document.getElementById("btn" + i).innerHTML = "";
    }
    turn.innerHTML = symbols[Math.round(Math.random())];
    document.getElementById("text").innerHTML = "Turn";
}