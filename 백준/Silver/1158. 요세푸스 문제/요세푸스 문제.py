N, K = map(int, input().split(" "))
ans = []
q = []
for i in range(N) :
    q.append(i+1)
c = 0
print("<", end="")
while q :
    r = len(q)
    a = q.pop((c+K-1)%r)
    c = (c+K-1)%r
    if r == 1 :
        print(a,end="")
    else :
        print(a, end=", ")
print(">")