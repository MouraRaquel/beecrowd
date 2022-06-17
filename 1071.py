x = int(input())
y = int(input())

soma = int()

if x > y:
    for i in range(y+1, x):

        if i%2 != 0:
            soma += i

if y > x:
    for i in range(x+1, y):

        if i%2 != 0:
            soma += i

print(soma)