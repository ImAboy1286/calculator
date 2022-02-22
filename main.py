def Result(A: number, B: number, Func: number):
    return [A + B,
        A - B,
        A * B,
        A / B,
        A % B,
        min(A, B),
        max(A, B),
        A ** B,
        randint(A, B),
        Math.atan2(A, B),
        Math.sin(A),
        Math.cos(A),
        Math.tan(A),
        Math.sqrt(A),
        Math.asin(A),
        Math.acos(A),
        Math.atan(A)][Func]

def on_button_pressed_a():
    global A22, Func2, B22, State
    if State == 0:
        A22 = A22 + 1
        basic.show_number(A22)
    elif State == 1:
        Func2 = (Func2 + 1) % 17
        basic.show_string("" + (NumToFunc(Func2)))
    elif State == 2:
        B22 = B22 + 1
        basic.show_number(B22)
    elif State == 3:
        State = 0
        A22 = 0
        basic.show_number(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def NumToFunc(Num: number):
    return ["+",
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
        "Atan"][Num]

def on_button_pressed_ab():
    if State == 0:
        A2 = A2 - 1
    elif State == 1:
        pass
    elif State == 2:
        B2 = B2 - 1
    elif State == 3:
        pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global State, B22
    if State == 0:
        State = 1
        basic.show_string("" + (NumToFunc(Func2)))
    elif State == 1:
        B22 = 0
        State = 2
        basic.show_number(0)
    elif State == 2:
        State = 3
        basic.show_number(Result(A22, B22, Func2))
    elif State == 3:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

B22 = 0
Func2 = 0
A22 = 0
State = 0
basic.show_string("Calculator")
basic.show_number(0)