# johnny
# pirâmide de caracteres em python
x = int (input('digite um numero\n'))
print(x)
for linha in range(0,x):   
    for coluna in range(0,2*x-1):
        if (coluna<x-linha-1 or coluna>x+linha-1):
            print('_', end="")
        else:
            print('*', end="")
    print('\n')
