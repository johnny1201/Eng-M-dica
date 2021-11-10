# johnny
# pirâmide de caracteres em python
def piramide(nlinhas):        
    for i in range(nlinhas):
        under_count = nlinhas-1-i
        star_count = 2*i+1
        print("_"* under_count + "*"* star_count +"_"* under_count)        
