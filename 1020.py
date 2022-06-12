tempo = int(input())
anos = (tempo//365)
meses = (tempo%365)//30
dias = ((tempo%365)%30)

print('{} ano(s)'.format(anos))
print('{} mes(es)'.format(meses))
print('{} dia(s)'.format(dias))