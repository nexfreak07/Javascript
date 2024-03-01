def outer_function():
    x = 10

    def inner_function():
        nonlocal x
        x = 20
        print(x)
    inner_function()

    print(f"Value of x after inner function {x}")

outer_function()
    