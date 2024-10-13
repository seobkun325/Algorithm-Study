n = int(input())
lst = []
while n > 0 :
    lst.append(n%2)
    n //= 2
print(sum(lst))