n = int(input())

notas = [100, 50, 20, 10, 5, 2, 1]

print(n)
for i in notas:
    count = n // i
    print('{:.0f} nota(s) de R$ {},00'.format(count, i))
    n %= i