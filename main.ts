function Result (A: number, B: number, Func: number) {
    return [
    A + B,
    A - B,
    A * B,
    A / B,
    A % B,
    Math.min(A, B),
    Math.max(A, B),
    A ** B,
    randint(A, B),
    Math.atan2(A, B),
    Math.sin(A),
    Math.cos(A),
    Math.tan(A),
    Math.sqrt(A),
    Math.asin(A),
    Math.acos(A),
    Math.atan(A)
    ][Func]
}
input.onButtonPressed(Button.A, function () {
    if (State == 0) {
        A22 = A22 + 1
        basic.showNumber(A22)
    } else if (State == 1) {
        Func2 = (Func2 + 1) % 17
        basic.showString("" + (NumToFunc(Func2)))
    } else if (State == 2) {
        B22 = B22 + 1
        basic.showNumber(B22)
    } else if (State == 3) {
        State = 0
        A22 = 0
        basic.showNumber(0)
    }
})
function NumToFunc (Num: number) {
    return [
    "+",
    "-",
    "*",
    "/",
    "%",
    "M",
    "m",
    "^",
    "Rng",
    "Atan2",
    "Sin",
    "Cos",
    "Tan",
    "SqrRt",
    "Asin",
    "Acos",
    "Atan"
    ][Num]
}
input.onButtonPressed(Button.AB, function () {
    let A2: number;
let B2: number;
if (State == 0) {
        A22 = A2 - 1
        basic.showNumber(A22)
    } else if (State == 1) {
    	
    } else if (State == 2) {
        B22 = B2 - 1
        basic.showNumber(B22)
    } else if (State == 3) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (State == 0) {
        State = 1
        basic.showString("" + (NumToFunc(Func2)))
    } else if (State == 1) {
        B22 = 0
        State = 2
        basic.showNumber(0)
    } else if (State == 2) {
        State = 3
        basic.showNumber(Result(A22, B22, Func2))
    } else if (State == 3) {
    	
    }
})
let B22 = 0
let Func2 = 0
let A22 = 0
let State = 0
basic.showString("Calculator")
basic.showNumber(0)
