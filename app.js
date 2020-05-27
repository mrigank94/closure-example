/***************************** Comment out a example before moving to the next one **************/



/*******************   Example 1 - Lexical Scope **********************/
const name = "Newton School";
function print() {
    console.log(name);
}
print();

/*******************   Example 2 - Inner Functions **********************/
/*function outer () {
    const a = 10;
    function inner () {
        const b = a + 10;
        return b;
    }
    const calc = inner();
    return calc;
}
const result = outer();
console.log(result);*/

/*******************   Example 3 - Returning the inner function **********************/
/*function outer() {
    const a = 10;
    return function inner() {
        const b = a + 10;
        return b;
    }
}
const result = outer();
console.log(result());*/


/*******************   Example 4 - Creating two timers  **********************/

/*function printNewton() {
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

printNewton();
printSchool();*/

/*******************   Example 5 - Creating a common function using the concept of closure  **********************/
/*
function print(text, timeOut, el) {
    setInterval(() => {
        el.innerText = el.innerText + ' '  + text;
    }, timeOut);
}

print('Newton', 500, document.getElementById('div1'));
print('School', 1000, document.getElementById('div2'));*/
