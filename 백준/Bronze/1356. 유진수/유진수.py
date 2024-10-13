import sys
input = sys.stdin.readline

n = int(input())
N =[]
while n > 0 :
    N.append(n%10)
    n //= 10
for x in range (1, len(N)) :
    a = N[:x]
    b = N[x:]
    aSum, bSum = 1, 1
    for i in a :
        aSum *= i
    for j in b :
        bSum *= j
    if aSum == bSum :
        print("YES")
        break
else :
    print("NO")