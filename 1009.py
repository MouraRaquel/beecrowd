nome = str(input())
salario = float(input())
vendas = float(input())

receber = (vendas*0.15) + salario

print('TOTAL = R$ {:.2f}'.format(receber))