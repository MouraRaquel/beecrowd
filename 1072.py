n = int(input())
dentro = int()
fora = int()

for n in range(n):
    valor = int(input())
    if valor >= 10 and valor <= 20:
        dentro += 1
    else:
        fora += 1

print(dentro, 'in')
print(fora, 'out')