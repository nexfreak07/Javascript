def outer_function():
    global x
    x = 10

    def inner_function():
        x = 20
        print(x)
    inner_function()

    print(f"Value of x after inner function {x}")

outer_function()

print(x)
    