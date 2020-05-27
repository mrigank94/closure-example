// First create two simple timers

function printNewton() {
    const el = document.getElementById('div1');
    setInterval(() => {
        el.innerText = el.innerText + ' '  + 'Newton';
    }, 500);
}

function printSchool() {
    const el = document.getElementById('div2');
    setInterval(() => {
        el.innerText = el.innerText + ' '  + 'School';
    }, 1000);
}

//printNewton();
//printSchool();

function print(text, timeOut, el) {
    setInterval(() => {
        el.innerText = el.innerText + ' '  + text;
    }, timeOut);
}

print('Newton', 500, document.getElementById('div1'));
print('School', 1000, document.getElementById('div2'));